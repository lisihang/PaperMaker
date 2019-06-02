<template>
    <el-container>
      <!--
      <el-header style="text-align: right; font-size: 12px">
        <el-button type="primary" @click="logout" plain>登出</el-button>
      </el-header>
      -->
      <h3 align="left" style="margin-left: 10px">我的收藏</h3>
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
  },
  computed: {
    problems () {
      return this.$store.state.collections
    }
  }
}
</script>

<style scoped>

</style>
