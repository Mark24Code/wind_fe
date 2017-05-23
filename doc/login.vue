<template>
    <div class="blogCreate">
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
            <button class="ui basic button" @click="cancelCreate">取消</button>
            <button class="ui green basic button" @click='saveCreate'>保存</button>
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
    name: 'blogCreate',
    data() {
        return {
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
        saveCreate() {
            let self = this
            axios.post(DOMAIN + '/api/v1.0/blog', {
                content: self.content
            }, {
                headers: {
                    Authorization: "JWT " + self.$store.getters.user_token
                }
            }).then(resp => {
                if (resp.status == 200) {
                    console.log('保存成功')
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
        cancelCreate() {
            this.content = ""
            this.preview = ""
            this.$router.push({
                name: 'blogList'
            })
        }
    },
    mounted() {},
    components: {
        VueMarkdown
    }
}
</script>
<style lang="scss">
.blogCreate {
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
