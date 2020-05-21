import React, { useState } from "react";

import CaslHooks from "./components/caslHooks";
import SelectAccess from './components/SelectAccess'

import { AbilityContext } from "./hookCasl/Can";
import { buildAbilityFor } from "./hookCasl/ability";


const App = () => {
  const [story, setStory] = useState('');
  const ability = buildAbilityFor(story);

  return (
    <div>
      <h1>{`Quem está acessando: ${story}`}</h1>
      <SelectAccess setStory={setStory} />
      <AbilityContext.Provider value={ability}>
        <CaslHooks state={story} />
      </AbilityContext.Provider>
    </div>
  );
};

export default App;
