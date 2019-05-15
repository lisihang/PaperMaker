<template>
  <div>
    <el-container>
      <el-header></el-header>
      <el-main>
        <div class="grid-content bg-purple-light">
          <el-row  :offset="0" >
            <el-col :span="1">
              <el-button type="text" size="mini" >科目</el-button>
            </el-col>
            <el-col :span="23">
              <el-row type="flex" justify='start'>
                <el-radio-group v-model="radio1">
                  <el-radio :label="1" size="mini" border=ture>语文</el-radio>
                  <el-radio :label="2" size="mini" border=ture>数学</el-radio>
                  <el-radio :label="3" size="mini" border=ture>英语</el-radio>
                  <el-radio :label="4" size="mini" border=ture>物理</el-radio>
                  <el-radio :label="5" size="mini" border=ture>化学</el-radio>
                  <el-radio :label="6" size="mini" border=ture>生物</el-radio>
                  <el-radio :label="7" size="mini" border=ture>政治</el-radio>
                  <el-radio :label="8" size="mini" border=ture>历史</el-radio>
                  <el-radio :label="9" size="mini" border=ture>地理</el-radio>
                </el-radio-group>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="grid-content bg-purple-light">
          <el-row :offset="0" >
            <el-col :span="1">
              <el-button type="text" size="mini" >年级</el-button>
            </el-col>
            <el-col :span="20">
              <el-row :offset="0" type="flex" justify='start'>
                <el-radio-group v-model="radio2">
                  <el-radio :label="1">小学</el-radio>
                  <el-radio :label="2">初中</el-radio>
                  <el-radio :label="3">高中</el-radio>
                </el-radio-group>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="grid-content bg-purple-light">
          <el-row :offset="0">
            <el-col :span="1">
              <el-button type="text" size="small" >题型</el-button>
            </el-col>
            <el-col :span="20">
              <el-row :offset="0" type="flex" justify='start'>
                <el-radio-group v-model="radio3">
                  <el-radio :label="1">选择题</el-radio>
                  <el-radio :label="2">填空题</el-radio>
                  <el-radio :label="3">计算题</el-radio>
                  <el-radio :label="4">简答题</el-radio>
                  <el-radio :label="5">作图题</el-radio>
                </el-radio-group>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="grid-content bg-purple-light">
          <el-row :offset="0">
            <el-col :span="1">
              <el-button type="text" size="small" >难度</el-button>
            </el-col>
            <el-col :span="20">
              <el-row :offset="0" type="flex" justify='start'>
                <el-radio-group v-model="radio4">
                  <el-radio :label="1">简单题</el-radio>
                  <el-radio :label="2">中等题</el-radio>
                  <el-radio :label="3">难题</el-radio>
                  <el-radio :label="4">竞赛题</el-radio>
                </el-radio-group>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="grid-content bg-purple-light">
          <el-row :offset="0">
            <el-col :span="1">
              <el-button type="text" size="small" >年份</el-button>
            </el-col>
            <el-col :span="20">
              <el-row :offset="0" type="flex" justify='start'>
                <el-radio-group v-model="radio5">
                  <el-radio :label="1">2019</el-radio>
                  <el-radio :label="2">2018</el-radio>
                  <el-radio :label="3">2017</el-radio>
                  <el-radio :label="4">2016</el-radio>
                  <el-radio :label="5">2015</el-radio>
                  <el-radio :label="6">更早之前</el-radio>
                </el-radio-group>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <!--
        <el-button   size="mini" >学科</el-button>
        <el-button type="primary"  icon="el-icon-search" v-on:click="sendtags">上传题目</el-button>
        -->
      </el-main>
    </el-container>

  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'label',
  data () {
    return {
      radio1: 1,
      radio2: 1,
      radio3: 1,
      radio4: 1,
      radio5: 1,
      subject: ['语文', '数学', '英语', '物理', '化学', '生物', '政治', '历史', '地理'],
      grade: ['小学', '初中', '高中'],
      type: ['选择题', '填空题', '计算题', '简答题', '作图题'],
      difficulty: ['简单题', '中等题', '难题', '竞赛题'],
      time: ['2019', '2018', '2017', '2016', '2015', '更早之前']
    }
  },
  methods: {
    sendTags (params) {
      var _this = this
      var _subject = _this.subject[_this.radio1 - 1]
      var _grade = _this.grade[_this.radio2 - 1]
      var _type = _this.type[_this.radio3 - 1]
      var _difficulty = _this.difficulty[_this.radio4 - 1]
      var _time = _this.time[_this.radio5 - 1]
      axios({
        method: 'post',
        url: '/question',
        data: {
          token: 'gqu1736nrvb',
          payload:
            {
              'content': params.content,
              'answer': params.answer,
              'subject': _subject,
              'grade': _grade,
              'type': _type,
              'difficulty': _difficulty,
              'time': _time
            }
        }
      })
        .then(function (response) {
          console.log(response)
        }, function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 5px;
    /*height: 200px;*/
    /*
    &:last-child {
     margin-bottom: 0;
    }
     */

  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .el-button{
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 20px;
    /*min-height: 45px;*/
  }
  .row-bg {
    padding: 5px 0;
    background-color: #f9fafc;
  }
  .el-dropdown-link {
    cursor: pointer;
    font-size: 10px;
    text-align-all: center;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-container{

    margin-bottom: 20px;
  }
  .el-main{
    background-color: white;
    color: #333;
  }
</style>
