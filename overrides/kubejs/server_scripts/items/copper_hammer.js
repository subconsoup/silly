ServerEvents.recipes((event) => {
  global.swapInput(event, "manual_labour:copper_hammer", "copper_block", "copper_ingot");

  event.remove({ id: 'manual_labour:exposed_copper_hammer' })
  event.remove({ id: 'manual_labour:weathered_copper_hammer' })
  event.remove({ id: 'manual_labour:oxidized_copper_hammer' })
  event.remove({ id: 'manual_labour:waxed_copper_hammer' })
  event.remove({ id: 'manual_labour:waxed_exposed_copper_hammer' })
  event.remove({ id: 'manual_labour:waxed_weathered_copper_hammer' })
  event.remove({ id: 'manual_labour:waxed_oxidized_copper_hammer' })
});