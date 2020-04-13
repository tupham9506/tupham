import Vue from 'vue';
import TWindow from '@components/t-window';
import Shortcut from '@components/shortcut';
import Author from '@components/author';

Vue.component('t-window', TWindow);
Vue.component('shortcut', Shortcut);

// Global program
Vue.component('author', Author);
