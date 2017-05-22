<template>
    <div class="blog-card-cont column">
        <router-link :to="{name:'blog',params:{blog_id:card_info.id}}" class="blog-card ui card">
            <div class="image">
                <img :src="card_info.cover">
            </div>
            <div class="content">
                <a class="header">{{card_info.title}}</a>
                <div class="description">
                    {{card_info.summary}}
                </div>
            </div>
            <div class="extra content">
                <div class="meta">
                    <span v-for="tag in card_info.tags">#{{tag}}</span>
                </div>
                <div class="meta">
                    <span class="z-tag">
                        <span class="date">{{card_info.updated}}</span>
                    </span>
                    <span class="z-tag right">
                        <i class="unhide icon"></i>{{card_info.reads_count}}
                        <i class="comment icon"></i>{{card_info.comments_count}}
                    </span>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'blogCard',
    props: {
        index: {
            type: Number,
            default: function() {
                return 0
            }
        },
        card_info: {
            type: Object,
            default: function() {
                return {
                    cover: "",
                    title: "",
                    updated: "",
                    summary: "",
                    reads_count: "",
                    comments_count:"",
                    tags:[]
                }
            }
        }
    }
}
</script>
<style lang="less">
.right{
    float: right;
}
</style>
