<template>
<div>
    <mxw-well>
        <ol class="breadcrumb" style="background-color: white; padding: 0; margin: 0; font-size: 13px;">
            <li><a href="javascript: void(0)" @click="jump('home')" style="color: #b63b4d">Home</a></li>
            <li class="active">管理员列表</li>
        </ol>
    </mxw-well>
    <mxw-well style="margin-top: 3%;">
        <button type="button" data-toggle="modal" data-target="#myModal" class="btn-simple">新增管理员</button>

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
                      <div for="classify" class="form-label col-sm-2">查找用户</div>
                          <div class="input-group col-sm-9 col-xs-12">
                            <input type="text" class="form-control form-input" readonly="readonly">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button">查找</button>
                            </span>
                        </div>
                    </div>
                    <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">选择角色</div>
                        <select name="classify" class="form-select col-sm-9 col-xs-12">
                            <option value="1">测试</option>
                            <option value="2">测试2</option>
                        </select>
                    </div>
                    <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">选择部门</div>
                        <select name="classify" class="form-select col-sm-9 col-xs-12">
                            <option value="1">部门1</option>
                            <option value="2">部门2</option>
                        </select>
                    </div>
                    
                    <div class="pannel-item">
                      <div for="classify" class="form-label col-sm-2">姓名</div>
                      <input type="text" name="" class="form-input col-sm-9 col-xs-12">
                    </div>
                    <div class="pannel-item">
                      <div for="classify" class="form-label col-sm-2">手机号码</div>
                      <input type="text" name="" class="form-input col-sm-9 col-xs-12">
                    </div>
                    <div class="pannel-item">
                      <div for="classify" class="form-label col-sm-2">邮箱地址</div>
                      <input type="text" name="" class="form-input col-sm-9 col-xs-12">
                    </div>
                    <div class="pannel-item">
                      <div for="classify" class="form-label col-sm-2">QQ号码</div>
                      <input type="text" name="" class="form-input col-sm-9 col-xs-12">
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
    }
  },
  mounted(){
      console.log("article-list安装完成");
  }
  
};
</script>
<style scoped>


</style>


