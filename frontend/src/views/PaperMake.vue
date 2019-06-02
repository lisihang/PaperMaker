<template>
    <el-container style="height: 700px">
      <el-main>
        <carousel/>
        <choose @transtag="transtags"/>
        <sort/>
        <paper ref="Paper" v-bind:tags="tags"/>

      </el-main>
    </el-container>
</template>

<script>
import choose from '../components/choose.vue'
import sort from '../components/sort.vue'
import paper from '../components/paper.vue'
import carousel from '../components/carousel'
export default {
  name: 'PaperMake',
  components: {
    choose,
    sort,
    paper,
    carousel
  },
  data () {
    let src = new Array(5)
    for (let i = 0; i < 4; i++) { src[i] = '../assets/' + (i + 1) + '.jpg' }
    return {
      message: src,
      animate: true,
      items: [
        { msg: '组卷一时爽，一直组卷一直爽' },
        { msg: '惊！老师竟然在这个网站做这种事情！学生男默女泪！' },
        { msg: '组卷狂魔' },
        { msg: '新时代的隐形戒尺' }
      ],
      tags: {}
    }
  },
  created () {
    setInterval(this.scroll, 1000)
  },
  methods: {
    scroll () {
      this.animate = true //  因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
      setTimeout(() => { //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
        this.items.push(this.items[0]) // 将数组的第一个元素添加到数组的
        this.items.shift() //  删除数组的第一个元素
        this.animate = false // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 500)
    },
    showmsg: function (data) {
      console.log(data)
      this.tags = data
      console.log(this.tags)
    },
    transtags (pram) {
      this.$refs.Paper.showproblems(pram)
    }
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    /*background-color: #B3C0D1;
    color: #333;*/
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
    line-height: 1px;
  }
  .el-main{
    /*margin-left: auto;*/
    margin: 1px;
    /*background: whitesmoke;*/
  }
  .el-container{
    /*margin-left: auto;*/
    margin: 0;

  }
  *{
    margin: 0 ;
    padding: 0;
  }
  #box{
    width: 300px;
    height: 60px;
    overflow: hidden;
    padding-left: 30px;
    border: 1px solid black;
  }
  .anim{
    transition: all 0.5s;
    margin-top: -30px;
  }
  #con1 li{
    list-style: none;
    line-height: 30px;
    height: 40px;
  }
</style>
