//Vue核心
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource' //网络请求组件
import VueRouter from 'vue-router' //路由
import Vuex from 'vuex' //全局状态管理

//外部引用
require('!style-loader!css-loader!less-loader!../css/index.css') //全局样式
import '../js/locales/bootstrap-datetimepicker.zh-CN.js' //bootstrap时间控件，中文支持

//引入核心功能
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

//组件以及路由
// import mxwLoading from './mxw-loading.vue'
import mxw404 from './mxw-404.vue'
// import mxwWell from './mxw-well.vue'
import mxwEcharts from './mxw-echarts.vue'
import mxwContentList from './mxw-content-list.vue'
import mxwExaList from './mxw-exa-list.vue'
import mxwClassifyList from './mxw-classify-list.vue'
import mxwLaunchForm from './mxw-launch-form.vue'
import mxwArticleList from './mxw-article-list.vue'
import mxwArticleAdd from './mxw-article-add.vue'
import mxwArticleClassifyList from './mxw-article-classify-list.vue'
import mxwDisList from './mxw-dis-list.vue'
import mxwMemberList from './mxw-member-list.vue'
import mxwAdminList from './mxw-admin-list.vue'
import mxwRoleList from './mxw-role-list.vue'
import mxwDepartmentList from './mxw-department-list.vue'
import mxwEntryList from './mxw-entry-list.vue'
import mxwNoticeList from './mxw-notice-list.vue'
import mxwSystem from './mxw-system.vue'

//路由
const router = new VueRouter({
    // mode: 'history',
    routes: [{
        path: '/',
        redirect: 'home'
    }, {
        name: '404', //404页面
        path: '/404',
        component: mxw404
    }, {
        name: 'home',
        path: '/home',
        component: mxwEcharts
    }, {
        name: '1list',
        path: '/1list',
        component: mxwContentList
    }, {
        name: '0list',
        path: '/0list',
        component: mxwExaList
    }, {
        name: '2list',
        path: '/2list',
        component: mxwClassifyList
    }, {
        name: '3form',
        path: '/3form',
        component: mxwLaunchForm
    }, {
        name: '4list',
        path: '/4list',
        component: mxwArticleList
    }, {
        name: '5add',
        path: '/5add',
        component: mxwArticleAdd
    }, {
        name: '6addClassify',
        path: '/6addClassify',
        component: mxwArticleClassifyList
    }, {
        name: '7disList',
        path: '/7disList',
        component: mxwDisList
    }, {
        name: '8memberList',
        path: '/8memberList',
        component: mxwMemberList
    }, {
        name: '9adminList',
        path: '/9adminList',
        component: mxwAdminList
    }, {
        name: '10roleList',
        path: '/10roleList',
        component: mxwRoleList
    }, {
        name: '11departmentList',
        path: '/11departmentList',
        component: mxwDepartmentList
    }, {
        name: '12entryList',
        path: '/12entryList',
        component: mxwEntryList
    }, {
        name: '13noticeList',
        path: '/13noticeList',
        component: mxwNoticeList
    }, {
        name: '14system',
        path: '/14system',
        component: mxwSystem
    }, {
        path: '*',
        redirect: '404'
    }],
    //监听路由切换，触发滚动事件
    //其实就是当切换路由的时候，将页面滚动到顶部
    scrollBehavior(to, from, savedPosition) {
        if (to.name === 'search') {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        x: 0,
                        y: 0
                    })
                }, 50)
            })
        } else {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        x: 0,
                        y: 0
                    })
                }, 160)
            })
        }
    }
})

//vuex 全局注册
const store = new Vuex.Store({
    //严格模式要在生产环境关掉
    strict: true,
    state: {
        // apiPath: 'http://localhost:8080/api',
        // apiPath: 'http://moxiaowei.com/api',
        // apiPath: '/api',
        // isLogin: false,
        // userInfo: {},
        // disUpdate: 0
        alert: [],
    },
    mutations: {
        // changeLoginState(state, isLogin) {
        //     state.isLogin = isLogin;
        // },
        // changeUserInfo(state, userInfo) {
        //     state.userInfo = userInfo;
        // },
        // disUpdateEvent(state) {
        //     state.disUpdate++;
        // }
        addAlert(state, obj) {
            state.alert.push(obj);
        },
        delAlert(state) {
            state.alert.splice(0, 1);
        },
        delAlert2(state, index) {
            state.alert.splice(index, 1);
        }
    },
    actions: {
        addAlert(context, obj) {
            context.commit('addAlert', obj);
            var timer = setTimeout(() => {
                context.commit('delAlert');
                clearInterval(timer);
            }, 6180);

        },
        delAlert2(context, index) {
            context.commit('delAlert2', index);
        }
    }
})

//过滤器
//格式化时间戳
Vue.filter('dateFormat', function(millisecond) {

    var formatCol = function(v) {
        if (v < 10) {
            v = "0" + v
        }
        return v;
    }
    var date = new Date();
    date.setTime(millisecond);
    return date.getFullYear() + "-" +
        formatCol(date.getMonth() + 1) + "-" +
        formatCol(date.getDate()) + " " +
        formatCol(date.getHours()) + ":" +
        formatCol(date.getMinutes()) + ":" +
        formatCol(date.getSeconds())
})

//计算时间间隔
Vue.filter('timeDis', function(millisecond) {

    var date = new Date();
    var diff = (date.getTime() - millisecond) / 1000; //秒

    if (diff < 60) {
        return diff.toFixed(1) + '秒前';
    } else if (diff / 60 < 60) {
        return (diff / 60).toFixed(1) + '分钟前';
    } else if (diff / 60 / 60 < 24) {
        return (diff / 60 / 60).toFixed(1) + '小时前';
    } else if (diff / 60 / 60 / 24 < 7) {
        return (diff / 60 / 60 / 24).toFixed(1) + '天前';
    } else {
        return '';
    }
})

var apiPath = 'http://www.moxiaowei.com/api';
// var apiPath = 'http://localhost:8080/api';

//全局混入，
//为了避免命名冲突，请把名字起的长一点，加上前缀
Vue.mixin({
    data() {
        return {
            mxwGetImg: this.mxwPartial(this.mxwAjax, apiPath + '/blogList/1'),
        }
    },
    methods: {
        mxwCheckPrice(price) {
            return /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/.test(price)
        },
        mxwPartial(fn, ...presetArgs) {
            return function partiallyApplied(...laterArgs) {
                return fn(...presetArgs, ...laterArgs);
            }
        },
        mxwCurry(fn, arity = fn.length) {
            return (function nextCurried(prevArgs) {
                return function curried(...nextArgs) {
                    var args = [...prevArgs, ...nextArgs];
                    if (args.length >= arity) {
                        return fn(...args);
                    } else {
                        return nextCurried(args);
                    }
                }
            })([])
        },
        mxwAjax(url, data, ...cb) {
            var cber = [...cb];
            $.ajax({
                url: url,
                data: data,
                success: cber[0],
                error: cber[1]
            })
        }
    }
})

//注册Vue
var app = new Vue({
    router: router,
    store,
    el: '#app',
    render: h => h(App),
})