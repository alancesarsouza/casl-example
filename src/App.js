import React from "react";
import CaslHooks from "./caslHooks";

import { AbilityContext } from "./hookCasl/Can";
import { buildAbilityFor } from "./hookCasl/ability";

const ability = buildAbilityFor("woman");

const App = () => (
  <AbilityContext.Provider value={ability}>
    <CaslHooks />
  </AbilityContext.Provider>
);

export default App;
