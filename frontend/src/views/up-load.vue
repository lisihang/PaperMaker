<template>
    <el-container>
      <el-main>
        <Label/>
        <Upload/>
      </el-main>
    </el-container>
</template>

<script>
  import Upload from '../components/Upload'
  import choose from '../components/choose'
  import Label from '../components/Label'
    export default {
        name: "up-load",
        components:{
          Upload,
          choose,
          Label,
        }
    }
</script>

<style scoped>

</style>
