/* global Phaser */

// Copyright (c) 2022 maliksalem1
//
// Created by: maliksalem1
// Created on: Apr 2022
// This is the Title Scene

/**
 * This class is the Title Scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "titleScene" })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = {
      font: "200px Times",
      fill: "#fde4b9",
      align: "center",
    }
  }

  /**
   * This method is the init.
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * This method is the preload.
   */
  preload() {
    console.log("Title Scene")
    this.load.image("titleSceneBackground", "assets/aliens_screen_image.jpg")
  }

  /**
   * This method is the create.
   */
  create(data) {
    this.titleSceneBackgroundImage = this.add
      .sprite(0, 0, "titleSceneBackground")
      .setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add
      .text(1920 / 2, 1080 / 2 + 350, "Space Aliens", this.titleSceneTextStyle)
      .setOrigin(0.5)
    // pass
  }

  /**
   * This method is the update.
   */
  update(time, delta) {
    if (time > 6000) {
      this.scene.switch("menuScene")
    }
    // pass
  }
}

export default TitleScene