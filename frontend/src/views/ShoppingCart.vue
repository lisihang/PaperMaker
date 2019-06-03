<template>
  <el-container>
    <el-header></el-header>
    <el-table
      :data="problems"
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
    <br>
    <el-input
      placeholder="请输入试卷名称"
      v-model="title"
      clearable
      style="width: 30%; margin-left: 20px">
    </el-input>
    <br>
    <el-button v-on:click="getpaper" style="width:30%;  margin-left: 20px" >
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
      }],
      title: '',
      selection: []
    }
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    getpaper: function () {
      var _this = this
      var ids = []
      for (var i = 0; i < _this.selection.length; i++) {
        ids.push(_this.selection[i].id)
      }
      axios({
        method: 'post',
        url: '/paper',
        responseType: 'arraybuffer',
        data: {
          token: window.sessionStorage.getItem('token'),
          payload:
            {
              'ids': ids,
              'title': _this.title
            }
        }
      })
        .then(function (response) {
          _this.$store.commit('SetPaper', response.data)
          _this.$message('组卷成功')
          let blob = new Blob([response.data], { type: 'application/pdf;charset=utf-8' })
          /*
          let objectUrl = URL.createObjectURL(blob)
          window.location.href = objectUrl
          */
          var downloadElement = document.createElement('a')
          var href = window.URL.createObjectURL(blob)// 创建下载的链接
          downloadElement.href = href
          downloadElement.download = 'paper1' + '.pdf' // 下载后文件名
          document.body.appendChild(downloadElement)
          downloadElement.click()// 点击下载
          document.body.removeChild(downloadElement) // 下载完成移除元素
          window.URL.revokeObjectURL(href) // 释放掉blob对象
        }, function (error) {
          this.$message(error)
        })
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
