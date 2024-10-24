import Phaser from "phaser";

class MainScene extends Phaser.Scene {
    constructor () {
        super('MainScene');
    }

    preload () {
        this.load.image('Background', '/imgs/background.png');
        this.load.spritesheet('Cowboy', '/imgs/CowBoy_1.png', {frameWidth: 64, frameHeight: 64});
    }

    create () {
        this.add.image(700, 375, 'Background').setScale(1);
        this.add.image(500, 500, 'Cowboy').setOrigin(0.5);
    }

    update () {}
}

const config = {
    type: Phaser.AUTO,
    width: 1400,
    height: 750,
    scene: [MainScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    }
};

new Phaser.Game(config);