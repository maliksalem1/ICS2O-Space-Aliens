/* global phaser */

// Created by: maliksalem1
// Created on April 2022
// This is the config file for the phaser3 program

// scene import statements
import SplashScene from "./splashscene.js"
import TitleScene from "./titlescene.js"

// create the new scene
const splashscene = new SplashScene()
const titlescene = new TitleScene()

/**
 * Start Phaser Game
 */
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
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
// console.log(game)

// load scene
// NOTE: remeber any "key" is global and CAN NOT be reused
game.scene.add('splashscene', splashScene)
game.scene.add('titlescene', titleScene)

// start title
game.scene.start("splashscene")