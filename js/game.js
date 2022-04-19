/* global phaser */

// Created by: maliksalem1
// Created on April 2022
// This is the config file for the phaser3 program

//* Game scene */
const config = { 
  type: Phaser.Auto,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  // set background color
  backgroundcolor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autocenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
console.log(game)