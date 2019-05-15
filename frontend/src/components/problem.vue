<template>
    <div >
      <pre align="left" width="40">{{content}}<br><br>{{answer}}</pre>
      <hr/>
      <p id="other_prams">难度系数:0.3</p>
    </div>
</template>

<script>
export default {
  name: 'Problem',
  props: ['content', 'answer', 'diff'],
  data () {
    return {
      activeName: '1'
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
