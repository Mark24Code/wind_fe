<template>
    <div class="login-page">
        <mu-text-field icon="account_box" hintText="用户名" v-model="username" />
        <br/>
        <mu-text-field icon="lock" hintText="密码" type="password" v-model="password" />
        <br/>
        <div class="btns-cont">
            <mu-checkbox label="记住" class="demo-checkbox" />
            <br/>
            <mu-raised-button label="登录" class="demo-raised-button" primary @click="loginSubmit" />
        </div>
        <mu-toast v-if="toast" :message="warn_msg" @close="hideToast"/>
    </div>
</template>
<script>
import axios from 'axios'
import Base64 from 'base64util'
// import md5Hex from 'md5-hex'
import SparkMD5 from 'spark-md5'
import {
    DOMAIN
} from '@/config.js'
export default {
    name: 'login',
    data() {
        return {
            username: "",
            password: "",
            password_hash: "",
            warn_msg: '',
            toast: false
        }
    },
    methods: {
        showToast () {
          this.toast = true
          if (this.toastTimer) clearTimeout(this.toastTimer)
          this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
        },
        hideToast () {
          this.toast = false
          if (this.toastTimer) clearTimeout(this.toastTimer)
        },
        loginSubmit() {
            let self = this
            self.password_hash = SparkMD5.hash(self.username + self.password)
            axios.get(DOMAIN + '/api/v1.0/token', {
                headers: {
                    Authorization: "Basic " + Base64.encode(self.username + ':' + self.password_hash)
                }
            }).then(resp => {
                if (resp.status == 200) {
                    let self = this;
                    let token = resp.data.token;
                    self.$store.dispatch("user_token_set", token);
                    self.$router.push({
                        name: 'home'
                    });
                }else{
                    self.warn_msg = "服务错误";
                    self.toast = true;
                }

            }).catch(e => {
                this.warn_msg = "服务错误";
                self.toast = true;
            })
        }
    },
    mounted() {

    },
    components: {}
}
</script>
<style lang="scss">
.login-page {
    padding: 20px;
    .btns-cont {
        padding-left: 15px;
    }
}
</style>
