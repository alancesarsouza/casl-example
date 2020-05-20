import { AbilityBuilder } from "@casl/ability";

function subjectName(item) {
  if (!item || typeof item === "string") {
    return item;
  }

  return item.__type;
}

const abilityColors = (can) => {
  can(["black", "white", "red", "green", "blue"], "Colors", { access: "man" });
  can(["black", "white", "red", "green", "blue", "cyan"], "Colors", {
    access: "woman",
  });
  can(["black", "white"], "Colors", { access: "dog" });
};

const abilityActions = (can) => {
  can(["futebol", "filme"], "Actions", { access: "man" });
  can(["maquiagem", "filme"], "Actions", { access: "woman" });
  can(["latir"], "Actions", { access: "dog" });
};

const ability = AbilityBuilder.define({ subjectName }, (can) => {
  abilityColors(can);
  abilityActions(can);
});

export default ability;
