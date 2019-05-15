<template>
    <el-container>
      <el-header></el-header>
      <el-main>
        <Label ref = "label"></Label>
        <Input @sendtags="sendtags"/>
      </el-main>

    </el-container>
</template>

<script>
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
</script>

<style scoped>

</style>
