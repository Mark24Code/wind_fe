<template>
    <div class="blogEdit">
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab value="edit_tab" title="编辑" @click="activeEditor"/>
            <mu-tab value="preview_tab" title="预览" @click="activePreview"/>
        </mu-tabs>
        <div id="editor"  v-if="activeTab === 'edit_tab'">
            <TipCircle></TipCircle>
            <textarea v-model="content" rows="20"></textarea>
        </div>
        <div id="preview" v-if="activeTab === 'preview_tab'">
            <VueMarkdown>{{preview_content}}</VueMarkdown>
        </div>
        <div class="btns-cont">
            <mu-raised-button label="取消" class="btn" @click="cancelEdit"/>
            <mu-raised-button label="保存" class="btn"  @click='saveEdit' primary/>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import VueMarkdown from 'vue-markdown';
import TipCircle from '@/components/tipCircle';
import {
    DOMAIN
} from '@/config.js'
export default {
    name: 'blogEdit',
    data() {
        return {
            activeTab: 'edit_tab',
            content: '',
            preview_content: ''
        }
    },
    computed: {

    },
    methods: {
        handleTabChange (val) {
          this.activeTab = val;
        },
        activeEditor(){

        },
        activePreview() {
            this.preview_content = this.content;
        },
        saveEdit() {
            let self = this
            axios.put(DOMAIN + '/api/v1.0/blog', {
                blog_id: self.blog_id,
                content: self.content
            }, {
                headers: {
                    Authorization: "JWT " + self.$store.getters.user_token
                }
            }).then(resp => {
                if (resp.status == 200) {
                    console.log('更新成功');
                    self.content = ""
                    self.preview = ""
                    self.$router.push({
                        name: 'blogList'
                    })
                }
            }).catch(e => {
                let resp = e.response
            })
        },
        cancelEdit() {
            this.content = ""
            this.preview = ""
            this.$router.push({
                name: 'blogList'
            })
        }
    },
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
                let blog = resp.data.blog
                self.blog_id = blog.id
                self.content = blog.content
                self.preview = blog.content
            }
        }).catch(e => {
            console.log(e)
        })
    },
    components: {
        VueMarkdown,
        TipCircle
    }
}
</script>
<style lang="scss">
.blogEdit {

    img{
        width: 80%;
        display: block;
        margin: 0 auto;
    }

    textarea {
        border: none;
        resize: none;
        outline: none;
        background-color: #f4f4f4;
        font-size: 14px;
        font-family: 'Monaco', courier, monospace;
        padding: 20px;
        width: 100%;
    }
    #editor{
        padding:20px;
        position: relative;
    }
    #preview {
        min-height: 380px;
        margin: 20px;
    }
    .btns-cont{
        display: flex;
        justify-content: flex-end;
    }
    .btn{
        margin: 12px;
    }
}

code {
    color: #f66;
}
</style>
