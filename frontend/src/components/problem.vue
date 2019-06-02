<template>
    <div >
      <pre align="left" width="40">{{content}}<br><br>{{answer}}</pre>
      <hr/>
      <div style="float:left;text-align:left" >
        <div style="float:left">
          <p id="other_prams">使用次数:{{hot}}</p>
        </div>
        <div style="float:right;margin-left: 50px">
          <el-button size="mini" align="left" v-on:click="addtocart">
            <i class="el-icon-folder-add"></i>
            加入试卷
          </el-button>
          <el-button size="mini" align="left" v-on:click="addtocollections">
            <i class="el-icon-collection-tag"></i>
            收藏
          </el-button>
        </div>

      </div>

    </div>
</template>

<script>
export default {
  name: 'Problem',
  props: ['content', 'answer', 'diff', 'id', 'type', 'hot', 'time'],
  data () {
    return {
      activeName: '1',
      problem: {}
    }
  },
  methods: {
    addtocart: function () {
      var _this = this
      _this.problem = {
        content: this.content,
        answer: this.answer,
        diff: this.diff,
        id: this.id,
        type: this.type,
        hot: this.hot,
        time: this.time }
      this.$store.commit('AddShoppingCart', _this.problem)
    },
<<<<<<< HEAD
    addtocollections: function () {
=======
    addtoup: function () {
>>>>>>> 99a767cade7d4524c50b54565abbd6bb1dc5c1d5
      var _this = this
      _this.problem = {
        content: this.content,
        answer: this.answer,
        diff: this.diff,
        id: this.id,
        type: this.type,
        hot: this.hot,
        time: this.time }
<<<<<<< HEAD
      this.$store.commit('AddCollections', _this.problem)
=======
      console.log(JSON.parse(JSON.stringify((_this.problem))))
      Bus.$emit('addtoup', _this.problem)
      this.$store.commit('SetUphistory', _this.problem)
>>>>>>> 99a767cade7d4524c50b54565abbd6bb1dc5c1d5
    }
  }

}
</script>

<style scoped>
  .p-left{float:left}
  div
  {
  }
  pre{
    white-space:pre-wrap;
    font-size: 15px;
  }
  #other_prams{
    font-size: 10px;
    text-align: left ;
  }
</style>
