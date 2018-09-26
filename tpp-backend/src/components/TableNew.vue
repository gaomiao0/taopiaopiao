<template>
  <div>
    <div class="right">
      <span class="line"></span>
      <h3 class="list">添加商品</h3>
      <div class="form">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="影片名">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="评分/人数">
            <el-input v-model="form.score"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="value2" placeholder="请选择">
              <el-option
                v-for="item in opacitytype"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="观影效果">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="购票类型">
            <el-select v-model="buy2" placeholder="请选择">
              <el-option
                v-for="item in buy"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="添加图片">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" />
          </el-dialog>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'TableNew',
    data() {
      return {
        options: [{
          value: 'IMAX',
          label: 'IMAX'
        }, {
          value: '中国巨幕',
          label: '中国巨幕'
        }],
        value: '',
        opacitytype: [{
          value: '2D',
          label: '2D'
        }, {
          value: '3D',
          label: '3D'
        }],
        value2: '',
        buy: [{
          value: '购票',
          label: '购票'
        }, {
          value: '预售',
          label: '预售'
        }],
        buy2: '',
        form: { },
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      onSubmit() {
        let obj = {
          title: this.form.title,
          score: this.form.score,
          type: this.value2,
          style: this.value,
          showstyle: this.buy2
        }
        this.$http.post("http://localhost:3000/hanker",obj).then((response)=>{
          this.$router.push({path:'/'})
        })
      },
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
        console.log(this.dialogImageUrl)
      }
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
  .form{
    padding-top: 30px;
  }
  .el-input{
    width: 50%;
  }
  .el-col-11{
    width: 30%;
    margin-right: 20px;
  }
  .el-textarea{
    width: 60%;
  }
</style>
