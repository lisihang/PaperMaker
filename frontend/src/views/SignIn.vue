<template>
  <div class="signin">
    <el-container>
      <el-header>
      </el-header>
      <el-main>
        <img src="../assets/logo.png">
        <el-row type="flex" justify="center" :span="18">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
<<<<<<< HEAD
<<<<<<< HEAD
              <a @click="$router.push('/signup')"> 新用户？</a>
            </el-form-item>
            <el-form-item>
=======
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
=======
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-row>
      </el-main>
    </el-container>
  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
=======


>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
</template>
<script>
import axios from 'axios'
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
export default {
  data: function () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (this.ruleForm.pass === '0') {
        callback(new Error('密码错误'))
      } else {
        callback()
      }
    }
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else if (value === '0') {
        callback(new Error('invalid username'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        name: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        name: [
          { validator: validateName, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // if (this.ruleForm.name === 'a' && this.ruleForm.pass === '1') {
          //   alert('Welcome，' + this.ruleForm.name + '!')
          //   this.$router.push({ name: 'home' })
          // } else {
          //   alert('用户名或密码错误')
          // }
          // this.$store.commit('SET_TOKEN', 'a')
          // this.$store.commit('GET_USER', 'a')
          // this.$message({
          //   message: '登陆成功',
          //   type: 'success'
          // })
          // this.$router.push({ name: 'home' })
          axios({
            method: 'post',
            url: '/signin',
            data: {
              username: this[formName].name,
              password: this[formName].pass
            }
          })
            .then((response) => {
              if (response.status === 200) {
                if (response.data.status === 'success') {
                  this.$store.commit('SET_TOKEN', response.data.payload.token)
                  this.$store.commit('GET_USER', this[formName].name)
                  this.$message({
                    message: '登陆成功',
                    type: 'success'
                  })
                  this.$router.push({ name: 'home' })
                } else {
                  console.log(response.data.message)
                  this.$refs[formName].resetFields()
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.signin{
  background-image: url(../assets/background.jpg);

  height: 650px;
  background-position: center top;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
