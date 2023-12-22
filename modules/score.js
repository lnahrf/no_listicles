import { isListicleLike } from './isListicleLike.js';

export function generateScore(title) {
    return isListicleLike(title) ? 100 : 0;
}
