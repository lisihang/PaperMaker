<template>
    <el-container>
      <!--
      <el-header style="text-align: right; font-size: 12px">
        <el-button type="primary" @click="logout" plain>登出</el-button>
      </el-header>
      -->
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户信息" name="first">
          用户信息
          <el-button type="primary" @click="logout" plain>登出</el-button>
        </el-tab-pane>
        <el-tab-pane label="上传的题目" name="second" @click="viewQues">
          <el-container>
            <el-table :data="upproblems" style="width: 100%">
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
          <el-card class="box-card" v-for="i in Array.from({ length: titles.length }, (item, index) => index + 1)" >
            <!--
            <a @click="getpaper(i)">{{titles[i]}}</a>
            -->
            <el-collapse v-model="activeNames">
              <el-collapse-item :title="titles[i]" name="i">
                <div v-if="hispaper[i]">
                  <el-container>
                    <el-table :data="hispaper[i]" style="width: 100%">
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
                </div>
              </el-collapse-item>
            </el-collapse>

          </el-card>
          <!--
          <el-card class="box-card" v-for="title in titles" :key="title">
            <a @click="getpaper(title)">{{title.title}}</a>
            <div v-if="hispaper">
              <el-container>
                <el-table :data="hispaper" style="width: 100%">
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
            </div>
          </el-card>
          -->
        </el-tab-pane>
        <el-tab-pane label="收藏题目" name="forth">
          <el-container>
            <el-table
              :data="collections"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
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
              <el-table-column
                prop="id"
                label="试题id">
              </el-table-column>
              <el-table-column
                prop="type"
                label="题型">
              </el-table-column>
              <el-table-column
                prop="diff"
                label="难度">
              </el-table-column>
              <el-table-column
                prop="time"
                label="年份">
              </el-table-column>
              <el-table-column
                prop="hot"
                label="下载次数">
              </el-table-column>
              <el-table-column
                label="操作">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, problems)"
                    type="text"
                    size="small">
                    移除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-container>
        </el-tab-pane>
      </el-tabs>
    </el-container>
<!--    <el-container>-->
<!--      <el-header style="text-align: right; font-size: 12px">-->
<!--        <el-button type="primary" @click="logout" plain>登出</el-button>-->
<!--      </el-header>-->
<!--      <el-button type="primary">查看上传过的题</el-button>-->
<!--      <el-button type="primary">查看</el-button>-->
<!--    </el-container>-->

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
      }],
      titles: [],
      problems: [],
      hispaper: [],
      ids: [],
      activeNames: [],
      upproblems: []
    }
  },
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
    },
    /*
    created () {
      this.viewQues()
    },
    */
    viewQues: function () {
      var _this = this
      axios({
        method: 'get',
        url: '/upload',
        params: {
          token: window.sessionStorage.getItem('token')
        }
      })
        .then(function (response) {
          _this.upproblems = response.data.payload
          _this.$store.commit('SetUphistory', response.data.payload)
        }, function (error) {
          console.log(error)
        })
    },
    viewPaper: function () {
      var _this = this
      axios({
        method: 'get',
        url: '/title',
        params: {
          token: window.sessionStorage.getItem('token')
        }
      })
        .then(function (response) {
          // _this.titles = response.data.payload
          for (var i = 0; i < response.data.payload.length; i++) {
            _this.titles.push(response.data.payload[i].title)
            _this.ids.push(response.data.payload[i].id)
            _this.getpaper(i)
          }
          console.log(_this.titles)
          // this.$store.commit('SetUphistory', response.data)
        }, function (error) {
          console.log(error)
        })
    },
    getpaper (i) {
      var _this = this
      axios({
        method: 'get',
        url: '/paper',
        params: {
          token: window.sessionStorage.getItem('token'),
          title: _this.titles[i],
          id: _this.ids[i]
        }
      })
        .then(function (response) {
          _this.hispaper.push(response.data.payload)
          // this.$store.commit('SetPaper', response.data)
        }, function (error) {
          console.log(error)
        })
    },
    handleClick (tab) {
      console.log(tab.index)
      if (tab.index === '2') {
        this.viewPaper()
      }
      if (tab.index === '1') {
        this.viewQues()
      }
      console.log(tab)
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      this.selection = val
      console.log(val)
    }
  },
  computed: {
    collections () {
      return this.$store.state.collections
    }
  }
}
</script>

<style scoped>

</style>
