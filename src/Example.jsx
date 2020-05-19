import React, { useState, useEffect } from 'react'
import Can from "./casl/Can";

const colors = [
  { color: '#ddd', name: 'white' },
  { color: '#111', name: 'black' },
  { color: '#f00', name: 'red' },
  { color: '#0f0', name: 'green' },
  { color: '#00f', name: 'blue' },
  { color: '#0ff', name: 'cyan' }
];

const __type = 'Colors';

const effect = {
  latir: 'Au Au Au!',
  maquiagem: 'Ela está se maquiando!',
  futebol: 'Ele está vendo futebol!'
};

const Color = ({ color }) => (
  <div style={{
    margin: 5,
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: color
  }} />
);

const Select = ({ state, setState }) => (
  <select
    name="access"
    id="1"
    value={state}
    onChange={e => setState(e.target.value)}
  >
    <option value='dog'>Cachorro</option>
    <option value='man'>Homem</option>
    <option value='woman'>Mulher</option>
  </select>
);

const Example = () => {
  const [selected, setSelected] = useState('dog');
  const [action, setAction] = useState('')

  const handleAction = (value) => {
    setAction(value)
  };

  const onProp = { access: selected, __type };

  useEffect(() => {
    setAction('')
  }, [selected])

  return (
    <div style={{
      margin: 32
    }}>
      <Select state={selected} setState={setSelected} />
      <h2>Pode ver:</h2>
      <div style={{
        marginTop: 16,
        display: 'flex'
      }}>
        {colors.map(({ name, color }) => (
          <Can key={color} do={name} on={onProp}>
            <Color color={color} />
          </Can>
        ))}
      </div>
      <div style={{
        marginTop: 16,
        display: 'flex'
      }}>

        <Can I='latir' a={onProp} passThrough>
          {allowed => !allowed || (
            <button onClick={() => handleAction('latir')}>Ele pode latir</button>
          )}
        </Can>

        <Can I='futebol' a={onProp} passThrough>
          {allowed => !allowed || (
            <button onClick={() => handleAction('futebol')}>Ele pode ver futebol</button>
          )}
        </Can>

        <Can I='maquiagem' a={onProp} passThrough>
          {allowed => !allowed || (
            <button onClick={() => handleAction('maquiagem')}>Ela pode se maquiar  </button>
          )}
        </Can>

      </div>
      {action && (
        <h1>{effect[action]}</h1>
      )}
    </div>
  )
}

export default Example
