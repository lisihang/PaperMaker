<template>
    <div >
      <pre align="left" width="40">{{content}}<br><br>{{answer}}</pre>
      <hr/>
      <p id="other_prams">难度系数:0.3</p>
      <el-button v-on:click="addtocart">
        添加到购物车
      </el-button>
    </div>
</template>

<script>
import Bus from '../bus.js'
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
      console.log(JSON.parse(JSON.stringify((_this.problem))))
      Bus.$emit('addtocart', _this.problem)
      this.$store.commit('AddShoppingCart', _this.problem)
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
