import { Article } from '../models/article.js';

export function observeDOM(state) {
    function parseDOMArticles() {
        const stories = document.getElementsByClassName('crayons-story');
        const scrollable = document.getElementsByTagName('article');
        const featured = document.getElementsByClassName('crayons-story--featured');

        const articles = [...stories, ...scrollable, ...featured]
            .map(n => {
                const title = extractTitle(n);
                if (!title) return null;
                return new Article(n, title);
            })
            .filter(n => n);

        state.processMany(articles);
    }

    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    const observer = new MutationObserver(parseDOMArticles);

    observer.observe(document, {
        subtree: true,
        attributes: true
    });
}

export function extractTitle(node) {
    const titleNode = node.querySelector('.crayons-story__title');
    return titleNode?.innerText;
}
