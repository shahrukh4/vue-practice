<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/tic-tac-toe">Tic Tac Toe</router-link>
        </div>
        <router-view />
    </div>
</template>
