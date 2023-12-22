import { isListicleLike } from '../modules/isListicleLike';

export class Article {
    static removalThreshold = 50;

    constructor(node, title) {
        this.node = node;
        this.title = title;
        this.score = isListicleLike(title) ? 100 : 0;
        this.removed = false;
    }

    shouldRemove() {
        if (!this.score || this.removed) return false;
        return this.score >= Article.removalThreshold;
    }

    removeFromDOM() {
        this.node.parentNode?.removeChild(this.node);
        this.removed = true;
    }
}
