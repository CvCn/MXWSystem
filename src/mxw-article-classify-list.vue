<template>
<div>
    <mxw-well>
        <ol class="breadcrumb" style="background-color: white; padding: 0; margin: 0; font-size: 13px;">
            <li><a href="javascript: void(0)" @click="jump('home')" style="color: #b63b4d">Home</a></li>
            <li class="active">资讯分类</li>
        </ol>
    </mxw-well>
    <mxw-well style="margin-top: 3%;">
        <button type="button" class="btn-simple" data-toggle="modal" data-target="#myModal">新增分类</button>
        <mxw-list :title="title" :list-th="listTh" :list-td="listTd" :oper="oper" :page-info="info"></mxw-list>
    </mxw-well>

          <!-- 模态框（Modal） -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      <h4 class="modal-title" id="myModalLabel">新增分类</h4>
                  </div>
                  <div class="modal-body mxw-panel-body">
                    
                  <div class="pannel-item">
                    <div for="classify" class="form-label col-sm-2">分类名称</div>
                    <input type="text" name="" class="form-input col-sm-9 col-xs-12">
                  </div>
                  <div class="pannel-item">
                    <div for="classify" class="form-label col-sm-2">分类排序</div>
                    <input type="number" name="" class="form-input col-sm-9 col-xs-12">
                  </div>
                  <div class="pannel-item">
                    <div for="classify" class="form-label col-sm-2">分类描述</div>
                    <textarea type="text" name="" class="form-input col-sm-9 col-xs-12"></textarea>
                  </div>


                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                      <button type="button" class="btn btn-submit">提交</button>
                  </div>
              </div><!-- /.modal-content -->
          </div><!-- /.modal -->
      </div>
</div>
</template>
<script>
import mxwList from "./mxw-list.vue";
import mxwWell from "./mxw-well.vue";

export default {
  components: {
    mxwList,
    mxwWell
  },
  data() {
    return {
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
      title: "资讯文章",
      listTh: ["ID", "排序", "名称", "描述"],
      listTd: [[["1"], ["1"], ["民生"], ["埃索达"]]],
      oper: [
        {
          id: 1,
          name: "删除"
        }
      ]
    };
  },
  methods: {
    jump: function(target, patt) {
      this.$router.push({
        name: target,
        params: patt
      });
    }
  },
  mounted() {
    console.log("article-classify-list安装完成");
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


