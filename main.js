const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload('./assets/dino_run.png');
ASSET_MANAGER.queueDownload('./assets/dino_jump.png');

ASSET_MANAGER.downloadAll(() => {
  const canvas = document.getElementById('gameWorld');
  const ctx = canvas.getContext('2d');

  gameEngine.addEntity(new Dino(gameEngine));

  gameEngine.init(ctx);

  gameEngine.start();
});
