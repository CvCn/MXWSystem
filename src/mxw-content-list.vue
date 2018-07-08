<template>
<div>
    <mxw-well>
        <ol class="breadcrumb" style="background-color: white; padding: 0; margin: 0; font-size: 13px;">
            <li><a href="javascript: void(0)" @click="jump('home')" style="color: #b63b4d">Home</a></li>
            <li class="active">众筹列表</li>
        </ol>
    </mxw-well>
    <mxw-well style="margin-top: 3%;">
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
      title: "众筹列表",
      listTh: [
        "编号",
        "类型",
        "发起人",
        "众筹分类",
        "标题",
        "开始时间",
        "结束时间",
        "状态",
        "发起人身份",
        "进度",
      ],
      listTd: [
        [
          ["48"],
          ["普通"],
          ["高鑫"],
          ["分类1"],
          ["解决了"],
          ["2018-06-21 19:38"],
          ["2018-06-21 19:45"],
          [
            "已结算",
            "#12aecb"
          ],
          ["个人"],
          ["40%"]
        ],
        [
          ["48"],
          ["普通"],
          ["高鑫"],
          ["分类1"],
          ["解决了"],
          ["2018-06-21 19:38"],
          ["2018-06-21 19:45"],
          [
            "已下线",
            "#7a6fbe"
          ],
          ["个人"],
          ["40%"]
        ],
        [
          ["48"],
          ["普通"],
          ["高鑫"],
          ["分类1"],
          ["解决了"],
          ["2018-06-21 19:38"],
          ["2018-06-21 19:45"],
          [
            "已结束",
            "white"
          ],
          ["个人"],
          ["40%"]
        ],
        [
          ["48"],
          ["普通"],
          ["高鑫"],
          ["分类1"],
          ["解决了"],
          ["2018-06-21 19:38"],
          ["2018-06-21 19:45"],
          [
            "已结算",
            "#12afcb"
          ],
          ["个人"],
          ["40%"]
        ]
      ],
      oper: [
          {
              id: 1,
              name: '留言管理'
          },
          {
              id: 2,
              name: '进展管理'
          },
          {
              id: 3,
              name: '支持列表'
          },
          {
              id: 4,
              name: '回报处理'
          },
          {
              id: 5,
              name: '编辑'
          },
          {
              id: 6,
              name: '还款计划'
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
  mounted(){
      console.log("content-list安装完成");
  }
  
};
</script>
<style scoped>
</style>


