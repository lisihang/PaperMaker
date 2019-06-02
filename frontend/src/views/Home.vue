<template>
  <div id="home">
    <el-row class="tac" height="180px">
      <el-col :span="6">
        <el-menu
          default-active="this.$router.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item index="main">
            <template slot="title">首页</template>
          </el-menu-item>
          <el-submenu index="paper">
            <template slot="title">
              <i class="el-icon-document-add"></i>
              <span>组卷</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="papermake">浏览题库</el-menu-item>
              <el-menu-item index="shoppingcart">试题篮</el-menu-item>
              <el-menu-item index="composepaper">组合试卷</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="upload">
            <template slot="title"><i class="el-icon-upload2"></i>上传题目</template>
          </el-menu-item>
          <el-menu-item index="4">
            <template slot="title"><i class="el-icon-download"></i>下载题目</template>
          </el-menu-item>
          <el-menu-item index="info">
            <template slot="title"><i class="el-icon-info"></i>用户中心</template>
          </el-menu-item>
        </el-menu>
        <!---<el-divider direction="vertical"></el-divider>--->
        <swing/>
      </el-col>
      <router-view></router-view>
    </el-row>
  </div>
</template>
<script>
import swing from '../components/swing'
import textrotation from '../components/TestRotation'
export default {
  components: { swing, textrotation },
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
    background-repeat: no-repeat;
    background-position: right;
    background-size: 75% 100%;
    height: 600px
  }
  .el-col {
    height: 600px
  }
  .el-container {

  }
  .el-header, .el-footer {
    /*background-color: #B3C0D1;
    color: #333;*/
    /*
    text-align: center;
    margin-top: 0px;
    margin-bottom: 20px;
    line-height: 1px;*/
  }
</style>
