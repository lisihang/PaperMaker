<template>
    <el-container>
<<<<<<< HEAD
      <el-header></el-header>
      <el-main>
        <Label ref = "label"></Label>
        <Input @sendtags="sendtags"/>
      </el-main>

=======
      <el-main>
        <Label/>
        <Upload/>
      </el-main>
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
    </el-container>
</template>

<script>
<<<<<<< HEAD
import Label from '../components/Label'
import Input from '../components/Input'
export default {
  name: 'up-load',
  components: {
    Label,
    Input
  },
  methods: {
    sendtags: function (params) {
      this.$refs.label.sendTags(params)
    }
  }
}
=======
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
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
</script>

<style scoped>

</style>
