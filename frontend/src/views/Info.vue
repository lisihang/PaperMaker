<template>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-button type="primary" @click="logout" plain>登出</el-button>
      </el-header>
    </el-container>
</template>
<script>
import store from '../components/store.js'
export default {
  name: 'Info',
  methods: {
    logout () {
      const token = store.state.token
      if (token) {
        this.$store.commit('LOG_OUT')
        this.$message('byebye')
        this.$router.replace({ name: 'home' })
      } else {
        this.$message('您还未登录')
      }
    }
  }
}
</script>

<style scoped>

</style>
