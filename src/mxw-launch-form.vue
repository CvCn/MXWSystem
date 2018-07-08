<template>
<div>
    <mxw-well>
        <ol class="breadcrumb" style="background-color: white; padding: 0; margin: 0; font-size: 13px;">
            <li><a href="javascript: void(0)" @click="jump('home')" style="color: #b63b4d">Home</a></li>
            <li class="active">发起众筹</li>
        </ol>
    </mxw-well>
    <mxw-well style="margin: 3% 0 50px 0; font-size: 13px;">
        <div class="panel-group" id="accordion">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" 
                        href="#collapseOne">
                        基本信息
                        </a>
                    </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse in">
                    <div class="panel-body mxw-panel-body">
                        <div class="pannel-item">
                            <div for="classify" class="form-label col-sm-2">项目类型</div>
                            <select name="classify" class="form-select col-sm-6 col-xs-12">
                                <option value="1">分类1</option>
                                <option value="2">分类2</option>
                                <option value="3">分类3</option>
                            </select>
                        </div>
                        <div class="pannel-item">
                            <div for="classify" class="form-label col-sm-2">发起人身份</div>
                            <select name="classify" class="form-select col-sm-6 col-xs-12">
                                <option value="1">官方</option>
                                <option value="2">个人</option>
                                <option value="3">企业/机构</option>
                            </select>
                        </div>
                        
                        <div class="pannel-item">
                            <mxw-list :title="zizhi.title" :list-th="zizhi.listTh" :list-td="zizhi.listTd" :oper="zizhi.oper" :page-info="zizhi.info"></mxw-list>
                        </div>
                        <div class="pannel-item">
                            <button type="button" class="btn-simple" data-toggle="modal" data-target="#zizhizhengming">+添加资质证明</button>

                            <!-- 模态框（Modal） -->
                            <div class="modal fade" id="zizhizhengming" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            <h4 class="modal-title" id="myModalLabel">添加资质证明</h4>
                                        </div>
                                        <div class="modal-body mxw-panel-body">
                                            <div class="pannel-item">
                                                <div for="classify" class="form-label col-sm-2">资质名称</div>
                                                <input type="text" name="" class="form-input col-sm-9 col-xs-12" placeholder="如身份证正面、营业执照等">
                                            </div>

                                            <div class="pannel-item">
                                                <div for="classify" class="form-label col-sm-2">图片</div>
                                                <mxw-btn-img class="col-sm-9 col-xs-12"></mxw-btn-img>
                                            </div>

                                            <div class="pannel-item">
                                                <div for="classify" class="form-label col-sm-2">状态</div>
                                                <select name="classify" class="form-select col-sm-9 col-xs-12">
                                                    <option value="1">未核验</option>
                                                    <option value="2">已核验</option>
                                                </select>
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
                    </div>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" 
                        href="#collapseTwo">
                        项目信息
                    </a>
                    </h4>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse">
                <div class="panel-body  mxw-panel-body">
                    <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">众筹封面</div>
                        <mxw-btn-img class="col-sm-6 col-xs-12"></mxw-btn-img>
                    </div>
                    <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">标题</div>
                        <input type="text" name="" class="form-input col-sm-6 col-xs-12">
                    </div>
                    <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">筹集金额</div>
                        <div class="input-group">
                            <span class="input-group-addon form-input" style="background-color: #f1f1f1;">￥</span>
                            <input type="number" class="form-input col-sm-7 col-xs-12" placeholder="0.00" min="0" v-model="ifms.fina">
                        </div>
                    </div>
                    <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">筹款模式</div>
                        <select name="classify" class="form-select col-sm-6 col-xs-12">
                            <option value="1">筹满后停止</option>
                            <option value="2">筹满后继续</option>
                        </select>
                    </div>
                    <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">支持金额</div>
                        <div class="input-group">
                            <span class="input-group-addon form-input" style="background-color: #f1f1f1;">￥</span>
                            <input type="number" class="form-input col-sm-7 col-xs-12" placeholder="0.00" min="0">
                        </div>
                        <div style="font-size: 12px; text-align: center;" class=" col-sm-8 col-xs-12">*此处为无偿支持的挡位，请敲回车或英文逗号分割</div>
                    </div>
                    <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">筹款目的</div>
                        <textarea name="" id="" class="form-input col-sm-6 col-xs-12"></textarea>
                    </div>
                    <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">开始时间</div>
                        <input type="text" name="" class="form-input form_datetime col-sm-6 col-xs-12" readonly>
                    </div>
                    <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">结束时间</div>
                        <input type="text" name="" class="form-input form_datetime col-sm-6 col-xs-12" readonly>
                    </div>
                    <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">自定义标签</div>
                        <input type="text" name="" class="form-input col-sm-6 col-xs-12" readonly>
                    </div>
                    <div class="pannel-item">
                        <div for="classify" class="form-label col-sm-2">状态</div>
                        <select name="classify" class="form-select col-sm-6 col-xs-12">
                            <option value="1">上线</option>
                            <option value="2">下线</option>
                        </select>
                    </div>
                    
                </div>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" 
                        href="#collapseThree">
                        详细描述
                        </a>
                    </h4>
                </div>
                <div id="collapseThree" class="panel-collapse collapse">
                    <div class="panel-body">
                        <div id="editor"></div>
                    </div>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" 
                        href="#collapseFour">
                        回报设置
                        </a>
                    </h4>
                </div>
                <div id="collapseFour" class="panel-collapse collapse">
                    <div class="panel-body">
                        
                        <div class="panel panel-default" v-for="(i, index) in item" :key="i" style="margin-bottom: 30px;">
                            <div class="panel-heading" style="background-color: #8178b8;">
                                <button type="button" class="" aria-hidden="true" @click="close(index)" style="border: 1px solid white; background-color: #8178b8; color: white; float: right;">
                                    x
                                </button>
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" 
                                    :href="'#collapse' + index" style="color: white;">
                                    回报{{index+1}}
                                    </a>
                                </h4>
                            </div>
                            <div :id="'collapse' + index" class="collapse in">
                                <div class="panel-body mxw-panel-body">
                                    <div class="pannel-item">
                                        <div for="classify" class="form-label col-sm-2">回报类型</div>
                                        <select name="classify" class="form-select col-sm-6 col-xs-12">
                                            <option value="1">实物回报</option>
                                            <option value="2">虚拟回报</option>
                                        </select>
                                    </div>
                                    <div class="pannel-item">
                                        <div for="classify" class="form-label col-sm-2">支持金额</div>
                                        <div class="input-group">
                                            <span class="input-group-addon form-input" style="background-color: #f1f1f1;">￥</span>
                                            <input type="number" min="0" class="form-input col-sm-7 col-xs-12" placeholder="0.00">
                                        </div>
                                    </div>
                                    <div class="pannel-item">
                                        <div for="classify" class="form-label col-sm-2">回报标题</div>
                                        <input type="text" name="" class="form-input col-sm-6 col-xs-12">
                                    </div>
                                    <div class="pannel-item">
                                        <div for="classify" class="form-label col-sm-2">回报内容</div>
                                        <textarea name="" id="" class="form-input col-sm-6 col-xs-12"></textarea>
                                    </div>
                                    <div class="pannel-item">
                                        <div for="classify" class="form-label col-sm-2">回报总数</div>
                                        <input type="number" min="0" name="" class="form-input col-sm-6 col-xs-12">
                                        <div style="font-size: 12px; text-align: center;" class=" col-sm-8 col-xs-12">*“0”为不限名额</div>
                                    </div>
                                    <div class="pannel-item">
                                        <div for="classify" class="form-label col-sm-2">支持数/人</div>
                                        <input type="number" min="0" name="" class="form-input col-sm-6 col-xs-12">
                                        <div style="font-size: 12px; text-align: center;" class=" col-sm-8 col-xs-12">*0或1为限支持1次，n为n次</div>
                                    </div>
                                    <div class="pannel-item">
                                        <div for="classify" class="form-label col-sm-2">回报时间</div>
                                        <input type="text" name="" class="form-input col-sm-6 col-xs-12">
                                        <div style="font-size: 12px; text-align: center;" class=" col-sm-8 col-xs-12">*“0”为项目结束后立即发送</div>
                                    </div>
                                    <div class="pannel-item">
                                        <div for="classify" class="form-label col-sm-2">自定义字段</div>
                                        <input type="text" name="" class="form-input col-sm-6 col-xs-12">
                                        <div style="font-size: 12px; text-align: center;" class=" col-sm-8 col-xs-12">*用户支持该回报时需要填写的字段，实物回报默认使用用户收货地址。</div>
                                        <div style="font-size: 12px; text-align: center;" class=" col-sm-8 col-xs-12">*多个字段用英文逗号分隔。</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>


                        <button type="button" class="btn-simple" @click="addItem">+添加回报项</button>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn-submit col-sm-offset-11" style="margin-bottom: 30px;">提交</button>
    </mxw-well>
</div>
</template>
<script scoped>
import E from "wangeditor";
import mxwWell from "./mxw-well.vue";
import mxwList from "./mxw-list.vue";
import mxwBtnImg from "./mxw-btn-img.vue";

export default {
  name: "editor",
  components: {
    mxwWell,
    mxwList,
    mxwBtnImg
  },
  data() {
    return {
      ifms: {
        fina: 0
      },
      editorContent: "",
      itemId: 0,
      item: [],
      zizhi: {
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
        title: "资质",
        listTh: ["资质名", "资质图片", "状态"],
        listTd: [
          [["48"], ["http://moxiaowei.com/img/M.png"], ["已核验", "#12aecb"]]
        ],
        oper: [
          {
            id: 1,
            name: "编辑"
          },
          {
            id: 2,
            name: "移除"
          }
        ]
      }
    };
  },
  methods: {
    addItem() {
      this.item.push(this.itemId++);
    },
    close(index) {
      this.item.splice(index, 1);
    },
    jump: function(target, patt) {
      this.$router.push({
        name: target,
        params: patt
      });
    },
    checkPrice(price) {
      if (!/^(?:d+|d+.d{0,2})$/.test(price)) {
        this.ifms.fina = ("" + price).replace(/^(d*.d{0,2}|d+).*$/, "$1");
      }
    }
  },
  mounted() {
    var editor = new E("#editor");

    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };

    editor.customConfig.showLinkImg = false;
    editor.create();
    $(".w-e-icon-image")
      .parent()
      .click(() => {
        $(".w-e-panel-container").hide();
        $("#myModal2").modal("show");
      });

    $(".form_datetime").datetimepicker({
      format: "yyyy-mm-dd hh:ii",
      language: "zh-CN",
      autoclose: true,
      bootcssVer: 3,
      pickerPosition: "bottom-right",
      todayBtn: true,
      minuteStep: 5,
      todayHighlight: true,
      keyboardNavigation: true,
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


