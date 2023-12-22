import { generateScore } from "../modules/score.js";

export class Article {
    static removalThreshold = 50;

    constructor(node, title){
        this.node = node;
        this.title = title;
        this.score = null;
        this.removed = false;
    }
    
    populateScore(){
        this.score = generateScore(this.title);
    }

    shouldRemove(){
        if(!this.score || this.removed) return false;
        return this.score >= Article.removalThreshold;
    }

    removeFromDOM(){
        this.node.parentNode?.removeChild(this.node);
        this.removed = true;
    }
}
