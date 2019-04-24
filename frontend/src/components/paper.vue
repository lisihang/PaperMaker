<template>
    <el-container>
      <el-main>

        <el-card class="box-card">
          <problem/>
        </el-card>
        <!--
        <el-card class="box-card">
          <div>{{abc}}</div>
          <problem/>
        </el-card>
        <el-card class="box-card">
          <problem/>
        </el-card>
        <el-card class="box-card">
          <problem/>
        </el-card>
        --->

      </el-main>
    </el-container>
</template>

<script>
import problem from './problem.vue'
/* import problem from "./problem"; */
export default {
  name: 'paper',
  components: {
    problem
  },
  props: ['abc']
}
</script>

<style scoped>
  .el-container{
    height: min-content;
    margin-bottom: 20px;
  }
  .el-main{
    margin: 0;
    background-color: white;
  }
  .el-card{
    height: fit-content;
  }
</style>
