<template>
  <el-container style="height: 700px">
    <el-header>
      <h1>组卷一时爽，一直组卷一直爽</h1>
    </el-header>
    <el-main>
      <carousel/>
      <choose/>
      <sort/>
      <paper abc="666666"/>

    </el-main>
  </el-container>

</template>

<script>

import Menu from '../components/menu.vue'
import choose from '../components/choose.vue'
import sort from '../components/sort.vue'
import paper from '../components/paper.vue'
import carousel from '../components/carousel'
export default {
  name: 'paper_make',
  components: {
    Menu,
    choose,
    sort,
    paper,
    carousel
  },

  data () {
    let src = new Array(5)

    for (let i = 0; i < 4; i++) { src[i] = '../assets/' + (i + 1) + '.jpg' }
    return {

      message: src

    }
  }

}
</script>

<style scoped>
  .el-header, .el-footer {
    /*background-color: #B3C0D1;
    color: #333;*/
    text-align: center;
    margin-top: 1px;
    line-height: 1px;
  }
  .el-main{
    /*margin-left: auto;*/
    margin: 1px;
    background: whitesmoke;
  }
  .el-container{
    /*margin-left: auto;*/
    margin: 0;

  }
</style>
