BlockEvents.rightClicked(event => {
    if (event.block.hasTag('nocturne:unwaxable')) {
        if (event.player.mainHandItem.id === 'minecraft:honeycomb' || event.player.offHandItem.id === 'minecraft:honeycomb') {
            event.cancel()
        }
    }   
})
