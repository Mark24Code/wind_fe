<template>
    <div class="blog-page">
        <VueMarkdown v-if="blog.content">{{blog.content}}</VueMarkdown>
        <div class="blog-info content">
            <div class="meta">
                <span v-for="tag in blog.tags">#{{tag}}</span>
            </div>
            <div class="meta">
                <span class="blog-tag">
                        <span class="date">{{blog.updated}}</span>
                </span>
<!--                 <span class="blog-tag">
                    <i class="unhide icon"></i>{{blog.reads_count}}
                    <i class="comment icon"></i>{{blog.comments_count}}
                </span> -->
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import {
    DOMAIN
} from '@/config.js';
import VueMarkdown from 'vue-markdown';
export default {
    name: 'blog',
    data() {
        return {
            blog:""
        }
    },
    methods: {},
    mounted() {
        let self = this
        axios.get(DOMAIN + '/api/v1.0/blog', {
            params: {
                blog_id: self.$route.params.blog_id
            },
            headers: {
                Authorization: "JWT " + self.$store.getters.user_token
            }
        }).then(resp => {
            if (resp.status == 200) {
                self.blog = resp.data.blog
            }
        }).catch(e => {
            console.log(e)
        })
    },
    components: {
        VueMarkdown
    }
}
</script>
<style lang="scss">
.blog-page{
    margin: 20px;
    img{
        width: 80%;
        display: block;
        margin: 0 auto;
    }
}
.blog-info{
    margin-top: 20px;
    border-top: 1px dashed #ddd;
    padding:10px 0;
    color:#614e3c;
}
.right{
    float: right;
}
code {
    color: #f66;
}
</style>
