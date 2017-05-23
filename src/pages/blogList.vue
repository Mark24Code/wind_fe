<template>
    <div class="blog-list-page">
        <div class="btns">
            <router-link :to="{name:'blogCreate'}">
                <mu-raised-button label="写作" primary/>
            </router-link>
        </div>
        <div>
            <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :height="height" :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable" :selectable="selectable" :showCheckbox="showCheckbox">
                <mu-thead slot="header">
                    <mu-tr>
                        <mu-th tooltip="ID" class="tr-id">ID</mu-th>
                        <mu-th tooltip="名称">标题</mu-th>
                        <mu-th tooltip="状态">更新时间</mu-th>
                        <mu-th tooltip="操作">操作</mu-th>
                    </mu-tr>
                </mu-thead>
                <mu-tbody>
                    <mu-tr v-for="(blog,index) in blogs" :key="index" :selected="blog.selected">
                        <mu-td class="td-id">{{blog.id}}</mu-td>
                        <mu-td>{{blog.title}}</mu-td>
                        <mu-td>{{blog.updated}}</mu-td>
                        <mu-td>
                            <button class="ui tiny basic button" @click="editBlog(blog.id)">编辑</button>
                            <button class="ui tiny basic button" @click="deleteBlog(blog.id,index)">删除</button>
                        </mu-td>
                    </mu-tr>
                </mu-tbody>
            </mu-table>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import {
    DOMAIN
} from '@/config.js'
export default {
    name: 'blogList',
    data() {
        return {
            blogs: [],
            fixedHeader: true,
            fixedFooter:false,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            showCheckbox: false,
            height: 'auto'
        }
    },
    methods: {
        editBlog(blog_id) {
            console.log(blog_id)
            let self = this

            self.$router.push({
                name: 'blogEdit',
                params: {
                    blog_id: blog_id
                }
            })

        },
        deleteBlog(blog_id, index) {
            let self = this
            console.log(blog_id)
            axios.delete(DOMAIN + '/api/v1.0/blog', {
                params: {
                    blog_id: blog_id
                },
                headers: {
                    Authorization: "JWT " + self.$store.getters.user_token
                }
            }).then(resp => {
                if (resp.status == 200) {
                    self.blogs.splice(index, 1)
                    console.log('删除成功')
                }
            }).catch(e => {
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
<style lang="scss">
.blog-list-page{
    .btns{
        margin: 20px 20px;
    }
    .tr-id,.td-id{
        width: 60px;
    }
}

</style>
