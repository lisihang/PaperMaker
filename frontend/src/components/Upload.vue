<template>
  <div>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :before-upload="beforeUpload"
      :on-preview="handlePictureCardPreview"
      :before-remove="beforeRemove"
      :auto-upload="false"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    <!--<el-dialog title="" :visible.sync="isEnlargeImage" size="large" :modal-append-to-body="false" top="8%" width="60%">
      <img @click="isEnlargeImage = false" style="width:100%;" :src="enlargeImage">
    </el-dialog>-->
  </div>
</template>
<script>

export default {
  name: 'upload',
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
<<<<<<< HEAD
<<<<<<< HEAD
    submitUpload () {
      this.$refs.upload.submit()
=======
    submitUpload() {
      this.$refs.upload.submit();
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
=======
    submitUpload() {
      this.$refs.upload.submit();
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    beforeUpload (file) {
      // debugger
      const isIMAGE = file.type === 'image/jpeg'
      const isLt1M = file.size / 1024 / 1024 < 1

      if (!isIMAGE) {
        this.$message.error('上传文件只能是jpg格式!')
      }
      if (!isLt1M) {
        this.$message.error('上传文件大小不能超过 1MB!')
      }
      return isIMAGE && isLt1M
    }
  }

}
</script>

<style scoped>

</style>
