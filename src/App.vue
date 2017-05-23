<template>
    <div id="app">
        <mu-appbar title="MARK24">
            <mu-icon-button icon="menu" slot="left" @click="toggle_sidebar()" />
            <mu-icon-menu icon="account_circle" slot="right">
                <mu-menu-item v-if="!token" title="登录" @click="login"/>
                <mu-menu-item v-if="token" title="登出" @click="logOut"/>
            </mu-icon-menu>
        </mu-appbar>
        <router-view></router-view>
        <!-- siderbar -->
        <mu-drawer :open="sidebar_open" :docked="sidebar_docked" @close="toggle_sidebar(true)">
            <mu-appbar title="" @click.native="sidebar_open = false"></mu-appbar>
            <mu-list>
                <div v-if="token.length>0">
                <router-link :to="{name:'dashboard'}">
                    <mu-list-item title="仪表盘" @click.native="sidebar_open = false" />
                </router-link>
                <router-link :to="{name:'blogList'}">
                    <mu-list-item title="管理列表" @click.native="sidebar_open = false" />
                </router-link>
                <router-link :to="{name:'setting'}">
                    <mu-list-item title="设置" @click.native="sidebar_open = false" />
                </router-link>
                </div>
                <mu-divider/>
                <router-link :to="{name:'home'}">
                    <mu-list-item title="首页" @click.native="sidebar_open = false" />
                </router-link>
                <router-link :to="{name:'blogs'}">
                    <mu-list-item title="博客" @click.native="sidebar_open = false" />
                </router-link>
                <router-link :to="{name:'lab'}">
                    <mu-list-item title="实验室" @click.native="sidebar_open = false" />
                </router-link>
                <router-link :to="{name:'about'}">
                    <mu-list-item title="关于" @click.native="sidebar_open = false" />
                </router-link>
                <mu-divider/>
                <mu-icon-button href="https://github.com/mark24code">
                    <i class="fa fa-github"></i>
                </mu-icon-button>
                <mu-icon-button href="http://weibo.com/wb2young">
                    <i class="fa fa-weibo"></i>
                </mu-icon-button>
                <mu-icon-button href="https://www.zhihu.com/people/mark24">
                    <i class="fa fa-quote-left"></i>
                </mu-icon-button>
            </mu-list>
        </mu-drawer>
    </div>
</template>
<script>
export default {
    name: 'app',
    mounted() {

    },
    data() {
        return {
            sidebar_open: false,
            sidebar_docked: false
        }
    },
    computed: {
        token() {
            // console.log('TOKEN:', this.$store.getters.user_token)
            return this.$store.getters.user_token;
        }
    },
    methods: {
        toggle_sidebar(flag) {
            this.sidebar_open = !this.sidebar_open;
        },
        login(){
            this.$router.push({
                name: 'login'
            });
        },
        logOut() {
            let self = this;
            self.$store.dispatch("user_clear");
            self.$router.push({
                name: 'home'
            });
        }
    }
}
</script>
<style lang='scss'>
</style>
