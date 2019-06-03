<template>
    <el-container>
      <el-main>
        <el-card class="box-card" v-for="problem in problems">
          <problem :content='problem.content' :answer='problem.answer'
                   :diff="problem.difficulty" :id ="problem.id" :type ="problem.type" :hot ="problem.hot" :time ="problem.time" ref ='problem'/>
        </el-card>
      </el-main>
    </el-container>
</template>

<script>
import problem from './problem.vue'
import axios from 'axios'
import Bus from '../bus'
export default {
  name: 'paper',
  components: {
    problem
  },
  props: ['tags'],
  mounted: function () {
    var _this = this
    Bus.$on('addtocart', (data) => {
      _this.shoppingcart.push(data)
      console.log(data)
      console.log(_this.shoppingcart)
    })
  },
  methods: {
    showproblems: function (pram) {
      console.log(pram.subject.toString())
      console.log(pram)
      console.log(window.sessionStorage.getItem('token'))
      var _this = this
      var subject = pram.subject.toString()
      var grade = pram.grade.toString()
      var type = pram.type.toString()
      var difficulity = pram.difficulty.toString()
      var time = pram.time.toString()
      axios({
        method: 'get',
        url: '/question',
        params: {
          token: window.sessionStorage.getItem('token'),
          subject: subject,
          grade: grade,
          type: type,
          difficulty: difficulity,
          time: time
        }
      })
        .then(function (response) {
          _this.problems = response.data.payload
          console.log(response.data.payload)
        }, function (error) {
          console.log(error)
        })
    }
  },
  data () {
    return {
      musics: [],
      content: '',
      answer: '',
      problems: [],
      shoppingcart: []
    }
  }
}
// Make a request for a user with a given ID

</script>

<style scoped>
  .el-container{
    height: min-content;
    margin-bottom: 20px;
  }
  .el-main{
    margin: 0;
    background-color: white;
  }
  .el-card{
    height: fit-content;
  }
</style>
