import {
  AbilityBuilder,
  Ability,
  detectSubjectType,
  subject,
} from "@casl/ability";

const colors = {
  man: ["blue", "red", "green"],
  woman: ["black", "white", "red", "green", "blue", "cyan"],
  dog: ["black", "white"],
};

const actions = {
  man: ["futebol", "filme"],
  woman: ["maquiar", "filme"],
  dog: ["latir"],
};

function ability(access) {
  const { can, rules } = new AbilityBuilder();
  can(colors[access], "Colors");
  can(actions[access], "Actions");

  return rules;
};

export function buildAbilityFor(role) {
  return new Ability(ability(role), detectSubjectType(subject));
};

export default ability;
