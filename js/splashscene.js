/* global phaser */

// Created by: maliksalem1
// Created on April 2022
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }

  init (data) {
    this.camras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Splash Scene')
  }

  create (data) {
  }
  
  update (time, delta) {
  }
}
  
export default SplashScene 
  