controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d c c . 
        . . c b b c c c 5 5 b c c . . . 
        . . c c c c c d 5 5 c . . . . . 
        `)
    if (true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c c b 5 5 b d d d c . 
            . . . . . c d 5 5 b b c c c . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 5 5 5 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c b 5 5 b d d d c c . 
            . . . . c d 5 5 b b c c c . . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 5 5 5 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c . 
            . c c c c c b b d d d d d d c c 
            . . . c c 5 5 b 5 5 d d d d d c 
            . . . . c b 5 5 b b c c c c c c 
            . . . . c c c c c c . . . . . . 
            . . . . . c b b b c . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c c 3 3 b b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c c 
            . . . c b c c b 5 5 b c c c . . 
            . . . c c c d 5 5 b c . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d c c . 
            . . c b b c c c 5 5 b c c . . . 
            . . c c c c c d 5 5 c . . . . . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . c d 5 5 5 5 5 5 b 1 b b c c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 b . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c c d d b 5 5 d c c c c . . . 
        . . . c c b 5 5 c c c b b c . . 
        . . . . . c 5 5 d c c c c c . . 
        `)
    if (true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c 5 5 5 f 1 5 5 5 5 5 c 
            . . . c 5 5 5 5 f f 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
            . . c d 5 5 5 5 5 5 b 1 b b c c 
            . . c d d d 5 5 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 5 5 5 b . 
            . c c d d d d b 5 5 c b b c . . 
            c d c d d d d b b 5 5 c b b c . 
            c d d d d d d d d c c c c c c . 
            . c d d d b 5 5 d c c c c . . . 
            . . c c c b 5 5 b c c c c c . . 
            . . . . c b 5 5 d c b b b c . . 
            `,img`
            . . . . . . . c c c c c . . . . 
            . . . . . . c 5 5 5 5 5 c c . . 
            . . . . . c 5 5 f 1 5 5 5 5 c . 
            . . . . c 5 5 5 f f 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 b 1 b b c c 
            . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 b 5 5 5 5 c . 
            . . c d d d d b 5 5 c b b c . . 
            c c c d d d d b b 5 5 c b b c . 
            c d d d d d d d d c c c c c c . 
            . c d d d b 5 5 b c c c . . . . 
            . . c c c b b 5 5 d c . . . . . 
            . . . . . c c c c c c c . . . . 
            . . . . . . . c b b b c . . . . 
            `,img`
            . . . . . . . c c c c c . . . . 
            . . . . . . c 5 5 5 5 5 c c . . 
            . . . . . c 5 5 f 1 5 5 5 5 c . 
            . . . . c 5 5 5 f f 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 b 1 b b c c 
            . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 5 5 5 5 c 
            . . c d d d 5 5 5 b 5 5 5 5 c . 
            . . c d d d d b 5 5 c b b c . . 
            c c c d d d d b b 5 5 c b b c . 
            c d d d d d d d d c c c c c c . 
            . c c d d d b 5 5 b c c . . . . 
            . . . c c c b b 5 5 d c . . . . 
            . . . . . c c c c c c c . . . . 
            . . . . . . . c b b b c . . . . 
            `,img`
            . . . . . . . c c c c c . . . . 
            . . . . . . c 5 5 5 5 5 c c . . 
            . . . . . c 5 5 f 1 5 5 5 5 c . 
            . . . . c 5 5 5 f f 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 b 1 b b c c 
            . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 5 5 5 5 c 
            . . c d d d 5 5 5 b 5 5 5 5 c . 
            . . c d d d d b 5 5 c b b c . . 
            . c c d d d d b b 5 5 c b b c . 
            c c d d d d d d b b c c c c c . 
            c d d d d d 5 5 b 5 5 c c . . . 
            c c c c c c b b 5 5 b c . . . . 
            . . . . . . c c c c c c . . . . 
            . . . . . . c b b b c . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c 5 5 5 f 1 5 5 5 5 5 c 
            . . . c 5 5 5 5 f f 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 b 1 b b c c 
            . . c d 5 5 5 5 5 5 b b 3 3 c c 
            . . c d d d 5 5 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 5 5 5 b . 
            . . c d d d d b 5 5 c b b c . . 
            c c c d d d d b b 5 5 c b b c . 
            c d d d d d d d d c c c c c c . 
            c c d d d b 5 5 d c c c c . . . 
            . . c c c b 5 5 b c c b c . . . 
            . . . . . c b 5 5 d c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c 5 5 5 f 1 5 5 5 5 5 c 
            . . . c 5 5 5 5 f f 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
            . . c d 5 5 5 5 5 5 b 1 b b c c 
            . . c d d d 5 5 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 5 5 5 b . 
            . . c d d d d b 5 5 c b b c . . 
            c c c d d d d b b 5 5 c b b c . 
            c d d d d d d d d c c c c c c . 
            . c c d d b 5 5 d c c c c . . . 
            . . . c c b 5 5 c c c b b c . . 
            . . . . . c 5 5 d c c c c c . . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.setBackgroundImage(img`
        8fffffffffffffffffffffffff88fffff88ffff8998889999999989988888989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffffffffffffff8fffff88ff9f88889889999999989998888898999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffffffff8fffff889ff9988888988999989998999888889899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffffffff8fff8f8f99ff998888898899988999899988888989999899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffffffffffff8fff8f8fff998998888889889998899989998898898999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffffff8fff8f8fffff98888888888888999889998899889888899999699999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffffffffff8ffff88ffffff99888889988888999988999889988988889998999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffff88fff8ffff8ff889988888998898988998899988998899888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffff8fff8f8ff8ff8888988888899889988899889998899989988889998999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffff8ffffff888888ff88888888888889988998889988999889998999888999999999989999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffff8ffffff88888fff888888888888889999999888998899988999899988899999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffff8ffffff88888ff88888888888888888898899988899889998899989999889998999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffff8fff88f888888f888888888888888888889889998889988999889998989988999999999999899999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffff8ffff88f8888888888888888888888888888988899888998889988999988999899999999899998999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffff8ffff88888888888888888888888889888888998889988899888998899998889989999999998999969999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffff888f88888888888888888888888988888899888999889988899888999888899999999999989999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffff888f888888888888888888888888898888889988899988998889988899998888999999999999899999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffff8fff8888888888888888888888888889888888998889998889988998889999988889999989999998999999999999999999999999999999999999999999999999999999999999999999
        fffffff8fffff8fff88888888888888888888888888888988888899888999888998899888999999889999998999999989999999999999999999999999999999999999999999999999999999999999999
        ffffff8fffff8fff88f888888888888888888888888888898888889988899988899888998899999999999999989999999899999999999999999999999999999999999999999999999999999999999999
        ffffffff8f88fff88ff888888888888888888888888888889888888999889998889988899888999999899999999899999998999989999999999999999999999999999999999999999999999999999999
        fffffff8888ff888ff8888888888888888888888888888888988888899999999888999899988899999988999999998899999999998899999999999999999999999999999999999999999999999999999
        ff8fff888ffff8fff88888888888888888888888888888888888888889999999988999999999888999998899999999988889999999988999999999999999999999999999999999999999999999999999
        fffff888ffff8ff8888888888888888888888888888888888888888889999989998889999988988899999988899999999998899999999999999999999999999999999999999999999999999999999999
        ffff88fffff8ff88888888888888888888888888888888888888888889999888999888999988889999999999888999999998988999999999999999999999999999999999999999999999999999999999
        fff88fff88fff888888888888888888888888888888888888888888888988988899998889999888899999999999889999999998889999999999999999999999999999999999999999999999999999999
        f8888ff88ffff888888888888888888888888888888888888888888888898899888998888999998889999888999998899999999988889899999999999999999999999999899999999999999999999999
        88fff888ffff8888888888888888888888888888888888888888888888889888988898888889999988899988889999988888999999988888999999999899999999999999999999999999999999999999
        8fff88ffff888888888888888888888888888888888888888888888888888988899888988888999998888999888889999888888999999988888898999999888999999999999999999999999999999999
        ff888ffff8888888888888888888888888888888888888888888888888888899888988898888899999988889999888899999888889999999888888899999999998889999999999999999999999999999
        f888ffff88888888888888888888888888888888888888888888888889988888888898888988888999999888899998888899999888899999999888888889999999999988888999999999999888888888
        88ffff8888888888888888888888888888888888888888888888888888998888888889988898888999999998888999998888999999888899999998889999988888999999999899999999998888888888
        8ffff88888888888888888888888888888888888888888888888888888899888888988898899988889999999988988999998889999999988999999999999999999999999999999999999999999999999
        8fff888888888888888888888888888888888888888888888888888888888988888888888999999888999999999988889999998889999999989999989999999999999999999999999999999999999999
        ff88888888888888888888888888888888888888888888888888888888888898888888988999999998889999999999888899999998899999999999999999999999988888889999999999999999999999
        f888888888888888888888888888888888888888888888888888888888888889988888899998899999888899999999998888899999998899999999999999899999999988888888888888888888889999
        6888888888888888888888888888888888888888888888888888888888888888898888888898888999998888999999999998888999999998899999999999999999999999999988888888888888888888
        6888888888888888888888888888888888888888888888888888888888888888888888888888988889999988888899999999988888999999998899999999999999999999999999999999999999999999
        6688888888888888888888888888888888888888888888888888888888888888888888888888899888889999998888999999999988888999999998899999999999999999999999999999999999999999
        66f8888888888888888888888888888888888888888888888888888888888888888888888888889999888899999988888999988999988888999999999999999999999999999899999999999999999999
        66f8888888888888888888888888888888888888888888888888888888888888888888889888888898998888899999988889988889999988999999999999999999999999999999999999999999999999
        66f8888888888888888888888888888888888888888888888888888888888888888888888998888888889998888999999989999888889999999999999888999999998888888888889999999888888899
        66f8888888888888888888888888888888888888888888888888888888888888888888888889988888888999888888999999999999888899999999999988888999999999998899999999888889999999
        66ff888888888888888888888888888888888888888888888888888888888888888888888888899888888889988888889999999999998888899999999999888888899999999999988889888889999999
        66fff88888888888888888888888888888888888888888888888888888888888888888888888889998888888888888888899998889999988888999989999998999999999999999998888888999999999
        666ff88888888888888888888888888888888888888888888888888888888888888888888888888899988888888888888889998888888999988899888889999999999888999999999999888888888889
        666fff8888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888899999899888888999999998888889999999999998888889999999888888888
        666fff6888888888888888888888888888888888888888888888888888888888888888888888888888889988888888888888889888999988998889999998888889999999998888888888888888999999
        666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888899888888888888888888888999998888888999999888888999999999998888889999999999
        666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888888898888888888888888888889999999888888888999888899888888888888889999999999
        666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998899998888888889999989999999999999999999999
        666ff6666f888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999988889999999999999888888888888fff
        666fff66fff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888888888888888888888888888888888888888888fff668
        6666fffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888888888888888888888888888888888888fff666666
        66666fffffff888888888f888888888888888888888888888888888888888888888888888888888888888888888888888888888888899988888888888888888888888888888888888888fffff6666866
        66666fffffff888888f8f6688888888888888888888888888888888888888888888888888888888888888888888888888888888888888899998888888888888888888888888888888888fff886666666
        666666ffff8666888ffff66f8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fff866666666
        666666ffff8666888ffff666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889988888888888888899999996ff66666866
        666666fff68666888ffff666f88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998888888888888888ff8f666666666
        666666ff668666f888fff666ff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998888888888fffff666666668
        6666666f6666666f8866f666ff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff8666666668
        66666666666866fff86666668ff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff6666666666
        6666cc666668fffff86666666ff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff6666666666
        696ccccc6668fff8ff6666666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff8888ffff86666666666
        96cccccc66688fff6f866666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fff8ffff88fff866666666666
        96ccccbb66668ff66ff66666668f88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff8ffff666666666666
        96ccccbb66668ff666f8666666ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ff6fffffffff6666666666666
        96ccccbb66668ff666f8666666ff8ff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f666fffffff66666666666666
        99ccccbbc6666ff6666f666666fff8fff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f666ffffff866666666666666
        99ccccbbb6666ff6666f8666666ffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886888888886668fff66666644466666666
        69ccccbbb6666ff666668666666fff6ff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886668888886666ffff66666444449444466
        666cccbbb66666f666668f66666ff666ff888888888888888888888888888888888888888888888888888888888888888888888888888888ff888888fff888666888888666fff6666666444444444446
        6666cccbb66cccc66666ff666666f666ff88888888888888888888888888888888888888888888888888888888888888888888888888888f6fff888ffff8886668888ff666f666666666442224444446
        666ccccbb6ccccbb6666f6f88666f666ff88888888888888888888888888888888888888888888888888888888888888888888888888886666f888ffffff88666688fff6666666666666442224444446
        66cccccbbcccccbb666666686666f666ff888888888888888888888888888888888888888888888888888888888888888888888888888f666ff888ff88ffff6666f8fff6666666666644442222224466
        6cccbbcbbbbbcccc6666f666666666666ff8888888888888888888888888888888888888888888888888888888888888888888888888f6666f888fff8888ff6666fffff6666666666644222424226666
        6cccbbbbbbbbcccc6668556666666f666ff8888888888888888888888888888888888888888888888888888888888888888888888888f666ff88fff88888886666fff666666666666444244444466666
        6cccbbccbbbccccc66685566666cccf666ff888888888888888888888888888888888888888888888888888888888888888888888888f666ff8fff888888886666886666666666666444244444466666
        6cccccccccccccc66665566666ccccc666fffff886888888888888888888888888888888888888888888888888888888888888888888f666ff8ffff888fff66666866f66666666666644444444466666
        8cccccccccccccc6666566666ccccbbc666fffff666888888888888888888888888888888888888888888888888888888888888ffff6f666f8fffffff8ff666666866f8ff666cbbb666c4b4444466668
        66ccccccccccccc6665566666ccccbbb666fffff6668888f88888888888888888888888888888888888888888888888888888f6666666666fffff8fffff666666666f666666bbbbbc66cbb4444c66668
        666cccccccccccc6665566666cccccbc6666fff866688ffff88888888888888888888888888888888888888888888888888886666666ff666fff6668f66666666666666666bbbcbcc66cbbcccccbc666
        6666ccccccccccc66655666666ccccbb6666ffff66688ffff888888888888888888888888888888888888888888888888888f666666fff666f666668666666666666666686bbbccccc66bbccc5bbbc66
        6666cccccccccc666655666666cccbbb666cccff6668ff68ff888888888888888888888888888888888888888888fffffffff666666ff666f6666666666666666666666666bbccccccccbbccc55bbcc6
        666ccccccccc44446655666666cccbbb6cccccc66668f666ff8888888ff88888888888888888888888888fff88888888888f6666666ff6666666666666f666666666666666cbccccccccccccb55cccc6
        666cccccccc64444444566666cccccbbbbbbbccc6666f666ff8588ff6666888888888ffffffff888888888888fffffffffff6666666f6666666666666668666666666666666cccccccccccccb556ccc6
        666ccccccc64444444445666ccbcccbbbbbbbcccf666f666f6658ff66666f88fff888888888888888888888fffffffffffff6666666f66666666666666666666666666666666ccccccccccccb556cc68
        666ccccccc6644442444446ccbbbcccbbbbbccbb86666666f665ff866666fffffff88888888ffff88ff8888f88888ff88886666666666666666666666866688666699666666666ccccccccccc556cc55
        666ccccccc6644222444444cccbbccccccccccbb666666666655f886666ffffffffffff888888888888ffffff8888888888666656666cccc6666666666668666666996666556666cccccccccc556c556
        666ccccccc64442244244444ccccccccccccccbb666666666655f8f6666fffffffff888888888888888888888888888888866655666cccbbc6666666666666666669996665566666ccccccccc5566556
        666ccccccc64444444244444cccccccccccccccc666666666655f88f6668ffffff8888ffffffffffffffff888888888888ff6655566ccbbbc66ccc66666666666669999995666666cccccccc55665566
        666ccccccc6444444444444ccccccccccccccccc666666666556f88ff666ff88fffffffffffffffffffffff8fffffffffff66655566cccbbc6ccbbcc6666666666699999556666666ccccccc55665566
        666ccccccc64444444422466666cccccccccccccc6666666655666866666ff88ffffffffff88f8888ff8888888ff888ff6666665666cccccbbccbbcc6666666666699999556666666866cccc55c66668
        666ccccccc66444444424566666cccccccccccccc6666666656666666666ff8888ffff555f88f8ffff888888fffffff6666666656666ccccbbcccccc6666666666669999556666666866cccc55c66668
        666cccccc666666444445566666cccccccccccccc66666665566666666666f88666fff5558888888888888888fffff66666666656666cccccccccccc6666666666666696556666666666cccc55c66666
        666ccccccc66666644445566666cccccccccccccc666666655666666666cc6866666ff65f88888fffffffffffffff666666666655666cccccccccccc6666666666666666656666666666cccc55c66666
        666ccccccc66666665565566666cccccccccccccc6666666566666666ccccc866666ff65ffffffffffff888888ff66666666666556666cccccccccc6666666666666666665566666666cccccc5666666
        66cccccccc66666665566666666ccccccc666cc666666666566666666cccbbc6666f66655ffffffffffff8888ff6666666666665666666ccccccccc66ff666666666666665566666666ccccc65566666
        66cccccccc666666665566666666cccccbb666666666666666666666ccccbbbb668f6665568888ffff888fffff666666655666655666666ccccccc66666666666666666666576666666ccccc65566666
        666cccccc6666666665566666666cccccbb666666666666666666666ccccccbb66ff6665566888ffffffffff66666666655666669666996cbbcccc66666422444666666666556666666ccccc55666666
        666cccccc6666666666566666666cccccbb6666666666666666ccccc6ccccccccc6f6665566fffffff8888866666666665566655999999cbbbcccc66644422444466666666556666666cccc655666666
        666cccccc6666666666556666666cccccbbb666665566666666cccbbcccccccccbc666655666888888ffff66666ffffff5566655999999ccbbccc666224222444466666666656666666cccc655666666
        666cccccc66666666665566666666cccccb666666656666666ccccbbccccccccbbbc6665566fffffffffff666ffffffff5566669959996ccccccc644224422444466666666656666666ccccc56666666
        66cccccccc6666666666566666666cccccbb66666655696666ccccbbcccccccccbcc6665566fffffffffff6fffffffff6656666655666cbbbcccc444444424224466666666655666666cccc556666666
        66ccccccc66666666666556666666cccccbb66666655966666cccccbbbccccccccc66665566fffffffffffffffffffff666665665566ccbbbccc6444444224444466666666655666666cccc556666666
        66cccccccc6666666666556666666ccccccb666666559666666ccccbbbccccccccc6666556ff8ffffffffffffffffff6666655665566ccbbcc666444444494444466666666655666666cccc556666666
        666ccccccc6666666666559666666cccccccc66666655444466cccccbccccccc66666665566ffffffffffffffff88866666655665666cbbbccc66644422444444468666666656666996cccc556666666
        666ccccccc6666666666559666666cccccccc666666544444444ccccccccccccf8666666666fffffffffffffffffff66666666666666cbbbccc66664444449444666668666666666999cccc556666bcc
        666ccccccc6666666666556966666ccccccccc666665444442444cccccccccc6f6666666666fffffffffffff88fffff6666666666666cbbcccc6666444444ccccc66686666666666cccccbb556666bbc
        66ccccccc66666666666556666666cccccccccc666654444224444cccccccbbcff666666666ffffffffffffffffffff6666666666666cccccc6666664444cbbbbbc66666666666ccccbbbbbb56b666cc
        66ccccccc66666666666566666666ccccccccccc66665442424444cccccccbbc68666666666fffffffff888888f8ff866666666666666cccc6666666644cbbbbbbcccc6666666cccbbbbbcbb66c666cc
        66ccccccc66666666666566666666ccccccbbbccc6665542422244cccccccbbc66666666666688888ff8888fffffff6666666666666666cccc666666666bbbbcbcccccc666666cccbbbbbccc666c66cc
        66ccccccc66666666665566666666ccccccbbbbcc6666444442244466ccccccc666665666666ffffffffffffffffff666666666666666cccccc6666666bbbccccccccccc66666ccccccccccc666c66cc
        66ccccccc66666666665566666ccccccccccbbbbb6664444444424446cccccbb666665666666fffffffffffffffff6666666666666666cccccc666666bbbbcccccccccccc66666ccccccccccc66666cc
        66ccccccc666666666655666ccccccccccccccbbb6664444444424446cccccbbb666656686666ffffffffffffffff666666666666666cccccccc66666bbbcccccccccccccc66666ccccccccccc6666cc
        66cccccccccccc666665566cccccccccccccccccb666b444444444446cccccbbb6666566f6666f66ffffff88888866666666666666666cccccccc666cbbccccccccccccccc66666cccccccccccc666cc
        66ccccccccccccc6666566ccccccccccccccccccc66ccb444444444666ccccbbb66655666666666666ffffffffff66666666666666666ccccccccccccccccccccccccccccc66666ccccccccccccc66cc
        66ccccccccccccc66665cccccccccccccccccccc666cccc6444444ccc6cccccbb6666566666666f6666fffffffff66666666666666666cccccccccccccccccccccccccccccc666cccccccccccccc66cc
        6cccccccccccccc66666ccccccccccccccccccc6666cccc6644bccccccccccccc8666666666666f66666ffffffff666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccc8
        6cccccccccccccc66666ccccccccccccccccccc666ccccc6666ccccccccccccccf666666666666ff6666ffffffff6666666666666666666ccccccccccccccc6cccccccccccccccccccccccccccccccc8
        `)
    mySprite2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    mySprite.setPosition(10, 44)
    mySprite2.setFlag(SpriteFlag.GhostThroughWalls, true)
    mySprite2.follow(mySprite, 75)
    mySprite2.setPosition(34, 96)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite2.setPosition(156, 115)
    info.changeLifeBy(-1)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.showLongText("Welcome to Maze Chase", DialogLayout.Bottom)
game.showLongText("Press A to continue to the tutorial", DialogLayout.Bottom)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level5`)
game.showLongText("Welcome to the tutorial", DialogLayout.Bottom)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    c 5 5 5 5 5 1 f 5 5 5 c . . . . 
    c 5 5 5 5 5 f f 5 5 5 5 c . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . b 5 5 5 5 5 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c . . 
    . c b b c 5 5 b b d d d d c c c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 5 5 b d d c c . 
    . . c b b c c c 5 5 b c c . . . 
    . . c c c c c d 5 5 c . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(7, 57)
scene.cameraFollowSprite(mySprite)
mySprite.setStayInScreen(false)
game.showLongText("Press W,A,S,D To Move", DialogLayout.Bottom)
