<template>
<!--  <div id="content">-->
    <el-row class="tac">
      <el-col :span="6" height="100px">
        <el-menu
          default-active="this.$router.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item index="1">
            <template slot="title"><i class="el-icon-info"></i>我的账户</template>
          </el-menu-item>
          <el-menu-item index="2">
            <template slot="title"><i class="el-icon-menu"></i>浏览题库</template>
          </el-menu-item>
          <el-menu-item index="signup">
            <template slot="title"><i class="el-icon-upload2"></i>上传题目</template>
          </el-menu-item>
          <el-menu-item index="hi">
            <!--          <p><router-link to="/hi"></router-link></p>-->
            <template slot="title"><i class="el-icon-download"></i>下载题目</template>
          </el-menu-item>
          <el-menu-item index="signup">
            <!--          <p><router-link to="/SignIn"></router-link></p>-->
            <!--          <router-view></router-view>-->
            <template slot="title"><i class="el-icon-search"></i>搜索</template>
          </el-menu-item>
        </el-menu>
      </el-col>
      <router-view></router-view>
<!--      <el-col :span="24" class="content-wrapper">-->
<!--        <transition name="fade" mode="out-in">-->
<!--          <router-view></router-view>-->
<!--        </transition>-->
<!--      </el-col>-->
    </el-row>
<!---->
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

</style>
