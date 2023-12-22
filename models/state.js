export class State {
    constructor() {
        this.on = true;
        this.processed = [];
        this.removed = new Set([]);
    }

    findIndex(article) {
        return this.processed.findIndex(a => a.title === article.title);
    }

    processOne(article) {
        if (this.findIndex(article) === -1) {
            this.processed.push(article);
        }
    }

    processMany(articles) {
        if (!this.on) return;
        for (const article of articles) {
            if (article.shouldRemove()) {
                article.removeFromDOM();
                this.removed.add(article.title);
            }
            this.processed.push(article);
        }
    }
}
