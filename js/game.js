/* global phaser */

// Created by: maliksalem1
// Created on April 2022
// This is the config file for the phaser3 program

// scene import statements
import SplashScene from './js/splashScene.js'

// our game scene
const splashScene = new SplashScene()

//* Game Scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// load scenes 
// NOTE: remember any "key" is global and CAN NOT be reused
game.secne.add('splashScene', splashScene)

// start title
game.scene.start('splashScene')
