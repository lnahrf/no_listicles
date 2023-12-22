import { State } from '../models/state.js';
import { observeDOM } from './parser.js';

(async function () {
    const state = new State();
    observeDOM(state);
    if (chrome?.runtime) {
        chrome.runtime.onMessage.addListener((_, __, reply) =>
            reply({ domUrl: window.location.href, removed: Array.from(state.removed) })
        );
    }
})();
