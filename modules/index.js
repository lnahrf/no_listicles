import { State } from '../models/state.js';
import { observeDOM } from './parser.js';

(async function () {
    const state = new State();
    observeDOM(state);
    if (chrome?.runtime) {
        chrome.runtime.onMessage.addListener((_, __, reply) => reply(Array.from(state.removed)));
    }
})();
