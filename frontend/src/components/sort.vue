<template>
    <div>
      <el-container>
        <el-main>
          <el-row type="flex" justify="start">
            <el-button size="mini">
              综合排序
              <i class="el-icon-arrow-down el-icon-sort-down"></i>
            </el-button>
            <el-button size="mini">
              热度排序
              <i class="el-icon-arrow-down el-icon-sort-down"></i>
            </el-button>
            <el-button size="mini">
              时间排序
              <i class="el-icon-arrow-down el-icon-sort-down"></i>
            </el-button>
          </el-row>
        </el-main>
      </el-container>
    </div>
</template>

<script>
export default {
  name: 'sort'
}
</script>

<style scoped>
  .el-container{
    height: min-content;
    margin-top: 0;
    margin-bottom: 20px;
  }
  .el-main{

    margin: 0;
    background-color: white;
  }
</style>
