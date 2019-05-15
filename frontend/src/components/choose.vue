<template>
  <div>
    <el-container>
<<<<<<< HEAD
      <el-header></el-header>
      <el-main>
        <div class="grid-content bg-purple-light">
          <el-row  :offset="0" >
            <el-col :span="1">
              <el-button type="text" size="mini" >科目</el-button>
            </el-col>
            <el-col :span="23">
              <el-row type="flex" justify='start'>
                <el-checkbox-group v-model="checkList1">
=======
      <el-main>
        <div class="grid-content bg-purple-light">
          <el-row  :offset="0" >
            <el-col :span="3">
              <el-button type="text" size="mini" >科目</el-button>
            </el-col>
            <el-col :span="20">
              <el-row type="flex" justify='start'>
                <el-checkbox-group v-model="checkList">
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
                  <el-checkbox label="语文" border size="small" ></el-checkbox>
                  <el-checkbox label="数学" border size="small"></el-checkbox>
                  <el-checkbox label="英语" border size="small"></el-checkbox>
                  <el-checkbox label="物理" border size="small"></el-checkbox>
                  <el-checkbox label="化学" border size="small"></el-checkbox>
                  <el-checkbox label="生物" border size="small"></el-checkbox>
                  <el-checkbox label="政治" border size="small"></el-checkbox>
                  <el-checkbox label="历史" border size="small"></el-checkbox>
                  <el-checkbox label="地理" border size="small"></el-checkbox>
                </el-checkbox-group>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="grid-content bg-purple-light">
          <el-row :offset="0" >
<<<<<<< HEAD
            <el-col :span="1">
=======

            <el-col :span="3">
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
              <el-button type="text" size="mini" >年级</el-button>
            </el-col>
            <el-col :span="20">
              <el-row :offset="0" type="flex" justify='start'>
<<<<<<< HEAD
                <el-checkbox-group v-model="checkList2">
=======
                <el-checkbox-group v-model="checkList">
                  <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
                  <el-checkbox label="小学" border size="small" ></el-checkbox>
                  <el-checkbox label="初中" border size="small"></el-checkbox>
                  <el-checkbox label="高中" border size="small"></el-checkbox>
                </el-checkbox-group>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="grid-content bg-purple-light">
          <el-row :offset="0">
<<<<<<< HEAD
            <el-col :span="1">
              <el-button type="text" size="small" >题型</el-button>
            </el-col>
            <el-col :span="20">
              <el-row :offset="0" type="flex" justify='start'>
                <el-checkbox-group v-model="checkList3">
                  <el-checkbox label="选择题" border size="small" ></el-checkbox>
                  <el-checkbox label="填空题" border size="small"></el-checkbox>
                  <el-checkbox label="计算题" border size="small"></el-checkbox>
                  <el-checkbox label="简答题" border size="small"></el-checkbox>
                  <el-checkbox label="作图题" border size="small"></el-checkbox>
                </el-checkbox-group>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="grid-content bg-purple-light">
          <el-row :offset="0">
            <el-col :span="1">
=======
            <el-col :span="3">
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
              <el-button type="text" size="small" >难度</el-button>
            </el-col>
            <el-col :span="20">
              <el-row :offset="0" type="flex" justify='start'>
<<<<<<< HEAD
                <el-checkbox-group v-model="checkList4">
=======
                <el-checkbox-group v-model="checkList">
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
                  <el-checkbox label="简单题" border size="small" ></el-checkbox>
                  <el-checkbox label="中等题" border size="small"></el-checkbox>
                  <el-checkbox label="难题" border size="small"></el-checkbox>
                  <el-checkbox label="竞赛题" border size="small"></el-checkbox>
                </el-checkbox-group>
              </el-row>
            </el-col>
          </el-row>
        </div>
<<<<<<< HEAD
        <div class="grid-content bg-purple-light">
          <el-row :offset="0">
            <el-col :span="1">
              <el-button type="text" size="small" >年份</el-button>
            </el-col>
            <el-col :span="20">
              <el-row :offset="0" type="flex" justify='start'>
                <el-checkbox-group v-model="checkList5">
                  <el-checkbox label="2019" border size="small" ></el-checkbox>
                  <el-checkbox label="2018" border size="small"></el-checkbox>
                  <el-checkbox label="2017" border size="small"></el-checkbox>
                  <el-checkbox label="2016" border size="small"></el-checkbox>
                  <el-checkbox label="2015" border size="small"></el-checkbox>
                  <el-checkbox label="更早之前" border size="small"></el-checkbox>
                </el-checkbox-group>
              </el-row>
            </el-col>
          </el-row>
        </div>
=======
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
            <!--
            <el-button   size="mini" >学科</el-button>
            -->
        <div class="grid-content bg-purple-light">
            <el-row>
<<<<<<< HEAD
              <el-col :span="1">
=======
              <el-col :span="3">
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
                <el-button type="text" size="mini" >更多</el-button>
              </el-col>
              <el-col :span="5">
                <el-row type="flex" justify='start'>
                  <el-col :offset="0">
                    <el-dropdown >
                      <el-button  type ='text' size="small">
                        地区<i class="el-icon-arrow-down el-icon--right"></i>
                      </el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>全国</el-dropdown-item>
                        <el-dropdown-item>华东</el-dropdown-item>
                        <el-dropdown-item>华北</el-dropdown-item>
                        <el-dropdown-item>华南</el-dropdown-item>
                        <el-dropdown-item>其它</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
<<<<<<< HEAD
=======
                  <!--
                  <el-col :offset="0">
                    <el-dropdown>
                    <span class="el-dropdown-link">
                      下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                  -->

                </el-row>
              </el-col>
              <el-col :span="5">
                <el-row type="flex" justify='start'>
                  <el-col :offset="0">
                    <el-dropdown >
                      <el-button  type ='text' size="small">年份<i class="el-icon-arrow-down el-icon--right"></i>
                      </el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>2019</el-dropdown-item>
                        <el-dropdown-item>2018</el-dropdown-item>
                        <el-dropdown-item>2017</el-dropdown-item>
                        <el-dropdown-item>2016</el-dropdown-item>
                        <el-dropdown-item>2015</el-dropdown-item>
                        <el-dropdown-item>更早之前</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                  <!--
                  <el-col :offset="0">
                    <el-dropdown>
                    <span class="el-dropdown-link">
                      下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                  -->

>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
                </el-row>
              </el-col>
              <el-col :span="5">
                <el-row type="flex" justify='start'>
                  <el-col :offset="0">
                    <el-dropdown >
                      <el-button  type ='text' size="small">题目来源<i class="el-icon-arrow-down el-icon--right"></i>
                      </el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>高考/中考</el-dropdown-item>
                        <el-dropdown-item>大型模拟考</el-dropdown-item>
                        <el-dropdown-item>竞赛</el-dropdown-item>
                        <el-dropdown-item>其它</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                  <!--
                  <el-col :offset="0">
                    <el-dropdown>
                    <span class="el-dropdown-link">
                      下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                  -->

                </el-row>
              </el-col>
            </el-row>
          </div>
<<<<<<< HEAD
        <el-button type="primary"  icon="el-icon-search" v-on:click="sendtags">获取题目</el-button>
      </el-main>
=======

      </el-main>

>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
    </el-container>

  </div>

</template>

<script>
export default {
  name: 'choose',
<<<<<<< HEAD
  data () {
    return {
      checkList1: ['生物'],
      checkList2: ['高中'],
      checkList3: ['选择题'],
      checkList4: ['中等题'],
      checkList5: ['2019'],
      tags: {}
    }
  },
  methods: {
    sendtags () {
      var _this = this
      _this.tags = { subject: this.checkList1[0], grade: this.checkList2[0], type: this.checkList3[0], difficulty: this.checkList4[0], time: this.checkList5[0] }
      console.log(_this.tags)
      this.$emit('transtag', _this.tags )
=======
  cities: ['city1', 'city2'],
  data () {
    return {
      checkList: ['选中且禁用', '复选框 A'],
      value3: ''
>>>>>>> 7b176e297a2198062c253ceb69619c1f64877617
    }
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 5px;
    /*height: 200px;*/
    /*
    &:last-child {
     margin-bottom: 0;
    }
     */

  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .el-button{
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 20px;
    /*min-height: 45px;*/
  }
  .row-bg {
    padding: 5px 0;
    background-color: #f9fafc;
  }
  .el-dropdown-link {
    cursor: pointer;
    font-size: 10px;
    text-align-all: center;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-container{

    margin-bottom: 20px;
  }
  .el-main{
    background-color: white;
    color: #333;
  }
</style>
