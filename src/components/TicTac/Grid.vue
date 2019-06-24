<template>        
	<table class="grid">
        <tr>
            <Cell :index="0"></Cell>                
            <Cell :index="1"></Cell>                
            <Cell :index="2"></Cell>                    
        </tr>
        <tr>
            <Cell :index="3"></Cell>
            <Cell :index="4"></Cell>
            <Cell :index="5"></Cell>
        </tr>
        <tr>
            <Cell :index="6"></Cell>
            <Cell :index="7"></Cell>
            <Cell :index="8"></Cell>
        </tr>
    </table>
</template>

<script>
    import Cell from './Cell.vue';

    export default {
        components: {
            'Cell': Cell
        },
        name: 'Grid'
    }
</script>