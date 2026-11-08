ServerEvents.tags('item', event => {
    event.remove('minecraft:dyeable', 'minecraft:bundle')
    
    event.add('c:foods/cheese', [
        'brewinandchewin:flaxen_cheese_wedge',
        'brewinandchewin:scarlet_cheese_wedge'
    ])

})
