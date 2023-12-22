// import { assert } from 'https://deno.land/std@0.209.0/assert/mod.ts';
import { Article } from '../models/article.js';
import assert from 'assert';

describe('article', () => {
    const listicles = [
        'Top 7 Featured DEV Posts of the Week',
        '12 Senior Developer Traits Juniors Need To Master 🔥',
        'Database Review: Top Five Missing Features from Database APIs',
        '🚨 🚀 25 Reasons (You MUST Know!!) Why *Some* “Listicles” Are BAD for dev.to 🤯 👿 🚨',
    ];

    const other = [
        '0 to 1, working in a startup as Software Engineer',
        'AI Log #4: Vectorization & NumPy in Machine Learning',
        'HTML can do this? Part 1',
    ];

    describe('listicles', () => {
        for (const title of listicles) {
            it(title, () => {
                const article = new Article(null, title);
                article.populateScore();
                assert(article.shouldRemove());
            });
        }
    });

    describe('other', () => {
        for (const title of other) {
            it(title, () => {
                const article = new Article(null, title);
                article.populateScore();
                assert(!article.shouldRemove());
            });
        }
    });
});
