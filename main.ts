basic.forever(function () {
    if (ModuleWorld_Digital.IR(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enObstacle.Obstacle)) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
    }
})
