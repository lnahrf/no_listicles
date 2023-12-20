import { ANYWORD_PATTERN, EMOJI_PATTERN, KEYWORDX_PATTERNS, XKEYWORD_PATTERNS } from '../enums/blacklist.js';

export function containsXKeyword(title) {
    const lc = title.toLowerCase();
    for (const pattern of XKEYWORD_PATTERNS) {
        if (pattern.test(lc)) return true;
    }
    return false;
}
export function containsKeywordX(title) {
    const lc = title.toLowerCase();
    for (const pattern of KEYWORDX_PATTERNS) {
        if (pattern.test(lc)) return true;
    }
    return false;
}

export function containsAnyword(title) {
    const lc = title.toLowerCase();
    return ANYWORD_PATTERN.test(lc);
}

export function containsEmojis(title) {
    const lc = title.toLowerCase();
    return EMOJI_PATTERN.test(lc);
}

export function countEmojis(title) {
    const lc = title.toLowerCase();
    return lc.match(EMOJI_PATTERN)?.length || 0;
}
