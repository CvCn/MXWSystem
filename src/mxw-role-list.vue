<template>
<div>
    <mxw-well>
        <ol class="breadcrumb" style="background-color: white; padding: 0; margin: 0; font-size: 13px;">
            <li><a href="javascript: void(0)" @click="jump('home')" style="color: #b63b4d">Home</a></li>
            <li class="active">角色管理</li>
        </ol>
    </mxw-well>
    <mxw-well style="margin-top: 3%;">
        <button type="button" data-toggle="modal" data-target="#myModal" class="btn-simple" >新增角色</button>

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
                      <div for="classify" class="form-label col-sm-2">角色名称</div>
                      <input type="text" name="" class="form-input col-sm-9 col-xs-12">
                    </div>
                    <div class="pannel-item">
                      <div for="classify" class="form-label col-sm-2">描述</div>
                      <textarea type="text" name="" class="form-input col-sm-9 col-xs-12"></textarea>
                    </div>
                    <div class="pannel-item">
                      <div for="classify" class="form-label col-sm-2">权限</div><br><br>
                      <div v-for="item in menu" :key="item.id" class="check-item col-sm-offset-3 col-sm-6">
                        <div for="classify" :class="'form-label col-sm-12 fa fa-'+item.icon" style="padding: 17px; background-color: white; color: black; border: 1px solid #dedede; margin-top: 10px;"> {{item.name}}</div><br><br>
                        <div v-for="item2 in item.childMenu" :key="item2.id" class="checkbox-div">
                          <input type="checkbox" name="" :id="'i'+item2.id" class="checkbox"> <label :for="'i'+item2.id">{{item2.name}}</label>
                        </div>
                      </div>
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
      menu: [
        {
          id: 1,
          name: "控制台",
          link: "",
          icon: "home",
          childMenu: [
            {
              id: 1,
              name: "控制台",
              link: "home"
            }
          ]
        },
        {
          id: 2,
          name: "众筹管理",
          link: "",
          icon: "list",
          childMenu: [
            {
              id: 20,
              name: "众筹审核",
              link: "0list"
            },
            {
              id: 21,
              name: "众筹列表",
              link: "1list"
            },
            {
              id: 22,
              name: "众筹分类",
              link: "2list"
            },
            {
              id: 23,
              name: "发起众筹",
              link: "3form"
            },
            
          ]
        },
        {
          id: 3,
          name: "文章资讯",
          link: "",
          icon: "newspaper-o",
          childMenu: [
            {
              id: 30,
              name: "资讯文章",
              link: "4list"
            },
            {
              id: 31,
              name: "资讯分类",
              link: "6addClassify"
            },
            {
              id: 32,
              name: "留言管理",
              link: "7disList"
            }
          ]
        },
        {
          id: 4,
          name: "会员管理",
          link: "",
          icon: "group",
          childMenu: [
            {
              id: 40,
              name: "会员列表",
              link: "8memberList"
            }
          ]
        },
        {
          id: 5,
          name: "管理员设置",
          link: "",
          icon: "wrench",
          childMenu: [
            {
              id: 51,
              name: "管理员列表",
              link: "9adminList"
            },
            {
              id: 52,
              name: "角色管理",
              link: "10roleList"
            },
            {
              id: 53,
              name: "部门管理",
              link: "11departmentList"
            }
          ]
        },
        {
          id: 6,
          name: "系统管理",
          link: "",
          icon: "cog",
          childMenu: [
            {
              id: 61,
              name: "入门管理",
              link: "12entryList"
            },
            {
              id: 62,
              name: "公告管理",
              link: "13noticeList"
            },
            {
              id: 63,
              name: "系统设置",
              link: "14system"
            }
          ]
        },
        {
          id: 7,
          name: "帮助",
          link: "",
          icon: "question-circle",
          childMenu: [
            {
              id: 70,
              name: "帮助分类",
              link: ""
            },
            {
              id: 71,
              name: "帮助文章",
              link: ""
            }
          ]
        }
      ],
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
.checkbox{
  display: inline;
}
.check-item{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #444359;
  font-size: 14px;
  color: white;
}
.checkbox-div{
  padding: 10px 20px;
  text-align: center;
}

</style>


