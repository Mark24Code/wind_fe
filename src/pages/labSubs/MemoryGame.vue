<template>
    <div class="game-panel">
        <!-- 组装上、中、下三个部分组件 -->
        <Dashboard></Dashboard>
        <Chessboard></Chessboard>
        <Status></Status>
    </div>
</template>
<script>
import Dashboard from './MemoryGameComponents/dashboard/Dashboard';
import Chessboard from './MemoryGameComponents/card/Chessboard';
import Status from './MemoryGameComponents/footer/PlayStatus';

import {
    mapActions
} from 'vuex';

import {
    STATUS
} from '@/vuex/modules/memory_game/store/statusEnum';

export default {
    data(){
        return {

        }
    },
    methods: {
        ...mapActions([
            'updateStatus',
            'reset'
        ])
    },

    created() {
        this.updateStatus(STATUS.READY);
        this.reset();
    },

    components: {
        Dashboard,
        Chessboard,
        Status
    }
}
</script>
<style scoped>
.game-panel {
    width: 450px;
    height: 670px;
    border: 4px solid #BDBDBD;
    border-radius: 2px;
    background-color: #faf8ef;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

@media screen and (max-width: 450px) {
    .game-panel {
        width: 100%;
        height: 100%;
        justify-content: space-around;
    }
}
</style>
