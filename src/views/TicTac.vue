<template>
	<div>
		<div class="details">
			<h2>TIC TAC TOE</h2>
		</div>
		<div v-if="!tictac.matchEnd">
	        <div class="message">
	            Next turn: {{tictac.xIsNext ? 'X' : 'O'}}
	        </div>
	    </div>
	    <div v-else>
	        <div :class="tictac.gameStatusColor"> 
	            {{tictac.gameStatus}}
	        </div>
	    </div>

		<Grid :frozen="tictac.frozen"/>
        <button class="restart" @click="handleRestart">Restart</button>

        <h3>Score Board</h3>
        <h3>Match #{{tictac.match.count}}</h3>
        <h3>{{tictac.timer.hour}} : {{tictac.timer.min}} : {{tictac.timer.sec}}</h3>
        <div class="scoreBoard">
            <span>X <br>{{tictac.wins.X}} wins</span>
            <span>Draw<br>{{tictac.match.draw}}</span>
            <span>O <br>{{tictac.wins.O}} wins</span>
        </div>
	</div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import {RESET_GAME} from '@/store/action.types';
    import Grid from '@/components/TicTac/Grid.vue';

	export default {
        components: {
            Grid: Grid
        },
        name: 'TicTac',
        computed: {
            ...mapState({                
                tictac: state => state.tictac
            })
        },
		methods: {
            ...mapActions({
                resetGame: `tictac/${RESET_GAME}`
            }),
            /**
             * Handle the restart event
             */
            handleRestart : function(){
                this.resetGame();

                Event.$emit('resetGame');
            }
		}
	}
</script>