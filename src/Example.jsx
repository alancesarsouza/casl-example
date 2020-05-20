import React, { useState, useEffect } from "react";
import Can from "./casl/Can";

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
    background: color,
  },
});

const __type = "Colors";

const colors = [
  { color: "#fff", name: "white" },
  { color: "#000", name: "black" },
  { color: "#f00", name: "red" },
  { color: "#0f0", name: "green" },
  { color: "#00f", name: "blue" },
  { color: "#0ff", name: "cyan" },
];

const effect = {
  latir: "Au Au Au!",
  maquiagem: "Ela está se maquiando!",
  futebol: "Ele está vendo futebol!",
};

const Color = ({ color }) => <div {...styleItem(color)} />;

const Select = ({ state, setState }) => (
  <select
    name="access"
    id="1"
    value={state}
    onChange={(e) => setState(e.target.value)}
  >
    <option value="dog">Cachorro</option>
    <option value="man">Homem</option>
    <option value="woman">Mulher</option>
  </select>
);

const Example = () => {
  const [selected, setSelected] = useState("dog");
  const [action, setAction] = useState("");

  const handleAction = (value) => {
    setAction(value);
  };

  const onColors = { access: selected, __type: "Colors" };
  const onActions = { access: selected, __type: "Actions" };

  useEffect(() => {
    setAction("");
  }, [selected]);

  return (
    <div {...styles.container}>
      <Select state={selected} setState={setSelected} />

      <h2>Pode ver:</h2>

      <div {...styles.box}>
        {colors.map(({ name, color }) => (
          <Can key={color} do={name} on={onColors}>
            <Color color={color} />
          </Can>
        ))}
      </div>
      <h2>Pode fazer:</h2>
      <div {...styles.box}>
        <Can I="latir" a={onActions}>
          <button onClick={() => handleAction("latir")}>Ele pode latir</button>
        </Can>

        <Can I="futebol" a={onActions}>
          <button onClick={() => handleAction("futebol")}>
            Ele pode assistir futebol
          </button>
        </Can>

        <Can I="maquiagem" a={onActions}>
          <button onClick={() => handleAction("maquiagem")}>
            Ela pode se maquiar
          </button>
        </Can>
      </div>

      {action && <h1>{effect[action]}</h1>}
    </div>
  );
};

export default Example;
