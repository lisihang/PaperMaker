<template>
  <el-container>
      <el-row>
        <el-col :span="10" align="center" :offset="7">
          <h2>欢迎来到 papermaker</h2>
        </el-col>
        <el-col :span="1" :offset="5">
          <el-button type="primary" @click="logout" style="margin-left: 10px" size="mini">登出</el-button>
        </el-col>

      </el-row>
    <img src= "../assets/background_green.png" height="400px"/>
    <h3>只需三步，你即可获得一份完整的试卷</h3>
    <el-button style="margin-top: 12px;width: 60px" @click="next" size="mini">下一步</el-button>
    <div style="height: 300px">
      <el-steps :active="active" direction="vertical">
        <el-step title="步骤 1" icon="el-icon-search" description="浏览题库，挑选你欣赏的试题,并将它们加入到试题篮和你的私人收藏中"></el-step>
        <el-step title="步骤 2" icon="el-icon-connection" description="打开你的试题篮，选择相应的试题，一键组卷"></el-step>
        <el-step title="步骤 3" icon="el-icon-download" description="获取你的试卷，你可以下载和收藏它"></el-step>
      </el-steps>
    </div>
    <h3>现在，开启你的组卷之旅吧</h3>
    <el-footer>
      <div class="footer_bottom">
        <div class="copy">
          <pre>开发成员：2019年春季学期软件工程第二小组          更多关于此网站的资料 请移步 <a href="https://github.com/lisihang/PaperMaker" target="_blank" >我们的github仓库</a></pre>
          <br>
          <pre>特别鸣谢 孙艳春老师及张乐聪助教的指导和支持！</pre>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import store from '../components/store.js'
export default {
  name: 'Main',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    },
    logout () {
      const token = store.state.token
      if (token) {
        this.$store.commit('LOG_OUT')
        this.$message('byebye')
        this.$router.replace({ name: 'signin' })
      } else {
        this.$message('您还未登录')
      }
    }
  }
}
</script>

<style scoped>
  .el-footer {
    background-color: lightgreen;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 20px;
    line-height: 1px;
  }
</style>
