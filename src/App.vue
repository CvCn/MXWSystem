<template>
    <div>
	<div>
		<!-- top -->
		<!-- inverse -->
    
		<nav class="navbar navbar-white navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" @click="changeMenu()">
						<span class="sr-only">切换导航</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="/" style="color: #b63b4d">MXWSystem</a>
				</div>
				<!-- <div class="collapse navbar-collapse" id="myNavbar" v-if="!isNavMenu">
					<ul class="nav navbar-nav navbar-left">
						<li>
              <a href="javascript: void(0)" @click="jump('home')">主页</a>
              
              </li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li v-if="isLogin == true">
              </li>  
                <li v-if="isLogin == false">
                    <a href="javascript: void(0)" data-toggle="modal" data-target="#myModal">
                        <img alt="头像" :src="himg" height="20" width="20"> {{user}}
                    </a>
                </li>
                <li v-if="isLogin == true" class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="javascript: void(0)">
                    <img alt="头像" :src="himg" height="20" width="20"> {{user}}
                </a>
                <ul class="dropdown-menu">
                    <li><a href="javascript: void(0)" @click="jump('information')">个人信息</a></li>
                    <li><a href="javascript: void(0)" @click="exit()">退出</a></li>
                </ul>
              </li>
					</ul>
				</div> -->
			</div>
		</nav>
    

<!-- Contenedor -->

<div style="margin-top: 50px; " class="menu-s">
  <div :class="'nav-left col-sm-2 ' + isMenu" style="margin-top: 5px; ">
    <ul id="accordion" class="accordion" >
      <li v-for="(item, index) in menu" :key="item.id">
        <div class="link">
          <i :class="'fa fa-'+item.icon"></i>{{item.name}}<i class="fa fa-chevron-down"></i></div>
        <ul class="submenu" :style="index == 0 ? 'display: block;' : ''">
          <li v-for="(itemItem) in item.childMenu" :key="itemItem.id" ><a href="javascript: void(0)" :style="(clicked == itemItem.link) ? 'background-color: #b63b4d; color: #fff' : ''" @click="jump(itemItem.link)">{{itemItem.name}}</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<!-- 路由出口 -->
<div class="col-sm-10">
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
		<div>&nbsp;</div>
</div>


<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal2" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index: 20000;">
	<div class="modal-dialog" style="width: 80%;">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" 
						aria-hidden="true">×
				</button>
				<h4 class="modal-title" id="myModalLabel">
					图片
				</h4>
			</div>
			<div class="modal-body ">


        <ul id="myTab" class="nav nav-tabs">
          <li class="active">
              <a href="#img" data-toggle="tab" style="border-radius: 0;">
                  本地图片
              </a>
          </li>
          <li><a href="#upload" data-toggle="tab" style="border-radius: 0;">上传图片</a></li>
          <li><a href="#getUrl" data-toggle="tab" style="border-radius: 0;">网络图片</a></li>
         
      </ul>
        <div id="myTabContent" class="tab-content">
          <div class="tab-pane fade in active" id="img">

          <!-- <br><label for="imgI" class="btn-simple" style="margin-right: 50px; cursor: pointer; font-weight: 100;">上传图片</label><br><br> -->
          <input type="file" name="" id="imgI" style="display: none;" multiple="multiple" @change="imgUpload($event)" accept="image/gif, image/jpg, image/jpeg, image/bmp, image/png, image/ico">
          
          <div class="mode-img">
            <div v-for="(item, index) in img" :key="index" :class="choiceIs(index) ? 'mxw-active' : ''">
              <img :src="item.link" :alt="item.name" @click="choice(index)" style="width: 100%; height: 100%;">
              <a :href="item.link" target="_blank" style="background-color: #777777; color: white; font-size: 11px; width: 100%; text-align: center;" :class="choiceIs(index) ? 'active' : ''">查看大图</a>
              <div class="mode-img-text" :class="choiceIs(index) ? 'mxw-active' : ''">{{item.name.substr(0, 12)}}</div>
              <button type="button" class="btn-simple btn-simple-this" v-if="!choiceIs(index)">
                <i class="fa fa-trash-o"></i>
              </button>
              <i class="fa fa-check fa-3x mxw-fa-i" v-if="choiceIs(index)"  @click="choice(index)"></i>
            </div>
          </div>
          </div>

          <div class="tab-pane fade" id="upload">
            <mxw-file-upload></mxw-file-upload>
          </div>

          <div class="tab-pane fade" id="getUrl">
              <div class="urlImg">
                  <strong>输入图片连接</strong>
                  <input type="text" name="" class="form-input col-sm-6 col-xs-12" placeholder="图片连接" style="text-align: center;">
                  <button type="button" class="btn btn-default">上传</button>
              </div>
          </div>


        </div>
        
          
      </div>

			<div class="modal-footer">
				<button type="button" class="btn btn-default" 
						data-dismiss="modal">关闭
				</button>
				<button type="button" class="btn btn-submit">
					确定
				</button>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
</div><!-- /.modal -->



<!-- 页面底部信息 -->
<div class="bottom" style="opacity: 0.618;">
  <mxw-well>
    <a href="http://moxiaowei.com" target="_blank" style="color: black;">Copyright (c) 2018 莫小伟</a>
  </mxw-well>
</div>

</div>
		
</div>

</template>


<script scoped>
import { mapState, mapMutations } from "vuex";
import mxwWell from "./mxw-well.vue";
import mxwAlert from "./mxw-alert.vue";
import mxwBtnImg from "./mxw-btn-img.vue";
import mxwFileUpload from "./mxw-file-upload.vue";

// var this.apiPath = "http://localhost";
export default {
  components: {
    mxwWell,
    mapState,
    mxwAlert,
    mxwBtnImg,
    mxwFileUpload
  },
  data() {
    return {
      isChoice: [],
      img: [
        {
          name: "M.jpg",
          link: "http://www.moxiaowei.com/img/M.png"
        },
        {
          name: "M.jpg",
          link: "http://www.moxiaowei.com/img/M.png"
        },
        {
          name: "M.jpg",
          link: "http://www.moxiaowei.com/img/M.png"
        },
        {
          name: "M.jpg",
          link: "http://www.moxiaowei.com/img/M.png"
        },
        {
          name: "M.jpg",
          link: "http://www.moxiaowei.com/img/M.png"
        },
        {
          name: "M.jpg",
          link: "http://www.moxiaowei.com/img/M.png"
        },
        {
          name: "M.jpg",
          link: "http://www.moxiaowei.com/img/M.png"
        },
        {
          name: "M.jpg",
          link: "http://www.moxiaowei.com/img/M.png"
        },
        {
          name: "M.jpg",
          link: "http://www.moxiaowei.com/img/M.png"
        },
        {
          name: "M.jpg",
          link: "http://www.moxiaowei.com/img/M.png"
        },
        {
          name: "M.jpg",
          link: "http://www.moxiaowei.com/img/M.png"
        },
        {
          name: "M.jpg",
          link: "http://www.moxiaowei.com/img/M.png"
        },
        {
          name: "M.jpg",
          link: "http://www.moxiaowei.com/img/M.png"
        }
      ],
      clicked: "",
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
            }
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
              name: "入口管理",
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
      // isNavMenu: false
      isMenu: "hidden-xs",
      height: window.innerHeight
    };
  },
  methods: {
    // resize() {
    //   window.onresize = function windowResize() {
    //     if (window.innerWidth >= 768) {
    //       this.isNavMenu = true;
    //     } else {
    //       this.isNavMenu = false;
    //     }
    //     console.log(this.isNavMenu);
    //   };

    // }
    changeMenu: function() {
      var isMenu = this.isMenu;
      if (isMenu == "hidden-xs") {
        this.isMenu = "";
      } else {
        this.isMenu = "hidden-xs";
      }
      window.scrollTo(0, 0);
    },
    jump: function(target, patt) {
      this.$router.push({
        name: target,
        params: patt
      });

      this.changeMenu();
    },
    choice(index) {
      var choice = this.isChoice;
      for (var i in choice) {
        if (choice[i] == index) {
          this.isChoice.splice(i, 1);
          return;
        }
      }
      this.isChoice.push(index);
    },
    choiceIs(index) {
      var choice = this.isChoice;
      for (var i in choice) {
        if (choice[i] == index) {
          return true;
        }
      }
      return false;
    }
  },
  watch: {
    $route(to, from) {
      console.log(to.path);
      this.clicked = to.path.substr(1, to.path.length);
    }
  },
  mounted() {
    $(".w-e-icon-image")
      .parent()
      .click(function() {
        $("#myModal2").modal("show");
        return false;
      });

    $("#myModal2").on("hidden.bs.modal", ()=> {
      this.isChoice = [];
    });
  },
  created() {
    this.clicked = "home";
    console.info('本系统框架已经开源，需要源代码请移步github.com/CvCn，如果您想开发应用或者需要技术探讨，欢迎联系邮箱moxiaoweiblog@163.com')
  }
};
</script>

<style scoped>
.navbar-white {
  background-color: white;
  border-color: white;
  box-shadow: 0 3px 1px -1px rgba(128, 128, 128, 0.192);
}

.icon-bar {
  background-color: black;
}

.nav-left ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.accordion > li > a {
  color: #b63b4d;
  text-decoration: none;
}

.accordion > li > div {
  height: 61.8px;
}

/** =======================
 * Contenedor Principal
 ===========================*/

.accordion {
  width: 100%;
  max-width: 360px;
  background: white;
  border-radius: 4px;
}

.accordion .link {
  cursor: pointer;
  display: block;
  padding: 15px 15px 15px 42px;
  font-size: 14px;
  font-weight: 700;
  border-bottom: 1px solid #d6d6d6;
  position: relative;
  transition: all 0.4s ease;
}

.accordion li:last-child .link {
  border-bottom: 0;
}

.accordion li i {
  position: absolute;
  top: 16px;
  left: 12px;
  font-size: 18px;
  color: #595959;
  transition: all 0.4s ease;
}

.accordion li i.fa-chevron-down {
  right: 12px;
  left: auto;
  font-size: 16px;
}

.accordion li.open .link {
  color: #ee7b8c;
}

.accordion li.open i {
  color: #ee7b8c;
}

.accordion li.open i.fa-chevron-down {
  transform: rotate(180deg);
}

/**
 * Submenu
 -----------------------------*/

.submenu {
  display: none;
  background: #444359;
  font-size: 14px;
}

.submenu li {
  color: #d9d9d9;
  border-bottom: 1px solid #4a495d;
}

.submenu a {
  display: block;
  text-decoration: none;
  padding: 12px;
  color: white;
  padding-left: 42px;
  transition: all 0.25s ease;
}

.submenu a:hover {
  background: #b63b4d;
  color: #fff;
}

.glyphicon {
  font-size: 40px;
}

.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.mode-img {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 10px 20px 10px;
}

.mode-img > div > img:hover {
  cursor: pointer;
}

.mode-img > div {
  margin: 40px 10px 40px 10px;
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  height: 130px;
  width: 150px;
}

.mode-img-text {
  background-color: #777777;
  color: white;
  text-align: center;
  width: 100%;
  font-size: 12px;
}
.mxw-active {
  box-shadow: 0 100px 100px 100px rgba(82, 81, 81, 0.555) inset;
}
.mxw-fa-i {
  cursor: pointer;
  text-align: center;
  color: white;
  margin-top: -100px;
}
.btn-simple-this {
  position: fixed;
  z-index: 90000;
  margin-top: 130px;
  margin-left: 120px;
}

.modal-footer {
  border-top: 1px solid rgba(182, 181, 181, 0.459);
}

.modal-content {
  border-radius: 0;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.1);
  border: 0;
  padding: 0 10px 0 10px;
}
.urlImg {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.urlImg * {
  margin: 10px;
}
</style>