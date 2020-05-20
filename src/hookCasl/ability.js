import {
  AbilityBuilder,
  Ability,
  detectSubjectType,
  subject,
} from "@casl/ability";

const actions = {
  man: ["blue", "red", "green"],
  woman: ["black", "white", "red", "green", "blue", "cyan"],
  dog: ["black", "white"],
};

function ability(role) {
  const { can, rules } = new AbilityBuilder();
  can(actions[role], "Color");
  return rules;
}

export function buildAbilityFor(role) {
  return new Ability(ability(role), detectSubjectType(subject));
}

export default ability;
