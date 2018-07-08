<template>
<div>
    <mxw-well>
        <ol class="breadcrumb" style="background-color: white; padding: 0; margin: 0; font-size: 13px;">
            <li><a href="javascript: void(0)" @click="jump('home')" style="color: #b63b4d">Home</a></li>
            <li class="active">入口管理</li>
        </ol>
    </mxw-well>
    <mxw-well style="margin-top: 3%;">
        <button type="button" class="btn-simple" data-toggle="modal" data-target="#myModal">新增入口</button>


        <!-- 模态框（Modal） -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="myModalLabel">新增入口</h4>
                    </div>
                    <div class="modal-body mxw-panel-body">
                      
                   
                      <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">入口名称</div>
                        <input type="text" name="" class="form-input col-sm-9 col-xs-12">
                      </div>
                      <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">关键词</div>
                        <input type="text" name="" class="form-input col-sm-9 col-xs-12">
                      </div>
                      <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">入口描述</div>
                        <textarea type="text" name="" class="form-input col-sm-9 col-xs-12"></textarea>
                      </div>
                      <div class="pannel-item">
                          <div for="classify" class="form-label col-sm-2">入口位置</div>
                          <select name="classify" class="form-select col-sm-9 col-xs-12" v-model="enterAdd.pos">
                            <optgroup label="众筹链接">
                              <option value="1">众筹列表</option>
                              <option value="2">发起众筹</option>
                              <option value="3">我参与的众筹</option>
                              <option value="4">我支持的众筹</option>
                            </optgroup>
                            <optgroup label="其他链接">
                              <option value="5">首页</option>
                              <option value="6">会员中心</option>
                              <option value="7">自定义</option>
                            </optgroup>
                          </select>
                      </div>
                      <div class="pannel-item" v-if="enterAdd.pos == 7">
                        <div for="classify" class="form-label col-sm-2">自定义</div>
                        <input type="text" name="" class="form-input col-sm-9 col-xs-12" placeholder="连接">
                      </div>

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

export default {
  components: {
    mxwList,
    mxwWell
  },
  data() {
    return {
      enterAdd: {
        pos: 1 
      },
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
      title: "角色管理",
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
</style>


