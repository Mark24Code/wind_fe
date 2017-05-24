<template>
    <div class="status-footer">
        <span v-if="status === READY">准备</span>
        <span v-if="status === PLAYING">加油啊</span>
        <a v-if="status === PASS" v-on:click.prevent.stop="reset" href>再战</a>
        <span class="elapsed">{{ elapsedMs }} 秒</span>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import { STATUS } from '@/vuex/modules/memory_game/store/statusEnum';

export default {

    data() {
        return STATUS;
    },

    computed: {
        ...mapGetters([
            'status',
            'elapsedMs'
        ])
    },

    methods: {
        ...mapActions([
            'reset'
        ])
    }

}
</script>

<style scoped>
.status-footer{
    position: relative;
    margin-top: 10px;
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}
a{
    text-decoration: none;
}
.elapsed{
    position: absolute;
    right: 10px;
    font-size: 15px;
    font-weight: normal;
}
</style>
