ServerEvents.recipes(event => {
    // Adds a shaped crafting recipe for Sea Salt Ice Cream
    event.shaped(
        Item.of('kubejs:sea_salt_ice_cream', 1),
        [
            ' SM',
            'ICS',
            'PI '
        ],
        {
            M: '#c:milk',
            C: 'hearthandharvest:salt',
            S: 'minecraft:sugar',
            P: 'minecraft:stick',
            I: 'minecraft:ice'
        }
    )
})
