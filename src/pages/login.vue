<template>
    <div class="login ui">
        <form class="z-login-form ui form">
            <div class="inline field">
                <label><i class="large user icon"></i></label>
                <input type="text" name="username" v-model="username" placeholder="用户名">
            </div>
            <div class="inline field">
                <label><i class="large lock icon"></i></label>
                <input type="password" name="password" v-model="password" placeholder="密码">
            </div>
            <div class="field">
                <div class="ui checkbox">
                    <input type="checkbox" tabindex="0" class="hidden">
                    <label>记住我</label>
                </div>
            </div>
            <button class="ui basic button" type="button" @click="loginSubmit">登录</button>
        </form>
        <div v-if="warn_msg.msg" class="ui bottom attached message" :class="warn_msg.type">
            <i class="close icon"></i>
            <i class="warning circle icon"></i>
            {{warn_msg.msg}}
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Base64 from 'base64util'
// import md5Hex from 'md5-hex'
import SparkMD5 from 'spark-md5'
import {DOMAIN} from '../config.js'
export default {
    name: 'login',
    data() {
        return {
            username:"",
            password:"",
            password_hash:"",
            warn_msg:{
                type:'',
                msg:''
            }
        }
    },
    methods: {
        loginSubmit(){
            let self = this
            self.password_hash = SparkMD5.hash(self.username+self.password)
            console.log('u:',self.username)
            console.log('p:',self.password)
            console.log('hash:',self.password_hash)
            axios.get(DOMAIN+'/api/v1.0/token',{
                headers:{
                    Authorization:"Basic "+Base64.encode(self.username+':'+self.password_hash)
                }
            }).then(resp=>{
                if(resp.status==200){
                    let self = this
                    let token = resp.data.token
                    self.$store.dispatch("user_token_set",token)
                    self.$router.push({
                        name: 'home'
                    })
                }
            }).catch(e=>{
                console.log(e)
                this.warn_msg={
                    type:'warning',
                    msg:'服务错误'
                }
            })
        }
    },
    mounted() {

    },
    components: {}
}
</script>
<style lang="less">
.z-login-form{
    padding-bottom: 20px;
}
</style>
