<template>
  <div class="profile">
    <el-form ref="formProfile" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="管理员名" prop="adminname">
        <el-input v-model="form.adminname" readonly></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="password1">
        <el-input v-model="form.password1" type="password"></el-input>
      </el-form-item>
      <el-form-item label="在输一次" prop="password2">
        <el-input v-model="form.password2" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit(formProfile)">修改</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {
      form: {
        adminname: "",
        password1: "",
        password2: "",
        readonly: true
      },
      rules: {
        adminname: [
          { required: true, message: "账号不可为空", trigger: "blur" }
        ],
        password1: [
          { required: true, message: "密码不可为空", trigger: "blur" }
        ],
        password2: [
          { required: true, message: "密码不可为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.form.adminname = this.$store.state.admin;
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "修改成功",
            center: true
          });
        } else {
          this.$message({
            message: "修改失败",
            center: true
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.profile {
  width: 300px;
}
</style>