import Vue from 'vue';
import TWindow from '@components/t-window';
import Shortcut from '@components/shortcut';
import Author from '@components/author';
import Icon from '@components/icon';

Vue.component('t-window', TWindow);
Vue.component('shortcut', Shortcut);
Vue.component('icon', Icon);

// Global program
Vue.component('author', Author);
