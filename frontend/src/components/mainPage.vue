<template>
  <div>
    <el-container>
      <el-header class=" header" style="background-color: #606266" height="100px">
        <h3>Welcome to PaperMaker</h3>
      </el-header>
    </el-container>
    <P>组卷一时爽，一直组卷一直爽</P>
    <el-container>
      <el-col style="margin-bottom: 200px; border-radius: 40px" span="160px">
      </el-col>
    </el-container>
    <el-row>
      <el-button type="info" @click="sign1">登录</el-button>
      <el-button type="info" @click="sign2">注册</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'mainPage',
  methods: {
    sign1 () {
      this.$router.push({ name: 'SignIn' })
    },
    sign2 () {
      this.$router.push({ name: 'SignUp' })
    }
  }
}
</script>

<style>
  .el-header {
    background-color: #606266;
    color: #E6A23C;
    text-align: center;
    height: 130px;
    font-size: 30px;
    font-family: Helvetica Neue;
  }
  h3 {
   color: #E6A23C;
  }
  /*.el-button {*/
  /*  background-color: #545c64;*/
  /*  color: #E6A23C;*/
  /*}*/
</style>
