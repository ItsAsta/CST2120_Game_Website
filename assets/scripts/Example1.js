class Example1 extends Phaser.Scene {
    constructor() {
        super({key:"Example1"});
    }

    // preload() {
    //     this.load.image('GFS', 'assets/resources/logo.png');
    // }
    //
    // create() {
    //     this.image = this.add.image(400, 300, 'GFS');
    //     this.input.keyboard.on('keyup_D', function () {
    //         this.image.x += 10;
    //     },this);
    //
    //     this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    //
    //     this.input.on('pointerdown', function (event) {
    //         this.image.x = event.x;
    //         this.image.y = event.y;
    //     }, this);
    //
    //     this.input.keyboard.on('keyup_P', function (event) {
    //         var physicsImage = this.physics.add.image(this.image.x, this.image.y, "GFS");
    //         physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100, 100), -300);
    //     }, this);
    //
    //     this.input.keyboard.on('keyup', function (event) {
    //         if (event.key == "2") {
    //             this.scene.start("Example2");
    //         }
    //     }, this);
    // }
    //
    // update(delta){
    //     if (this.key_A.isDown) {
    //         this.image.x--;
    //     }
    // }

    preload ()
    {
        this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create ()
    {
        this.add.image(400, 300, 'sky');

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }


}