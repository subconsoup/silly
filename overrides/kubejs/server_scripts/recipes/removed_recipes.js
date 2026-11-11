ServerEvents.recipes(event => {
    event.remove({ id: 'nomansland:bundle' })
    event.remove({ id: 'nomansland:integration/farmersdelight/bundle' })

    event.remove({ id: 'caverns_and_chasms:bundle' })
})
