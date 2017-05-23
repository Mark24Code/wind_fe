<template>
    <div>
        <mu-float-button mini icon="casino" class="float-button" @click="openPopTips" />
        <mu-drawer right :open="rightPopup" @close="openPopTips()">
            <mu-appbar title="书写约定" />
            <mu-list>
                <mu-list-item>
                    <p>第一个自然段落自动成为标题。</p>
                    <p>![cover](/path/to/img)将作为封面。</p>
                </mu-list-item>
                <mu-list-item @click.native="rightPopup = false" title="点我关闭" />
            </mu-list>
        </mu-drawer>
    </div>
</template>
<script>
import blogCard from '@/pages/blogCard.vue';
export default {
    name: 'tipCircle',
    data() {
        return {
            rightPopup: false,
            activeTab: 'edit_tab',
            content: "",
            preview_content: ''
        }
    },
    methods: {
        closePopTips() {
            this.rightPopup = false;
        },
        openPopTips() {
            this.rightPopup = true;
        }
    }
}
</script>
<style lang="scss" scope>
.float-button {
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>
