<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <div id="home">
    <el-row class="tac" height="180px">
      <el-col :span="6">
=======

    <el-row class="tac">
      <el-col :span="6" height="100px">
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
=======

    <el-row class="tac">
      <el-col :span="6" height="100px">
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
        <el-menu
          default-active="this.$router.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
<<<<<<< HEAD
<<<<<<< HEAD
          router>
          <el-menu-item index="info">
            <template slot="title"><i class="el-icon-info"></i>首页</template>
=======
=======
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item index="signin">
            <template slot="title"><i class="el-icon-info"></i>我的账户</template>
<<<<<<< HEAD
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
=======
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
          </el-menu-item>
          <el-menu-item index="paper_make">
            <template slot="title"><i class="el-icon-menu"></i>浏览题库</template>
          </el-menu-item>
          <el-menu-item index="upload">
            <template slot="title"><i class="el-icon-upload2"></i>上传题目</template>
          </el-menu-item>
          <el-menu-item index="4">
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <!--          <p><router-link to="/hi"></router-link></p>-->
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
=======
            <!--          <p><router-link to="/hi"></router-link></p>-->
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
            <template slot="title"><i class="el-icon-download"></i>下载题目</template>
          </el-menu-item>
          <el-menu-item index="5">
            <template slot="title"><i class="el-icon-search"></i>搜索</template>
          </el-menu-item>
        </el-menu>
<<<<<<< HEAD
<<<<<<< HEAD
        <!---<el-divider direction="vertical"></el-divider>--->
        <swing/>
      </el-col>
      <el-container>
        <el-header >
          <textrotation>
          </textrotation>
        </el-header>
      </el-container>
      <router-view></router-view>
    </el-row>
  </div>
=======
=======
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
      </el-col>
      <router-view></router-view>
    </el-row>


<<<<<<< HEAD
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
=======
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
</template>

<script>
import swing from '../components/swing'
import textrotation from '../components/TestRotation'
export default {
  components: { swing, textrotation},
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
    text-align: center;
    margin-top: 0px;
    margin-bottom: 20px;
    line-height: 1px;
  }
</style>
