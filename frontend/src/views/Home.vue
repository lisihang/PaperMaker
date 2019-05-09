<template>
  <div id="home">
    <el-row class="tac" height="180px">
      <el-col :span="6">
        <el-menu
          default-active="this.$router.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router>
          <el-menu-item index="info">
            <template slot="title"><i class="el-icon-info"></i>我的账户</template>
          </el-menu-item>
          <el-menu-item index="paper_make">
            <template slot="title"><i class="el-icon-menu"></i>浏览题库</template>
          </el-menu-item>
          <el-menu-item index="upload">
            <template slot="title"><i class="el-icon-upload2"></i>上传题目</template>
          </el-menu-item>
          <el-menu-item index="4">
            <template slot="title"><i class="el-icon-download"></i>下载题目</template>
          </el-menu-item>
          <el-menu-item index="5">
            <template slot="title"><i class="el-icon-search"></i>搜索</template>
          </el-menu-item>
        </el-menu>
        <el-divider direction="vertical"></el-divider>
      </el-col>
      <router-view></router-view>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-row {
  background-image: url(../assets/background.jpg);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 75% 100%;
  height: 600px
}
  .el-col {
    height: 600px
  }
</style>
