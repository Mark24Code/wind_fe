<template>
    <div class="lab-page">
        <div class="lab-gridlist">
            <mu-grid-list class="gridlist-demo">
                <mu-sub-header>实验室</mu-sub-header>
                <mu-grid-tile v-for="(project, index) in lab_projects" :key="index" >
                    <img :src="project.image" @click="goProjectPage(project.link)" />
                    <span slot="title">{{project.title}}</span>
                    <span slot="subTitle">by <b>{{project.author}}</b></span>
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
            lab_projects: [{
                image: '/static/labs/sudoku.png',
                title: 'Sudoku',
                author: 'Vuejs',
                link:'lab_sudoku'
            },{
                image: '/static/labs/memory_game.png',
                title: '记忆大师',
                author: 'Vuejs',
                link:'lab_memory_game'
            },{
                image: '/static/labs/sudoku.png',
                title: 'Sudoku',
                author: 'Vuejs',
                link:'lab_sudoku'
            },{
                image: '/static/labs/sudoku.png',
                title: 'Sudoku',
                author: 'Vuejs',
                link:'lab_sudoku'
            }]
        }
    },
    methods: {
        goProjectPage(link){
            console.log('>>>>>>');
            this.$router.push({name:link});
        }
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
