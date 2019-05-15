<template>
    <el-container>
      <el-main>
<<<<<<< HEAD
        <el-card class="box-card" v-for="problem in problems">
          <problem :content='problem.content' :answer='problem.answer' :diff="problem.difficulty"/>
        </el-card>
        <!--
        <el-card class="box-card" v-for="music in musics">
=======

        <el-card class="box-card">
          <problem/>
        </el-card>
        <!--
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
        <el-card class="box-card">
          <div>{{abc}}</div>
          <problem/>
        </el-card>
        <el-card class="box-card">
          <problem/>
        </el-card>
        <el-card class="box-card">
          <problem/>
        </el-card>
        --->

      </el-main>
    </el-container>
</template>

<script>
import problem from './problem.vue'
<<<<<<< HEAD
import axios from 'axios'
=======
/* import problem from "./problem"; */
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
export default {
  name: 'paper',
  components: {
    problem
  },
<<<<<<< HEAD
  props: ['tags'],
  /*
  mounted: {
    showproblems (pram) {
      var _this = this
      axios.get(API_PROXY + 'http://148.70.254.200:3000/question', {
        params: {
          token: 'jrqa5qi1ylb',
          subject: pram.subject,
          grade: pram.grade,
          type: pram.type,
          difficulty: pram.difficulty,
          time: pram.time
        }
      })
        .then(function (response) {
          console.log(response)
          console.log(response.data.payload[0].id)
          _this.content = response.data.payload[0].content
          _this.answer = response.data.payload[0].answer
          _this.problems = response.data.payload
        }, function (error) {
          console.log(error)
        })
      .catch(function (error) {
        console.log(error)
      })
    }
  },
  */
  methods: {
    showproblems: function (pram) {
      console.log(pram.subject.toString())
      console.log(pram)
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
          token: 'ob3o2hj5yz',
          subject: subject,
          grade: grade,
          type: type,
          difficulty: difficulity,
          time: time
          /*
          subject: pram.subject.toString(),
          grade: pram.grade.toString(),
          type: pram.type.toString(),
          difficulty: pram.difficulty.toString(),
          time: pram.time.toString()
          /*
          subject: '生物',
          grade: '高一',
          type: '选择题',
          difficulty: '1',
          time: '2019'
          */
        }
      })
        .then(function (response) {
          /*
          console.log(response)
          console.log(response.data.payload[0].id)
          _this.content = response.data.payload[0].content
          _this.answer = response.data.payload[0].answer
          */
          _this.problems = response.data.payload
        }, function (error) {
          console.log(error)
        })
      /*
      .catch(function (error) {
        console.log(error)
      })
      */
    }
  },
  data () {
    return {
      musics: [],
      content: '',
      answer: '',
      problems: []
    }
  }
}
// Make a request for a user with a given ID

=======
  props: ['abc']
}
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
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
