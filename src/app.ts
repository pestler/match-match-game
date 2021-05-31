import { Game } from "./components/game/game";
import { ImageCategoryModel } from "./models/image-category-model"

export class App {

    private readonly game: Game;

    constructor(private readonly rootElement: HTMLElement) {
        this.game = new Game;
        this.rootElement.appendChild(this.game.element);
    }
    async start() {
        const res = await fetch('./images.json')
        const categories = ImageCategoryVodel[] = await res.json();
        const images = cat.images.map((name) => `${cat.category}/${name}`);
        this.game.newGame(images);
    }
}
