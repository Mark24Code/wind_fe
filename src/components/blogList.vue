<template>
    <div class="ui container">
        <div class="ui basic buttons">
            <router-link class="ui button" :to="{name:'blogCreate'}">
                <i class="edit icon"></i>写作
            </router-link>
        </div>
        <table class="blogList ui celled table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>标题</th>
                    <th>时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(blog,index) in blogs"
                    :key="blog.id"
                >
                    <td>{{blog.id}}</td>
                    <td>{{blog.title}}</td>
                    <td>{{blog.updated}}</td>
                    <td>
                        <button class="ui tiny basic button" @click="editBlog(blog.id)">编辑</button>
                        <button class="ui tiny basic button" @click="deleteBlog(blog.id,index)">删除</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="3">
                        <div class="ui right floated pagination menu">
                            <a class="icon item">
                                <i class="left chevron icon"></i>
                            </a>
                            <a class="item">1</a>
                            <a class="item">2</a>
                            <a class="item">3</a>
                            <a class="item">4</a>
                            <a class="icon item">
                                <i class="right chevron icon"></i>
                            </a>
                        </div>
                    </th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
import {DOMAIN} from '../config.js'
export default {
    name: 'blogList',
    data() {
        return {
            blogs:[]
        }
    },
    methods: {
        editBlog(blog_id){
            console.log(blog_id)
            let self = this

            self.$router.push({
                name: 'blogEdit',
                params:{blog_id:blog_id}
            })

        },
        deleteBlog(blog_id,index){
            let self = this
            console.log(blog_id)
            axios.delete(DOMAIN+'/api/v1.0/blog',{
                params:{
                    blog_id:blog_id
                },
                headers:{
                    Authorization:"JWT "+self.$store.getters.user_token
                }
            }).then(resp=>{
                if (resp.status == 200) {
                    self.blogs.splice(index, 1)
                    console.log('删除成功')
                }
            }).catch(e=>{
                console.log(e)
            })
        }
    },
    mounted() {
        let self = this
        axios.get(DOMAIN + '/api/v1.0/blogs', {
            headers: {
                Authorization: "JWT " + self.$store.getters.user_token
            }
        }).then(resp => {
            if (resp.status == 200) {
                console.log(resp.data.blogs)
                self.blogs = resp.data.blogs
            }
        }).catch(e => {
            console.log(e)
        })
    },
    components: {

    }
}
</script>
<style>
</style>
