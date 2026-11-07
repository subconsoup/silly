StartupEvents.registry('item', event => {

    event.create('sea_salt_ice_cream')
    .displayName('Sea Salt Ice Cream')
    .maxStackSize(24)
    .texture('kubejs:item/sea_salt_ice_cream')
    .food(food => {
    food
      .nutrition(3)
      .saturation(0.2) // This value does not directly translate to saturation points gained
      // The real value can be assumed to be:
      // min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
      .alwaysEdible()
      .fastToEat()
      .effect('minecraft:regeneration', 100, 0, 1)
    })
})
