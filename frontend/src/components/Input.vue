<template>
  <div id="upload">
    <!--<input type="text" v-model="msg">-->
    <el-form label-width="80px">
      <el-form-item label="题目内容" prop="con" size="medium">
        <el-input type="textarea" v-model="msg1"></el-input>
      </el-form-item>
      <el-form-item label="答案解析" prop="ans" size="medium">
        <el-input type="textarea" v-model="msg2"></el-input>
      </el-form-item>
    </el-form>
    <!--<button type="button" v-on:click='btnClick' >上传</button>-->
    <el-button type="primary"  icon="el-icon-message" v-on:click="btnClick">上传题目</el-button>
  </div>
</template>

<script>

export default {
  name: 'upload',
  data () {
    return {
      msg1: '',
      msg2: '',
      tags: {}
    }
  },
  methods: {
    btnClick: function () {
      var _this = this
      var tmp1 = _this.msg1
      var tmp2 = _this.msg2
      _this.tags = { content: tmp1, answer: tmp2 }
      this.$emit('sendtags', _this.tags)
    }
  }
}
</script>
