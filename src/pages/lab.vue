<template>
    <div class="lab-page">
        <div class="lab-gridlist">
            <mu-grid-list class="gridlist-demo">
                <mu-sub-header>实验室</mu-sub-header>
                <router-link>

                </router-link>
                <mu-grid-tile v-for="(tile, index) in list" :key="index">
                    <img :src="tile.image" />
                    <span slot="title">{{tile.title}}</span>
                    <span slot="subTitle">by <b>{{tile.author}}</b></span>
                </mu-grid-tile>
            </mu-grid-list>
        </div>
    </div>
</template>
<script>
import Sudoku from '@/pages/labSubs/Sudoku.vue';
export default {
    name: 'lab',
    data() {
        return {
            list: [{
                image: '/static/labs/camera.jpg',
                title: 'Breakfast',
                author: 'Myron',
                link:"{name:'lab_sudoku'}"
            }, {
                image: '/static/labs/camera.jpg',
                title: 'Burger',
                author: 'Linyu'
            }, {
                image: '/static/labs/camera.jpg',
                title: 'Camera',
                author: 'ruolin'
            }, {
                image: '/static/labs/camera.jpg',
                title: 'Hats',
                author: 'kakali'
            }, {
                image: '/static/labs/camera.jpg',
                title: 'Honey',
                author: 'yuyang'
            }, {
                image: '/static/labs/camera.jpg',
                title: 'Morning',
                author: 'mokayi'
            }, {
                image: '/static/labs/camera.jpg',
                title: 'Vegetables',
                author: 'NUyyyyyyy'
            }, {
                image: '/static/labs/camera.jpg',
                title: 'water',
                author: 'TDDyyyyyyy'
            }]
        }
    },
    methods: {

    },
    mounted() {},
    components: {
        Sudoku
    }
}
</script>
<style lang='scss' scope>
.lab-page {
    img{
        display: block;
    }
    padding: 20px;
    .lab-gridlist {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
}
</style>
