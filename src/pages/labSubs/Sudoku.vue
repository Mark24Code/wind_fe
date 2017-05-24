<template>
    <div id="sudoku-demo" class="sudoku-page">
        <h1>惰性数独</h1>
        <p>一直不断尝试按shuffle 按钮，直到你win.</p>
        <mu-raised-button label="Shuffle" class="demo-raised-button" primary @click="shuffle"/>
        <transition-group name="cell" tag="div" class="container">
            <div v-for="cell in cells" :key="cell.id" class="cell">
                {{ cell.number }}
            </div>
        </transition-group>
    </div>
</template>
<script>
export default {
    name: 'sudoku',
    data() {
        return {
            cells: Array.apply(null, {
                    length: 81
                })
                .map(function(_, index) {
                    return {
                        id: index,
                        number: index % 9 + 1
                    }
                })
        }
    },
    methods: {
        shuffle: function() {
            this.cells = _.shuffle(this.cells)
        }
    },
    components: {
    }
}
</script>
<style lang="scss" scope>
.sudoku-page{
    padding: 20px;
}
.container {
    display: flex;
    flex-wrap: wrap;
    width: 238px;
    margin-top: 10px;
    margin:20px auto;
}

.cell {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25px;
    height: 25px;
    border: 1px solid #aaa;
    margin-right: -1px;
    margin-bottom: -1px;
}

.cell:nth-child(3n) {
    margin-right: 0;
}

.cell:nth-child(27n) {
    margin-bottom: 0;
}

.cell-move {
    transition: transform 1s;
}
</style>
