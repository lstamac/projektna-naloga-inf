import Phaser from 'phaser';
import tile0Img from './assets/tile0.png';
import tile1Img from './assets/tile1.png';
import tile2Img from './assets/tile2.png';
import tile3Img from './assets/tile3.png';
import tile4Img from './assets/tile4.png';
import boardImg from './assets/azul_board.png';

var kocke4;

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('board', boardImg);
        this.load.image('tile0', tile0Img);
        this.load.image('tile1', tile1Img);
        this.load.image('tile2', tile2Img);
        this.load.image('tile3', tile3Img);
        this.load.image('tile4', tile4Img);
    }
      
    create ()
    {
        const board = this.add.image(0, 0, 'board').setOrigin(0, 0).setScale(2);
        
        function kockaRandom () {
            switch (Math.floor(Math.random()*5)) {
                case 0:
                    return('tile0');
                case 1:
                    return('tile1');
                case 2:
                    return('tile2');
                case 3:
                    return('tile3');
                case 4:
                    return('tile4');
            }
        }

        for (var i = 0; i < 20; i++)
        {
            // id = layer[i] - 1;

            var raznik = 100;
            var x = (i*raznik)%(raznik*10);
            var y = Math.floor(i/10)*raznik;

            var kocka = this.add.image(x+10, y+10, kockaRandom()).setOrigin(0, 0).setScale(1).setInteractive();

            kocka.on('pointerover', function () {

                this.setTint(0x00ff00);
        
            });
        
            kocka.on('pointerout', function () {
        
                this.clearTint();
        
            });
        
            this.input.setDraggable(kocka);
        
            this.input.on('dragstart', function (pointer, gameObject) {
        
                gameObject.setTint(0xff0000);
        
            });
        
            this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        
                gameObject.x = dragX;
                gameObject.y = dragY;
        
            });
        
            this.input.on('dragend', function (pointer, gameObject) {
        
                gameObject.clearTint();
        
            });

        }


        // switch (Math.floor(Math.random()*5)) {
        //     case 0:
        //         const tile0 = this.add.image(400, 150, 'tile0');
        //         break;
        //     case 1:
        //         const tile1 = this.add.image(400, 150, 'tile1');
        //         break;
        //     case 2:
        //         const tile2 = this.add.image(400, 150, 'tile2');
        //         break;
        //     case 3:
        //         const tile3 = this.add.image(400, 150, 'tile3');
        //         break;
        //     case 4:
        //         const tile4 = this.add.image(400, 150, 'tile4');
        //         break;
        // }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1000,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);
