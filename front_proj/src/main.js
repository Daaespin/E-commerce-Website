import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import InformationPage from './components/InformationPage.vue';
import ChampionsPage from './components/ChampionsPage.vue';
import GamemodesPage from './components/GamemodesPage.vue';

const routes = [
    { path: '/', component: LandingPage },
    { path: '/information', component: InformationPage },
    { path: '/champions', component: ChampionsPage },
    { path: '/gamemodes', component: GamemodesPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');
