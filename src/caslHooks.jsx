import React, { useContext } from "react";

import { AbilityContext } from "./hookCasl/Can";
import { AbilityBuilder } from "@casl/ability";
import { buildAbilityFor } from "./hookCasl/ability";

const styles = {
  box: {
    style: {
      marginTop: 16,
      display: "flex",
    },
  },
  container: {
    style: {
      width: 400,
      padding: 32,
      background: "#ccc",
      borderRadius: 8,
      marginTop: 32,
    },
  },
};

const styleItem = (color) => ({
  style: {
    margin: 5,
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "1px solid #ccc",
    background: color,
  },
});

const colors = ["black", "white", "red", "green", "blue", "cyan"];

const Color = ({ color }) => <div {...styleItem(color)} />;

const CaslHooks = () => {
  const abilityctx = useContext(AbilityContext);
  return (
    <div>
      <h2>Cores</h2>
      <div {...styles.box}>
        {colors.map(
          (color) =>
            abilityctx.can(color, "Color") && (
              <Color key={color} color={color} />
            )
        )}
      </div>
    </div>
  );
};

export default CaslHooks;
