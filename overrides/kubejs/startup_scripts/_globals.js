global.dyes = [
  "white",
  "light_gray",
  "gray",
  "black",
  "brown",
  "yellow",
  "lime",
  "green",
  "cyan",
  "blue",
  "light_blue",
  "magenta",
  "pink",
  "purple",
  "red",
  "orange",
];

global.woods = {
  vanilla: [
    "oak",
    "birch",
    "spruce",
    "dark_oak",
    "jungle",
    "acacia",
    "cherry",
    "mangrove",
    "crimson",
    "warped",
    "bamboo",
  ],
  modded: [
    "nomansland:maple",
    "nomansland:pine",
    "nomansland:walnut",
    "nomansland:willow",
    "newworld:fir",
    "abundant_atmosphere:gourdrot",
    "abundant_atmosphere:ashroot",
    "abundant_atmosphere:red_bamboo",
    "caverns_and_chasms:azalea",
    "mynethersdelight:powdery",
    "gardens_of_the_dead:whistlecane",
    "gardens_of_the_dead:soulblight",
    "spawn:rotten",
    "spawn:date",
    "malum:runewood",
    "malum:soulwood",
    "minecraft:pale_oak",
    "cataclysm:chorus",
    "ars_nouveau:archwood"
  ],
};

global.toolPatterns = {
  sword: ["C", "C", "S"],
  shovel: ["C", "S", "S"],
  pickaxe: ["CCC", " S ", " S "],
  axe: ["CC", "SC", "S "],
  knife: ["C", "S"],
  mallet: ["CSC", " S ", " S "],
};

global.armorPatterns = {
  helmet: ["MMM", "MHM"],
  chestplate: ["MHM", "MMM", "MMM"],
  leggings: ["MMM", "MHM", "M M"],
  boots: ["M M", "MHM"],
};

global.plainArmorPatterns = {
  helmet: ["CCC", "C C"],
  chestplate: ["C C", "CCC", "CCC"],
  leggings: ["CCC", "C C", "C C"],
  boots: ["C C", "C C"],
};

global.ingredientOf = (id) => {
  return id.charAt(0) === "#" ? { tag: id.substring(1) } : { item: id };
};

global.pressing = (event, input, result) => {
  event.custom({
    type: "create:pressing",
    ingredients: [global.ingredientOf(input)],
    results: [{ id: result }],
  });
};

global.splashing = (event, input, result) => {
  event.custom({
    type: "create:splashing",
    ingredients: [global.ingredientOf(input)],
    results: [{ id: result }],
  });
};

global.cooking = (event, ingredients, result, cookingtime, experience, container) => {
  const recipe = {
    type: "farmersdelight:cooking",
    cookingtime: cookingtime,
    experience: experience,
    ingredients: ingredients.map((id) => global.ingredientOf(id)),
    recipe_book_tab: "misc",
    result: typeof result === "string" ? { id: result } : result,
  };
  if (container) recipe.container = { id: container };
  event.custom(recipe);
};

global.cutting = (event, input, tool, results) => {
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [global.ingredientOf(input)],
    result: results.map((r) => {
      const entry = { item: { count: r.count || 1, id: r.id } };
      if (r.chance) entry.chance = r.chance;
      return entry;
    }),
    tool: { tag: tool },
  });
};

global.fermenting = (event, ingredients, result, options) => {
  const recipe = {
    type: "brewinandchewin:fermenting",
    experience: options.experience,
    ingredients: ingredients.map((id) => (id ? global.ingredientOf(id) : [])),
    result: result,
  };
  if (options.baseFluid) {
    recipe.base_fluid = {
      amount: 1000,
      ingredient: { tag: options.baseFluid },
      unit: "millibuckets",
    };
    recipe.unit = "millibuckets";
  }
  if (options.fermentingtime) recipe.fermentingtime = options.fermentingtime;
  if (options.temperature) recipe.temperature = options.temperature;
  event.custom(recipe);
};

global.kegPouring = (event, fluid, amount, output, count) => {
  event.custom({
    type: "brewinandchewin:keg_pouring",
    fluid: { amount: amount, id: fluid },
    output: { count: count, id: output },
    unit: "millibuckets",
  });
};

global.baking = (event, input, result, count) => {
  event.custom({
    type: "clayworks:baking",
    category: "blocks",
    cookingtime: 100,
    experience: 0,
    ingredient: global.ingredientOf(input),
    result: { count: count, id: result },
  });
};

global.withoutCount = (output) => output.replace(/^\d+x /, "");

global.removeIds = (event, ids) => {
  ids.forEach((id) => event.remove({ id: id }));
};

global.reshaped = (event, output, pattern, keys, removed) => {
  event.remove({ id: removed || global.withoutCount(output) });
  event.shaped(output, pattern, keys);
};

global.reshapeless = (event, output, ingredients, removed) => {
  event.remove({ id: removed || global.withoutCount(output) });
  event.shapeless(output, ingredients);
};

global.swapInput = (event, ids, from, to) => {
  [].concat(ids).forEach((id) => event.replaceInput({ id: id }, from, to));
};

global.compress = (event, item, block) => {
  event.shapeless(block, [`9x ${item}`]);
  event.shapeless(`9x ${item}`, [block]);
};