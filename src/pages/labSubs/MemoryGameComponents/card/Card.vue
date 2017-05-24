<template>
    <div class="container" v-on:click="flip">
        <div class="card" v-bind:class="{ flipped: option.flipped }">
            <img class="front" v-if="option.cardName === 'flask'" src="/static/labs/memory_game/flask.png"/>
            <img class="front" v-if="option.cardName === 'git'" src="/static/labs/memory_game/git.png"/>
            <img class="front" v-if="option.cardName === 'github'" src="/static/labs/memory_game/github.png"/>
            <img class="front" v-if="option.cardName === 'js'" src="/static/labs/memory_game/js.png"/>
            <img class="front" v-if="option.cardName === 'node'" src="/static/labs/memory_game/node.png"/>
            <img class="front" v-if="option.cardName === 'python'" src="/static/labs/memory_game/python.png"/>
            <img class="front" v-if="option.cardName === 'vue'" src="/static/labs/memory_game/vue.png"/>
            <img class="front" v-if="option.cardName === 'webpack'" src="/static/labs/memory_game/webpack.png"/>

            <img class="back" src="/static/labs/memory_game/back.png"/>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {

    props: {
        option: {
            type: Object,
            default () {
                return {
                    flipped: false,
                    cardName: ''
                };
            }
        }
    },

    methods: {
        ...mapActions([
            'flipCard'
        ]),
        flip() {
            if(this.option.flipped){
                return;
            }
            this.flipCard(this.option);
            this.$emit('flipped', this.option);
        }
    },

    components: {}
}
</script>

<style scoped>
.container{
    width: 100px;
    height: 121px;
    margin-right: 3px;
    cursor: pointer;
    position: relative;
    perspective: 800px;
}

.card {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
}

.card.flipped {
    transform: rotateY( 180deg );
}

.card img {
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    backface-visibility: hidden;
}

.card .back {
    background: #f4f4f4;
    transform: rotateY( 0deg );
}

.card .front {
    background: #f4f4f4;
    transform: rotateY( 180deg );
}

@media screen and (max-width: 450px) {
    .container{
        width: 82px;
        height: 90px;
        margin-right: 1px;
    }
}

@media screen and (max-width: 380px) {
    .container{
        width: 85px;
        height: 102px;
        margin-right: 1px;
    }
}

@media screen and (max-width: 360px) {
    .container{
        width: 70px;
        height: 84px;
        margin-right: 1px;
    }
}
</style>
