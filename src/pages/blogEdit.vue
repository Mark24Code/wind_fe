<template>
    <div class="blogEdit">
        <div class="ui top attached tabular menu">
            <a class="item" :class="editorActive" @click="activeEditor">编辑</a>
            <a class="item" :class="previewActive" @click="activePreview">预览</a>
        </div>
        <div id="editor" v-if="editorShow" class="v-editor ui bottom attached segment">
            <textarea v-model="content" rows="20"></textarea>
        </div>
        <div id="preview" v-if="previewShow" class="v-preview ui bottom attached segment">
            <VueMarkdown>{{preview_content}}</VueMarkdown>
        </div>
        <div class="z-btns">
            <button class="ui basic button" @click="cancelblogEdit">取消</button>
            <button class="ui green basic button" @click='saveblogEdit'>保存</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import VueMarkdown from 'vue-markdown'
import {
    DOMAIN
} from '@/config.js'
export default {
    name: 'blogEdit',
    data() {
        return {
            blog_id:'',
            content: '',
            current_view: 'editor', //editor,preview,
            preview_content: ''
        }
    },
    computed: {
        editorActive() {
            return this.current_view == 'editor' ? 'active' : ''
        },
        previewActive() {
            return this.current_view == 'preview' ? 'active' : ''
        },
        editorShow() {
            return this.current_view == 'editor' ? true : false
        },
        previewShow() {
            return this.current_view == 'preview' ? true : false
        },
    },
    methods: {
        activeEditor() {
            this.current_view = 'editor'
        },
        activePreview() {
            this.current_view = 'preview'
            this.preview_content = this.content
        },
        saveblogEdit() {
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
                    console.log('更新成功')
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
        cancelblogEdit() {
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
        VueMarkdown
    }
}
</script>
<style lang="scss">
.blogEdit {
    textarea {
        border: none;
        resize: none;
        outline: none;
        background-color: #f6f6f6;
        font-size: 14px;
        font-family: 'Monaco', courier, monospace;
        padding: 20px;
        width: 100%;
    }
    #preview {
        min-height: 380px;
    }
}

code {
    color: #f66;
}
</style>
