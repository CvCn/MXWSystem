<template>
<div>
    <mxw-well>
        <ol class="breadcrumb" style="background-color: white; padding: 0; margin: 0; font-size: 13px;">
            <li><a href="javascript: void(0)" @click="jump('home')" style="color: #b63b4d">Home</a></li>
            <li class="active">会员列表</li>
        </ol>
    </mxw-well>
    <mxw-well style="margin-top: 3%;">
        <button type="button" class="btn-simple" data-toggle="modal" data-target="#myModal">新增会员</button>

            <!-- 模态框（Modal） -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="myModalLabel">新增会员</h4>
                    </div>
                    <div class="modal-body mxw-panel-body">
                      
                    <div class="pannel-item">
                      <div for="classify" class="form-label col-sm-2">查找粉丝</div>
                          <div class="input-group col-sm-9 col-xs-12">
                            <input type="text" class="form-control form-input">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button">查找</button>
                            </span>
                        </div><!-- /input-group -->
                    </div>
                    <div class="pannel-item">
                      <div for="classify" class="form-label col-sm-2">照片</div>
                      <mxw-btn-img class=" col-sm-9 col-xs-12"></mxw-btn-img>
                    </div>
                    <div class="pannel-item">
                      <div for="classify" class="form-label col-sm-2">姓名</div>
                      <input type="text" name="" class="form-input col-sm-9 col-xs-12">
                    </div>
                    <div class="pannel-item">
                      <div for="classify" class="form-label col-sm-2">手机号码</div>
                      <input type="text" name="" class="form-input col-sm-9 col-xs-12">
                    </div>
                    <div class="pannel-item" v-for="(item, index) in field" :key="item">
                      <div for="classify" class="form-label col-sm-2">自定义字段</div>
                      <input type="text" name="" class="form-input col-sm-3 col-xs-10" placeholder="字段名">
                      <input type="text" name="" class="form-input col-sm-5 col-xs-10" placeholder="字段值">
                      <button type="button" @click="close(index)" style="border: 1px solid white; background-color: white; margin-left: 10px; height: 30px; width: 40px;">x</button>
                    </div>

                    <button type="button" class="btn-simple col-sm-offset-9 col-sm-2 col-xs-12" @click="add">+新增字段</button>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-submit">提交</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal -->
        </div>


        <mxw-list :title="title" :list-th="listTh" :list-td="listTd" :oper="oper" :page-info="info"></mxw-list>
    </mxw-well>
</div>
</template>
<script>
import mxwList from "./mxw-list.vue";
import mxwWell from "./mxw-well.vue";
import mxwBtnImg from './mxw-btn-img.vue'

export default {
  components: {
    mxwList,
    mxwWell,
    mxwBtnImg
  },
  data() {
    return {
      field: [],
      speed: 0,
      info: {
        pageNum: 2,
        pageSize: 10,
        size: 10,
        orderBy: null,
        startRow: 1,
        endRow: 10,
        total: 20,
        pages: 2,
        list: [],
        firstPage: 1,
        prePage: 1,
        nextPage: 3,
        lastPage: 2,
        isFirstPage: false,
        isLastPage: true,
        hasPreviousPage: true,
        hasNextPage: false,
        navigatePages: 8,
        navigatepageNums: [1, 2]
      },
      title: "会员列表",
      listTh: [
        "ID",
        "分类",
        "类型",
        "标题",
        "奖励信用分",
        "增加时间",
        "最后编辑",
        "状态",
      ],
      listTd: [
        [
          ["48"],
          ["农业"],
          ["分享"],
          ["埃索达"],
          ["12"],
          ["2018-06-21 19:38"],
          ["2018-06-21 19:45"],
          [
            "已审核",
            "#12aecb"
          ]
        ],
        
      ],
      oper: [
          {
              id: 1,
              name: '留言管理'
          },
          {
              id: 2,
              name: '编辑'
          },
          {
              id: 3,
              name: '删除'
          },
        
      ]
    };
  },
  methods: {
    jump: function(target, patt) {
      this.$router.push({
        name: target,
        params: patt
      });
    },
    add(){
      this.field.push(this.speed++);
    },
    close(index){
      this.field.splice(index, 1);
    }
  },
  mounted(){
      console.log("article-list安装完成");
  }
  
};
</script>
<style scoped>
.btn-simple {
  background-color: #8178b8;
  border: 0;
  padding: 6px 10px;
  color: white;
  float: right;
}
.btn-simple:hover {
  background-color: #7165bd;
}
.form-select {
  background: #fff;
  border-radius: 0;
  border: 1px solid #dce1e4;
  box-shadow: none !important;
  font-size: 13px;
  padding: 6px 10px !important;
  transition: all 0.2s ease-in-out;
}
.form-label {
  text-align: center;
  padding-top: 7px;
}
.mxw-panel-body {
  display: flex;
  flex-direction: column;
}
.panel-heading {
  height: 60px;
}
.panel-title {
  padding-top: 10px;
}
.panel-heading a {
  font-weight: bold;
}
.pannel-item {
  padding: 10px 0 10px 0;
}
.modal-body {
  padding: 10px 0 50px 0;
}
.form-input {
  background: #fff;
  border-radius: 0;
  border: 1px solid #dce1e4;
  box-shadow: none !important;
  font-size: 13px;
  padding: 6px 10px !important;
  transition: all 0.2s ease-in-out;
}
</style>


