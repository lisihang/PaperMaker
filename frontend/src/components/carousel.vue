<template>

  <div class="carousel">
    <div class="block">
      <el-carousel :interval="4000" type="card" height="200px" >
        <el-carousel-item v-for="pic in pics">
          <img :src= pic height="100%"/>
        </el-carousel-item>
        <!---
        <el-carousel-item >
          <img src="../assets/1.jpg"   height="100%"/>
        </el-carousel-item>
        <el-carousel-item >
          <img src="../assets/2.jpg"   height="100%"/>
        </el-carousel-item>
        <el-carousel-item >
          <img src="../assets/3.jpg"   height="100%"/>
        </el-carousel-item>
        <el-carousel-item >
          <img src="../assets/4.jpg"   height="100%"/>
        </el-carousel-item>
        --->
      </el-carousel>
    </div>
  </div>

</template>

<script>
export default {
  name: 'carousel',
  data () {
    let src = new Array(5)
    return {
      pics: [require('../assets/1.jpg'), require('../assets/2.jpg'), require('../assets/3.jpg'), require('../assets/4.jpg'), require('../assets/5.jpg'), ],
      message: src,

    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    height: 200px;
    margin: 0;
  }

  .el-carousel-item {
    background-color: #99a9bf;
    height: 200px;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
