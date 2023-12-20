import { containsAnyword, containsEmojis, containsKeywordX, containsXKeyword, countEmojis } from './identify.js';

export function generateScore(title) {
    const result = _aggregateResult(title);
    const score = _calculateScore(result);

    return score;
}

export function _calculateScore(result) {
    // Completely arbitrary scoring system, but it works

    let score = 0;
    if (result?.xKeyword) score += 50;
    if (result?.keywordX) score += 40;
    if (result?.anyword) score += 20;
    if (result?.emojis) {
        score += 10;
        if (result?.emojiCount) score += 5 * result.emojiCount;
    }

    return score;
}

export function _aggregateResult(title) {
    const contains = {
        xKeyword: containsXKeyword(title),
        keywordX: containsKeywordX(title),
        anyword: containsAnyword(title),
        emojis: containsEmojis(title)
    };

    if (contains.emojis) {
        contains.emojiCount = countEmojis(title);
    }
    return contains;
}
