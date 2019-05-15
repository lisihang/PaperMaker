<template>
<<<<<<< HEAD
    <div >
      <pre align="left" width="40">{{content}}<br><br>{{answer}}</pre>
      <hr/>
      <p id="other_prams">难度系数:0.3</p>
=======
    <div>
      <p align="left">1.某蛋白质由m条肽链、n个氨基酸组成。该蛋白质至少有氧原子的个数是(    )</p>
      <p align="left">A．n－m                            B．n－2m</p>
      <p align="left">C．n＋m                            D．n＋2m</p>
      <p align="left">
        解析:两个氨基酸脱水缩合形成一个肽键，里面含一个氧原子，n个氨基酸缩合形成m条肽链，应有肽键n－m个，
        所以肽键中氧原子是n－m个，一条肽链中除肽键外还至少含有一个完整的羧基，里面有两个氧原子，所以m条肽链中应至少还有2m个氧原子，
        再加上肽键中的n－m个，所以应至少有氧原子个数为n－m＋2m＝n＋m。
      </p>
      <p align="left" >
        难度系数：0.5
        使用次数：0次     题型：单选题     更新：2019/4/20
      </p>
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
    </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: 'Problem',
  props: ['content', 'answer', 'diff'],
  data () {
    return {
      activeName: '1'
=======

export default {
  name: 'Problem',
  data () {
    return {
      activeName: '1'

>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
    }
  }

}
</script>

<style scoped>
<<<<<<< HEAD
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
=======
  .div-left{float:left}
  .p-left{float:left}
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
</style>
