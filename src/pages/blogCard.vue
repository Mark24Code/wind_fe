<template>
    <router-link class="blog-card-cont" :to="{name:'blog',params:{blog_id:card_info.id}}" >
        <mu-card>
          <mu-card-media title="Image Title" subTitle="Image Sub Title">
            <img src="card_info.cover" />
          </mu-card-media>
          <mu-card-title title="Content Title" subTitle="Content Title"/>
          <mu-card-text>
            {{card_info.summary | max_len('20')}}
          </mu-card-text>
          <mu-card-actions>
            <mu-flat-button label="Action 1"/>
            <mu-flat-button label="Action 2"/>
          </mu-card-actions>
        </mu-card>
    </router-link>
</template>
<script>
import filters from '@/filters';
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
                    comments_count: "",
                    tags: []
                }
            }
        }
    },
    filters
}
</script>
<style lang="scss">
.blog-card-cont{
    .cover{

    }
}
</style>
