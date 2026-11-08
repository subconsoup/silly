ServerEvents.recipes((event) => {
  const furniture = (table, shutter, planks) => {
    global.reshaped(event, table, ["PPP", "S S", "S S"], {
      S: "stick",
      P: planks,
    });
    global.reshaped(event, `4x ${shutter}`, ["PPS", "PPS", "PPS"], {
      P: planks,
      S: "stick",
    });
  };

  // const signs = (sign, hangingSign, waySign, planks) => {
  //   event.shaped(`3x ${sign}`, ["PP", "XS"], {
  //     S: "stick",
  //     P: planks,
  //   });
  //   event.shaped(`3x ${hangingSign}`, ["XC", "PP"], {
  //     C: "chain",
  //     P: planks,
  //   });
  //   event.shaped(`3x ${waySign}`, [" X ", "PPP"], {
  //     P: planks,
  //   });
  // };

  global.woods.vanilla.forEach((wood) => {
    furniture(`another_furniture:${wood}_table`, `another_furniture:${wood}_shutter`, `${wood}_planks`);
    // signs(`${wood}_sign`, `${wood}_hanging_sign`, `supplementaries:way_sign_${wood}`, `${wood}_planks`);
  });

  global.woods.modded.forEach((id) => {
    const mod = id.split(":")[0];
    const wood = id.split(":")[1];
    furniture(`everycomp:af/${mod}/${wood}_table`, `everycomp:af/${mod}/${wood}_shutter`, `${id}_planks`);
    // signs(`${id}_sign`, `${id}_hanging_sign`, `supplementaries:${mod}/way_sign_${wood}`, `${id}_planks`);
  });


  global.reshaped(event, "3x another_furniture:oak_flower_box", ["PDP", "PPP"], {
    P: "#planks",
    D: "dirt",
  });
});