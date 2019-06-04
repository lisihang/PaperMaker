<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <Label ref = "label"></Label>
    </el-main>

  </el-container>
</template>

<script>
import Label from '../components/Label'
export default {
  name: 'up-load',
  components: {
    Label
  }
}
</script>

<style scoped>

</style>
