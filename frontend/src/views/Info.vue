<template>
<!--    <el-container>-->
<!--      <el-header style="text-align: right; font-size: 12px">-->
<!--        <el-button type="primary" @click="logout" plain>登出</el-button>-->
<!--      </el-header>-->
<!--      <el-button type="primary">查看上传过的题</el-button>-->
<!--      <el-button type="primary">查看</el-button>-->
<!--    </el-container>-->
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户信息" name="first">
        用户信息
        <el-button type="primary" @click="logout" plain>登出</el-button>
      </el-tab-pane>
      <el-tab-pane label="上传的题目" name="second" @click="viewQues">
        <el-container>
          <el-header></el-header>
          <el-table :data="problems" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="题目">
                    <span>{{ props.row.content}}</span>
                  </el-form-item>
                  <el-form-item label="答案">
                    <span>{{ props.row.answer }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="id" label="试题id"></el-table-column>
            <el-table-column prop="type" label="题型"></el-table-column>
            <el-table-column prop="diff" label="难度"></el-table-column>
            <el-table-column prop="time" label="年份"></el-table-column>
            <el-table-column prop="hot" label="下载次数"></el-table-column>
          </el-table>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="下载的试卷" name="third" @click="viewPaper">
        <el-card class="box-card" v-for="title in titles" :key="title">
          <a @click="getpaper(title)">title</a>
          <div v-if="this.hispaper">{{ this.hispaper.content }}</div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
</template>
<script>
import axios from 'axios'
import store from '../components/store.js'
export default {
  data () {
    return {
      activeName: 'second',
      tableData: [{
        id: '1',
        type: '选择题',
        diff: '简单题',
        time: '2019',
        content: 'content',
        answer: 'answer'
      }]
    }
  },
  methods: {
    logout () {
      const token = store.state.token
      if (token) {
        this.$store.commit('LOG_OUT')
        this.$message('byebye')
        this.$router.replace({name: 'home'})
      } else {
        this.$message('您还未登录')
      }
    },
    created() {
      this.viewQues()
    },
    viewQues: function () {
      axios({
        method: 'get',
        url: '/upload',
        params: {
          token: window.sessionStorage.getItem('token')
        }
      })
        .then(function (response) {
          this.problems = response.data
          this.$store.commit('SetUphistory', response.data)
        }, function (error) {
          console.log(error)
        })
    }
  },
  viewPaper () {
    axios({
      method: 'get',
      url: '/title',
      params: {
        token: window.sessionStorage.getItem('token')
      }
    })
      .then(function (response) {
        this.titles = response.data
        // this.$store.commit('SetUphistory', response.data)
      }, function (error) {
        console.log(error)
      })
  },
  getpaper(title) {
    axios({
      method: 'get',
      url: '/paper',
      params: {
        token: window.sessionStorage.getItem('token'),
        title: title
      }
    })
      .then(function (response) {
        this.hispaper = response.data
        // this.$store.commit('SetPaper', response.data)
      }, function (error) {
        console.log(error)
      })
  },
  handleClick (tab, event) {
    console.log(tab, event)
  }
}
</script>

<style scoped>

</style>
