<template>
<div>
    <mxw-well>
        <ol class="breadcrumb" style="background-color: white; padding: 0; margin: 0; font-size: 13px;">
            <li><a href="javascript: void(0)" @click="jump('home')" style="color: #b63b4d">Home</a></li>
            <li class="active">系统设置</li>
        </ol>
    </mxw-well>
    <mxw-well style="margin-top: 3%;">
        
        <ul id="myTab" class="nav nav-tabs">
          <li class="active">
            <a href="#home" data-toggle="tab" style="border-radius: 0">
                基础设置
            </a>
          </li>
          <li>
            <a href="#ios" data-toggle="tab" style="border-radius: 0">
              iOS
            </a>
          </li>
         
      </ul>
      <div id="myTabContent" class="tab-content">
          <div class="tab-pane fade in active" id="home">
              <div class="pannel-item">
                  <div for="classify" class="form-label col-sm-2">系统名称</div>
                  <input type="text" name="" class="form-input col-sm-6 col-xs-12">
              </div><br><br>
              <div class="pannel-item">
                  <div for="classify" class="form-label col-sm-2">系统LOGO</div>
                  <mxw-btn-img class="col-sm-6 col-xs-12"></mxw-btn-img>
              </div><br><br>
              <div class="pannel-item">
                  <div for="classify" class="form-label col-sm-2">官网地址</div>
                  <input type="text" name="" class="form-input col-sm-6 col-xs-12">
              </div><br><br>
              <div class="pannel-item">
                  <div for="classify" class="form-label col-sm-2">公司电话</div>
                  <input type="text" name="" class="form-input col-sm-6 col-xs-12">
              </div><br><br>
              <div class="pannel-item">
                  <div for="classify" class="form-label col-sm-2">客服QQ</div>
                  <input type="text" name="" class="form-input col-sm-6 col-xs-12">
              </div><br><br>
              <div class="pannel-item">
                  <div for="classify" class="form-label col-sm-2">官网地址</div>
                  <input type="text" name="" class="form-input col-sm-6 col-xs-12">
              </div><br><br>
              <div class="pannel-item">
                  <div for="classify" class="form-label col-sm-2">风险提示</div><br><br>
                  <div id="editor"></div>
              </div><br><br>
              <div class="pannel-item">
                  <div for="classify" class="form-label col-sm-2">关于我们</div><br><br>
                  <div id="editor2"></div>
              </div><br><br>
              <button type="button" class="btn btn-submit col-sm-offset-10 col-sm-1 col-xs-12">提交</button><br><br><br><br>
          </div>
          <div class="tab-pane fade" id="ios">
              <p>iOS 是一个由苹果公司开发和发布的手机操作系统。最初是于 2007 年首次发布 iPhone、iPod Touch 和 Apple
                  TV。iOS 派生自 OS X，它们共享 Darwin 基础。OS X 操作系统是用在苹果电脑上，iOS 是苹果的移动版本。</p>
          </div>
          
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
    return {};
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
    console.log("system安装完成");
    var editor = new E("#editor");

    editor.customConfig.onchange = html => {
      this.editorContent = html;
      console.log(html);
    };

    editor.customConfig.showLinkImg = false;
    editor.create();
    $(".w-e-icon-image")
      .parent()
      .click(function() {
        console.log("img");
        return -1;
      });

    var editor = new E("#editor2");

    editor.customConfig.onchange = html => {
      this.editorContent = html;
      console.log(html);
    };

    editor.customConfig.showLinkImg = false;
    editor.create();
    $(".w-e-icon-image")
      .parent()
      .click(function() {
        console.log("img");
        return -1;
      });
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


