import { SET_MARK, SET_TURN, RESET_GAME, MATCH_DRAW, DECLARE_WINNER } from '@/store/action.types';
import { SET_NEW_MARK, SET_NEXT_TURN, SET_NEW_GAME, SET_MATCH_DRAW, SET_WINNER } from '@/store/mutation.types';

export const namespaced = true;

/**
 * State related to TicTacToe
 * @type {Object}
 */
export const state = {
	wins : {
        'X'  : 0,
        'O'  : 0
    },
    grid        : Array(9).fill(null),
    turn        : 'X',
    match       : {
        count : 1,
        draw  : 0
    },
    timer : {
        sec   : '00',
        min   : '00',
        hour  : '00',
    },
    frozen      : Array(9).fill(false),
    xIsNext     : true,
    matchEnd    : false,
    gameStatus  : '',
    gameStatusColor : '',
    mark: ''
};

/**
 * Mutations related to TicTacToe
 * @type {Object}
 */
export const mutations = {
	[SET_NEW_MARK](state, data) {
		state.xIsNext = !state.xIsNext;
	    state.grid[data.index] =  data.nextTurn;
	},
	[SET_NEXT_TURN](state){
		state.turn = (state.xIsNext ? 'X' : 'O');
	},
    [RESET_GAME](state){
        //Increment match no.
        if(state.matchEnd){
            state.match.count++;
        }

        state.grid       = Array(9).fill(null),
        state.turn       = 'X',
        state.xIsNext    = true,
        state.matchEnd   = false,
        state.gameStatus = '';
    },
    [SET_MATCH_DRAW](state){
        state.match.draw++;
        state.matchEnd = true;
        state.gameStatus = `Sorry it's a draw!`;
        state.gameStatusColor = 'statusDraw';
    },
    [SET_WINNER](state){
        state.matchEnd = true;
        state.gameStatusColor = 'statusWin';
        state.gameStatus = `${state.turn} Won!`;

        state.wins[state.turn]++;
    }
};

/**
 * Actions related to TicTacToe
 * @type {Object}
 */
export const actions = {
	[SET_MARK](context, payload) {
		context.commit(SET_NEW_MARK, payload);
	},
	[SET_TURN](context) {
		context.commit(SET_NEXT_TURN);
	},
    [RESET_GAME](context) {
        context.commit(SET_NEW_GAME);
    },
    [MATCH_DRAW](context){
        context.commit(SET_MATCH_DRAW);
    },
    [DECLARE_WINNER](context){
        context.commit(SET_WINNER);
    }
};