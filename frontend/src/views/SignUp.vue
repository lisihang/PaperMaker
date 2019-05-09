<template>
  <div class="signup">
    <el-container>
      <el-header></el-header>
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
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-row>
      </el-main>
    </el-container>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  data () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      } else if (value.length < 3 || value.length > 11) {
        callback(new Error('用户名长度错误'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        name: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        name: [
          { validator: checkName, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // submitForm (formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert('注册成功！')
    //       this.$router.push({ name: 'SignIn' })
    //     } else {
    //       console.log('注册失败')
    //       return false
    //     }
    //   })
    // },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // if (this.ruleForm.name === 'a' && this.ruleForm.pass === '1') {
          //   alert('Welcome，' + this.ruleForm.name + '!')
          //   this.$router.push({ name: 'home' })
          // } else {
          //   alert('用户名或密码错误')
          // }
          axios.post('/signup', {
            user: this[formName].name,
            pass: this[formName].pass
          })
            .then((response) => {
              if (response.status === 200) {
                if (response.data.status === 'success') {
                  // this.$store.commit('SET_TOKEN', response.data.payload.token)
                  // this.$store.commit('GET_USER', this[formName].name)
                  this.$message({
                    message: '注册成功',
                    type: 'success'
                  })
                  this.$router.push({ name: 'signin' })
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

<style>

  .signup{
    background-image: url(../assets/background.jpg);

    height: 650px;
    background-position: center top;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
