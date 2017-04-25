import * as PIXI from 'pixi.js';

export class Game {
    private app: PIXI.Application;
    private bunny: PIXI.Sprite;

    constructor() {
        this.app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
        document.body.appendChild(this.app.view);

        this.bunny = PIXI.Sprite.fromImage("img/bunny.png");
        this.bunny.anchor.set(0.5);
        this.bunny.x = this.app.renderer.width / 2;
        this.bunny.y = this.app.renderer.height / 2;
        this.app.stage.addChild(this.bunny);

        this.app.ticker.add((delta: number): void => {
            this.bunny.rotation += 0.1 / delta;
        });
    }
}

new Game();