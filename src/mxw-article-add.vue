<template>
<div>
    <mxw-well>
        <ol class="breadcrumb" style="background-color: white; padding: 0; margin: 0; font-size: 13px;">
            <li><a href="javascript: void(0)" @click="jump('home')" style="color: #b63b4d">Home</a></li>
            <li><a href="javascript: void(0)" @click="jump('4list')" style="color: #b63b4d">资讯文章</a></li>
            <li class="active">新增资讯文章</li>
        </ol>
    </mxw-well>
    <mxw-well class="mxw-well">
        <div class="mxw-panel-body">
          <div class="pannel-item">
            <div for="classify" class="form-label col-sm-2">状态</div>
            <select name="classify" class="form-select col-sm-6 col-xs-12" v-model="art.state">
                <option value="1">未核验</option>
                <option value="2">已核验</option>
            </select>
          </div>
          <div class="pannel-item">
            <div for="classify" class="form-label col-sm-2">资讯分类</div>
            <select name="classify" class="form-select col-sm-6 col-xs-12" v-model="art.classify">
                <option value="1">民生</option>
                <option value="2">农业</option>
                <option value="2">风俗</option>
                <option value="2">财经</option>
            </select>
          </div>
          <div class="pannel-item">
            <div for="classify" class="form-label col-sm-2">类型</div>
            <select name="classify" class="form-select col-sm-6 col-xs-12" v-model="art.type">
                <option value="1">文章分享</option>
                <option value="2">资源收集</option>
            </select>
          </div>
          <div class="pannel-item">
              <div for="classify" class="form-label col-sm-2">信用奖励</div>
              <input type="number" name="" class="form-input col-sm-6 col-xs-12" min="0" v-model="art.reward" oninput="javascript:this.value=this.value.replace(/[^\d]/g,'')" >
          </div>
          <div class="pannel-item">
              <div for="classify" class="form-label col-sm-2">标题</div>
              <input type="text" name="" class="form-input col-sm-6 col-xs-12" v-model="art.title">
          </div>
          <div class="pannel-item">
              <div for="classify" class="form-label col-sm-2">缩略图</div>
              <mxw-btn-img class="col-sm-6 col-xs-12"></mxw-btn-img>
          </div>
          <div class="pannel-item">
              <div for="classify" class="form-label col-sm-2">正文</div><br><br>
              <div id="editor"></div>
          </div>
        </div>
        <div class=" col-sm-offset-11 ">
          <button type="button" class="btn-submit" style="margin-bottom: 30px;" @click="submit">提交</button>
        </div>
    </mxw-well>
</div>
</template>
<script>
import E from "wangeditor";
import mxwList from "./mxw-list.vue";
import mxwWell from "./mxw-well.vue";
import mxwBtnImg from "./mxw-btn-img.vue";

export default {
  components: {
    mxwList,
    mxwWell,
    mxwBtnImg
  },
  data() {
    return {
      art: {
        state: 1,
        classify: 1,
        type: 1,
        reward: "",
        title: "",
        img: "",
        context: ""
      },
      title: "资讯文章",
      listTh: [
        "ID",
        "分类",
        "类型",
        "标题",
        "奖励信用分",
        "增加时间",
        "最后编辑",
        "状态"
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
          ["已审核", "#12aecb"]
        ]
      ],
      oper: [
        {
          id: 1,
          name: "留言管理"
        },
        {
          id: 2,
          name: "编辑"
        },
        {
          id: 3,
          name: "删除"
        }
      ]
    };
  },
  watch: {
    
  },
  methods: {
    jump: function(target, patt) {
      this.$router.push({
        name: target,
        params: patt
      });
    },
    submit() {
      var art = this.art;
      //  reward: '',
      //   title: '',
      //   img: '',
      //   context: ''
      console.log(art.state);
      if (
        (art.reward == "" || art.title == "",
        art.img == "" || art.context == "")
      ) {
        this.$store.dispatch("addAlert", {
          level: "warning",
          text: "请将信息填写完整"
        });
      }
    }
  },
  mounted() {
    console.log("article-list安装完成");
    var editor = new E("#editor");

    editor.customConfig.onchange = html => {
      this.editorContent = html;
      console.log(html);
    };

    editor.customConfig.showLinkImg = false;
    editor.create();

    $('.w-e-icon-image').parent().click(() => {
      $('.w-e-panel-container').hide();
        $('#myModal2').modal('show');
    })
  }
};
</script>
<style scoped>
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
.btn-simple {
  background-color: #8178b8;
  border: 0;
  padding: 6px 10px;
  color: white;
}
.btn-simple:hover {
  background-color: #7165bd;
}
.mxw-well {
  margin-top: 3%;
  font-size: 13px;
}
.btn-submit {
  background-color: #b63b4d;
  border: 0;
  padding: 6px 10px;
  color: white;
}
.btn-submit:hover {
  background-color: #a03243;
}
</style>


