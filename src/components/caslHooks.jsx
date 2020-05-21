import React, {useEffect, useState, useContext } from "react";

import { AbilityContext } from "../hookCasl/Can";
import SelectAccess from './SelectAccess';

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

const actions = {
  filme: "Está assistindo um Filme",
  latir: "Está latindo",
  maquiar: "Está se maquiando",
  futebol: "Está jogando futebol",
};

const colors = [ "black", "white", "red", "green", "blue", "cyan"];

const ColorRender= ({ color }) => <div {...styleItem(color)} />;

const CaslHooks = ({state}) => {
  const [message, setMessage] = useState('');
  const ability = useContext(AbilityContext);

  const handleClick = (value) => {
    setMessage(actions[value])
  };

  const sideEffect = () => {

  };

  useEffect(() => {
    if(ability.can('maquiar', 'Actions') ){
      console.log('Está função será chamada automaticamente, quando a açao "maquiar" estiver autorizada!')
    }
    else {
      console.log('Está função será chamada automaticamente, quando a açao "maquiar" NÃO estiver autorizada!')
    };
    
    setMessage('')
  }, [state])


  return (
    <div {...styles.container}>
      <h2>Cores</h2>
      <div {...styles.box}>
        {colors.map(
          (color) =>
          ability.can(color, "Colors") && (
              <ColorRender key={color} color={color} />
            )
        )}
      </div>

      <h2>Açoes</h2>
      <div {...styles.box}>
        {ability.can('filme', 'Actions') && (
          <button onClick={() => handleClick('filme')}>Filme</button>
        )}

        {ability.can('latir', 'Actions') && (
          <button onClick={() => handleClick('latir')}>Latir</button>
        )}

        {ability.can('maquiar', 'Actions') && (
          <button onClick={() => handleClick('maquiar')}>Maquiar</button>
        )}

          {ability.can('futebol', 'Actions') && (
          <button onClick={() => handleClick('futebol')}>Futebol</button>
        )}
      </div>

        {message && <span>{message}</span>}
    </div>
  );
};

export default CaslHooks;
