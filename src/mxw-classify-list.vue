<template>
<div>
    <mxw-well>
        <ol class="breadcrumb" style="background-color: white; padding: 0; margin: 0; font-size: 13px;">
            <li><a href="javascript: void(0)" @click="jump('home')" style="color: #b63b4d">Home</a></li>
            <li class="active">众筹分类</li>
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
      title: "众筹分类",
      listTh: [
        "ID",
        "排序",
        "分类名称",
        "图标",
      ],
      listTd: [
        [
          ["12"],
          ["0"],
          ["爱心公益"],
          ["http://www.moxiaowei.com/img/M.png"],
        ],[
          ["12"],
          ["0"],
          ["爱心公益"],
          ["http://www.moxiaowei.com/img/M.png"],
        ],[
          ["12"],
          ["0"],
          ["爱心公益"],
          ["http://www.moxiaowei.com/img/M.png"],
        ],[
          ["12"],
          ["0"],
          ["爱心公益"],
          ["http://www.moxiaowei.com/img/M.png"],
        ],
        
      ],
      oper: [
          {
              id: 1,
              name: '删除'
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
      console.log("classify-list安装完成");
  }
  
};
</script>
<style scoped>
</style>


