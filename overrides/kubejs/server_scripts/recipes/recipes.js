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

    event.shaped(
        Item.of('blockbox:copper_bars_sliding_door', 3),
        [
            'BB ',
            'BB ',
            'BB '
        ],
        {
            B: 'caverns_and_chasms:copper_bars'
        }
    )
    event.shaped(
        Item.of('blockbox:exposed_copper_bars_sliding_door', 3),
        [
            'BB ',
            'BB ',
            'BB '
        ],
        {
            B: 'caverns_and_chasms:exposed_copper_bars'
        }
    )
    event.shaped(
        Item.of('blockbox:weathered_copper_bars_sliding_door', 3),
        [
            'BB ',
            'BB ',
            'BB '
        ],
        {
            B: 'caverns_and_chasms:weathered_copper_bars'
        }
    )
    event.shaped(
        Item.of('blockbox:oxidized_copper_bars_sliding_door', 3),
        [
            'BB ',
            'BB ',
            'BB '
        ],
        {
            B: 'caverns_and_chasms:oxidized_copper_bars'
        }
    )

    event.shaped(
        Item.of('blockbox:waxed_copper_bars_sliding_door', 3),
        [
            'BB ',
            'BB ',
            'BB '
        ],
        {
            B: 'caverns_and_chasms:waxed_copper_bars'
        }
    )
    event.shaped(
        Item.of('blockbox:waxed_exposed_copper_bars_sliding_door', 3),
        [
            'BB ',
            'BB ',
            'BB '
        ],
        {
            B: 'caverns_and_chasms:waxed_exposed_copper_bars'
        }
    )
    event.shaped(
        Item.of('blockbox:waxed_weathered_copper_bars_sliding_door', 3),
        [
            'BB ',
            'BB ',
            'BB '
        ],
        {
            B: 'caverns_and_chasms:waxed_weathered_copper_bars'
        }
    )
    event.shaped(
        Item.of('blockbox:waxed_oxidized_copper_bars_sliding_door', 3),
        [
            'BB ',
            'BB ',
            'BB '
        ],
        {
            B: 'caverns_and_chasms:waxed_oxidized_copper_bars'
        }
    )

})
