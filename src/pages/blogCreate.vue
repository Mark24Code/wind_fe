<template>
    <div class="blogCreate">
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab value="edit_tab" title="编辑" @click="activeEditor"/>
            <mu-tab value="preview_tab" title="预览" @click="activePreview"/>
        </mu-tabs>
        <div id="editor"  v-if="activeTab === 'edit_tab'">
            <textarea v-model="content" rows="20"></textarea>
        </div>
        <div id="preview" v-if="activeTab === 'preview_tab'">
            <VueMarkdown>{{preview_content}}</VueMarkdown>
        </div>
        <div class="btns-cont">
            <mu-raised-button label="取消" class="btn" @click="cancelCreate"/>
            <mu-raised-button label="保存" class="btn"  @click='saveCreate' primary/>
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
        background-color: #f4f4f4;
        font-size: 14px;
        font-family: 'Monaco', courier, monospace;
        padding: 20px;
        width: 100%;
    }
    #editor{
        padding:20px;
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
