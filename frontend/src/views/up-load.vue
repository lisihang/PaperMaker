<template>
    <el-container>
<<<<<<< HEAD
<<<<<<< HEAD
      <el-header></el-header>
      <el-main>
        <Label ref = "label"></Label>
        <Input @sendtags="sendtags"/>
      </el-main>

=======
=======
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
      <el-main>
        <Label/>
        <Upload/>
      </el-main>
<<<<<<< HEAD
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
=======
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
    </el-container>
</template>

<script>
<<<<<<< HEAD
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
=======
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
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
<<<<<<< HEAD
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
=======
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
</script>

<style scoped>

</style>
