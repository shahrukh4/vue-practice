<template>
	<td class="cell" :class="frozen" @click="handleMark(index)">{{mark}}</td>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
	import {SET_MARK, SET_TURN, MATCH_DRAW, DECLARE_WINNER} from '@/store/action.types';

	export default {
		data(){
			return {
				mark   : '',
				frozen : '',
				marked : false,
			}
		},
		name: 'Cell',
		props: ['index'],
	    methods: {
	    	...mapActions({
	    		setMark 	 : `tictac/${SET_MARK}`,
				setTurn 	 : `tictac/${SET_TURN}`,
				setWinner    : `tictac/${DECLARE_WINNER}`,
				setMatchDraw : `tictac/${MATCH_DRAW}`
	    	}),
			handleMark: function(index){
                if(!this.marked && !this.tictac.matchEnd){
                	let turn = this.handleTurn();

	                this.mark 	= turn;
	                this.frozen = 'frozen';
	                this.marked = true;
					
					this.setMark({
	                	index 	 : index,
	                	nextTurn : turn
	                });

	                this.checkWinner();
	            }
			},
			handleTurn : function(){
                this.setTurn()

                return this.tictac.turn;
            },
            checkWinner : function(){
	            const winConditions = [
	                [0, 1, 2],
	                [3, 4, 5],
	                [6, 7, 8],
	                [0, 3, 6],
	                [1, 4, 7],
	                [2, 5, 8],
	                [0, 4, 8],
	                [2, 4, 6]
	            ];

	            for(let i=0; i < winConditions.length; i++){
	                const [a, b, c] = winConditions[i];

	                //If someone win
	                if( ( this.tictac.grid[a] != null &&  (this.tictac.grid[a] == this.tictac.grid[b]) ) && ( this.tictac.grid[a] != null &&  (this.tictac.grid[a] == this.tictac.grid[c]) ) ){
	                    this.setWinner();

	                    return;                                  
	                }
	            }

	            //If match drawn
	            if(!this.tictac.grid.includes(null)){
	                this.setMatchDraw();
	            }

	            return null;
	        }
	    },
	    computed: {
		    ...mapState({
		      	tictac: state => state.tictac
		    })
		},
		created()  {
			Event.$on('resetGame', () => {
				this.mark 	= '';
				this.frozen = '';
                this.marked = false;
			});
		}
	}

</script>


