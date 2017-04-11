<template>
    <div id="app">
        <div class="z-nav ui container">
            <div class="ui secondary pointing menu">
                <router-link class="item" :to="{name:'home'}">首页</router-link>
                <router-link class="item" :to="{name:'blogs'}">博客</router-link>
                <router-link class="item" :to="{name:'lab'}">实验室</router-link>
                <router-link class="item" :to="{name:'about'}">关于</router-link>
            </div>
            <div class="setting-menu">
                <div class="ui dropdown">
                    <i class="content icon"></i>
                    <div class="menu">
                        <router-link v-if="!token" class="item" :to="{name:'login'}">登录</router-link>
                        <router-link v-if="token" class="item" :to="{name:'dashboard'}"><i class="bar chart icon"></i></router-link>
                        <router-link v-if="token" class="item" :to="{name:'blogList'}"><i class="newspaper icon"></i></router-link>
                        <router-link v-if="token" class="item" :to="{name:'setting'}"><i class="setting icon"></i></router-link>
                        <div v-if="token" class="item" @click="loginOut">退出</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="z-content ui container">
            <router-view></router-view>
        </div>
        <div class="ui container">
            <div class="z-footer">
                <span class="icp">
              <i class="copyright icon"></i> 2017 All rights reserved.
            </span>
                <span class="info">
              <i class="rocket icon"></i> Vue &amp; Flask 强劲驱动
            </span>
            </div>
        </div>
    </div>
</template>
<script>
import semantic from '../semantic/dist/semantic.min.js'
import '../semantic/dist/semantic.min.css'

export default {
    name: 'app',
    mounted() {
        $('.ui.dropdown').dropdown();

    },
    data() {
        return {}
    },
    computed: {
        token() {
            console.log('TOKEN:', this.$store.getters.user_token)
            return this.$store.getters.user_token
        }
    },
    methods: {
        loginOut() {
            let self = this
            self.$store.dispatch("user_clear")
            self.$router.push({
                name: 'home'
            })
        }
    }
}
</script>
<style lang='less'>
#app .setting-menu {
    position: fixed;
    right: 50px;
    top: 10px;
    z-index: 9999;
}

.z-nav {}

.z-content {
    margin-top: 40px;
    min-height: 420px;
}

.z-footer {
    margin-top: 30px;
    border-top: 1px dashed #ddd;
    padding: 5px 0 30px 0;
    .icp {
        color: #999;
        float: left;
    }
    .info {
        color: #999;
        float: right;
    }
}
</style>
