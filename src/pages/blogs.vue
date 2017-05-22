<template>
    <div class="blogs">
        <div class="ui stackable three column grid">
            <blogCard
              v-for="(blog,index) in blogs"
              v-bind:card_info="blog"
              v-bind:index="index"
              :key="blog.id">
            </blogCard>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import {DOMAIN} from '@/config.js'
import blogCard from '@/pages/blogCard.vue'
export default {
    name: 'blogs',
    data() {
        return {
            blogs:[]
        }
    },
    methods: {},
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
        blogCard
    }
}
</script>
<style></style>
