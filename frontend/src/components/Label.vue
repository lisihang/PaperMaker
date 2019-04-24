<template>
  <div>
    <el-container>
      <el-main>
        <div class="grid-content bg-purple-light">
          <el-row>
            <el-col :span="3">
              <el-row type="flex" justify='start'>
                <el-col :offset="0">
                  <el-dropdown >
                    <el-button  type ='text' size="small">
                      科目<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>语文</el-dropdown-item>
                      <el-dropdown-item>数学</el-dropdown-item>
                      <el-dropdown-item>英语</el-dropdown-item>
                      <el-dropdown-item>物理</el-dropdown-item>
                      <el-dropdown-item>化学</el-dropdown-item>
                      <el-dropdown-item>生物</el-dropdown-item>
                      <el-dropdown-item>政治</el-dropdown-item>
                      <el-dropdown-item>历史</el-dropdown-item>
                      <el-dropdown-item>地理</el-dropdown-item>
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
            <el-col :span="3">
              <el-row type="flex" justify='start'>
                <el-col :offset="0">
                  <el-dropdown >
                    <el-button  type ='text' size="small">年级<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>小学</el-dropdown-item>
                      <el-dropdown-item>初中</el-dropdown-item>
                      <el-dropdown-item>高中</el-dropdown-item>
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
            <el-col :span="3">
              <el-row type="flex" justify='start'>
                <el-col :offset="0">
                  <el-dropdown >
                    <el-button  type ='text' size="small">难度<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>简单题</el-dropdown-item>
                      <el-dropdown-item>中等题</el-dropdown-item>
                      <el-dropdown-item>难题</el-dropdown-item>
                      <el-dropdown-item>竞赛题</el-dropdown-item>
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
            <el-col :span="3">
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
            <el-col :span="3">
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

              </el-row>
            </el-col>
            <el-col :span="3">
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

      </el-main>

    </el-container>

  </div>




</template>

<script>
  export default {
    name: 'label',
    data () {
      return {
        checkList: ['选中且禁用', '复选框 A'],
        value3: ''
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
