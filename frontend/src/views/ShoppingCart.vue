<template>
  <el-container>
    <el-header></el-header>
    <el-table
      :data="problems"
      style="width: 100%"
      >
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
    <el-button v-on:click="getpaper">
      一键组卷
    </el-button>
  </el-container>

</template>

<script>
import axios from 'axios'
export default {
  name: 'PaperBasket',
  data () {
    return {
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
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    getpaper: function () {
      var _this = this
      var ids = []
      for (var i = 0; i < _this.problems.length; i++) {
        ids.push(_this.problems[i].id)
      }
      axios({
        method: 'post',
        url: '/paper',
        data: {
          token: window.sessionStorage.getItem('token'),
          payload:
            {
              'ids': ids
            }
        }
      })
        .then(function (response) {
          console.log(response.data)
          _this.$store.commit('SetPaper', response.data)
        }, function (error) {
          console.log(error)
        })
    }
  },
  computed: {
    problems () {
      return this.$store.state.shoppingcart
    }
  }
}
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
