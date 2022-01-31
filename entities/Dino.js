class Dino {
  constructor(game) {
    this.game = game;

    this.animationStates = {
      run: new Animator({
        spritesheet: ASSET_MANAGER.getAsset('./assets/dino_run.png'),
        xStart: 0,
        yStart: 0,
        width: 680,
        height: 680,
        frameCount: 8,
        frameDuration: 0.08,
      }),
      jump: new Animator({
        spritesheet: ASSET_MANAGER.getAsset('./assets/dino_jump.png'),
        xStart: 0,
        yStart: 0,
        width: 680,
        height: 680,
        frameCount: 8,
        frameDuration: 0.08,
      }),
    };

    this.state = {
      animationState: 'run',
    };

    this.x = 0;
    this.y = 0;
    this.speed = 200;
  }

  update() {
    this.x += this.speed * this.game.clockTick;

    if (this.x > 1024) this.x = 0;
  }

  draw(ctx) {
    this.animationStates[this.state.animationState].drawFrame(
      this.game.clockTick,
      ctx,
      this.x,
      this.y,
      0.4
    );
  }
}
