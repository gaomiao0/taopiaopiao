<template>
  <div class="right">
    <span class="line"></span>
    <h3 class="list">电影列表</h3>
    <div class="search">
      <el-input
        placeholder="请输入内容"
        v-model="input10"
        clearable>
      </el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <template>
      <el-table
        ref="multipleTable"
        :data="tableData3.slice((currpage - 1) * pagesize, currpage * pagesize)"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="title"
          label="影片名"
          width="160">
        </el-table-column>
        <el-table-column
          prop="score"
          label="评分"
          width="120">
        </el-table-column>
        <el-table-column
          prop="type"
          label="观影类型"
          width="120">
        </el-table-column>
        <el-table-column
          prop="style"
          label="观影效果"
          width="120">
        </el-table-column>
        <el-table-column
          prop="showstyle"
          label="购票类型"
          width="120">
        </el-table-column>
        <el-table-column label="图片">
          <template slot-scope="scope">
            <img :src="scope.row.img" width="40" height="54"/>
          </template>
         </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"><router-link v-bind:to="'/TableEdit/'+scope.row.id">编辑</router-link></el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 10, 15]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData3.length">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'TableList',
    data() {
      return {
        input10: '',
        tableData3: [],
        multipleSelection: [],
        visible2: false,
        pagesize: 5,
        currpage: 1
      }
    },
    methods:{
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleCurrentChange(cpage) {
        this.currpage = cpage;
      },
      handleSizeChange(psize) {
        this.pagesize = psize;
      },
      getDate(){
        this.$http.get("http://localhost:3000/hanker").then((response)=>{
          this.tableData3 = response.data
          console.log(response.data)
        })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.$http.delete("http://localhost:3000/hanker/"+row.id).then((response)=>{
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            location.reload()
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        })
      }
    },
    created(){
      this.getDate()

    }
  }
</script>

<style scoped>
  .right{
    width: 81%;
    float: right;
    padding: 10px;
  }
  .list{
    font-size: 16px;
    font-weight: 100;
    color: #676767;
    line-height: 30px;
    border-bottom: 1px solid #409EFF;
    position: relative;
    padding-left: 10px;
    margin-top: -3px;
  }
  .line{
    position: absolute;
    display: inline-block;
    width: 3px;
    height: 24px;
    background-color: #409EFF;
  }
  .search{
    padding: 18px 0;
  }
  .el-input{
    width: 50%;
  }
  .el-table{
    margin: 0 0 30px;
  }
</style>
