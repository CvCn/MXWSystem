<template>
<div>
    <table class="table">
    <caption>{{title}}</caption>
    <thead>
        <tr>
        <th v-for="(item, index) in listTh" :key="index">{{item}}</th>
        <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item, index) in listTd" :key="index">
        <td v-for="(itemItem, index2) in item" :key="index2">
            <div v-if="itemItem[0].substr(0, 4) == 'http'" >
                <img :src="itemItem[0]" alt="img" style="height: 30px; width: 30px">
                <a :href="itemItem[0]" target="_blank" style="font-size: 12px; color: black; text-decoration: none;">查看大图</a>
            </div>
            <div v-else :class="itemItem[1] ? 'item-p' : ''" :style="'background-color: ' + itemItem[1]">{{itemItem[0]}}</div>
        </td>
        <td class="btn-group" style="margin-top: -1px;">
            <button type="button" class="btn-simple dropdown-toggle" data-toggle="dropdown">操作
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu" style="font-size: 12px;">
                <li role="presentation" v-for="(item, index) in oper" :key="index">
                    <a role="menuitem" tabindex="-1" href="javascript: void(0)" @click="jump(item.link)">{{item.name}}</a>
                </li>
            </ul>
        </td>
        </tr>
    </tbody>
    </table>


    <div class="page-parent">
        <div class="col-sm-2 col-xs-12" style="text-align: center;">共{{pageInfo.total}}条，第{{pageInfo.pageNum}}/{{pageInfo.pages}}页</div>
        <div class="page-item col-sm-5 col-xs-12" style="text-align: center;">
            <button type="button" class="btn-pure" v-if="!pageInfo.isFirstPage">首页</button>
            <button type="button" class="btn-pure" v-if="pageInfo.hasPreviousPage">上一页</button>
            <button type="button" class="btn-pure" v-for="item in pageInfo.navigatepageNums" :key="item" :style="pageInfo.pageNum == item ? 'background-color: #f1f1f1;' : ''">{{item}}</button>
            <button type="button" class="btn-pure" v-if="pageInfo.hasNextPage">下一页</button>
            <button type="button" class="btn-pure" v-if="!pageInfo.isLastPage">尾页</button>
        </div>
    </div>
</div>
</template>
<script>
import mxwWell from "./mxw-well.vue";
export default {
  components: {
    mxwWell
  },
  props: ["title", "listTh", "listTd", "oper", 'pageInfo'],
  data(){
      return{
          mxwImg: {
              height: 30,
              widht: 30
          }
      }
  },
  methods:{
      jump: function (target, patt) {
      this.$router.push({
        name: target,
        params: patt
      });
    },
    // enlarge (url){
    //     if(this.mxwImg.height == 30 && this.mxwImg.widht == 30){
    //         var img = new Image();
    //         img.src=url;
    //         var _this = this;
    //         img.onload = function(){
    //             _this.mxwImg = {
    //                 height: img.height,
    //                 width: img.width
    //             }
    //         }
    //     }else{
    //         this.mxwImg = {
    //             height: 30,
    //             width: 30
    //         }
    //     }
       
    // }
  }
};
</script>
<style scoped>
.btn-simple {
  background-color: #8178b8;
  border: 0;
  padding: 3px 10px;
  color: white;
}
.btn-simple:hover {
  background-color: #7165bd;
}
.btn-pure {
  background-color: white;
  border: 0;
  padding: 7px 14px;
}
.btn-pure:hover {
  background-color: #f7f7f7;
}
.item-p{
    border-radius: 3px;
    padding: 0;
    text-align: center;
    font-size: 13px;
    width: 70%;
}
.page-parent{
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    padding: 30px 0 5px 0;
    flex-wrap: wrap;
    align-items: center;
}
.page-item{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>

