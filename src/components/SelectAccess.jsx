import React, {useState} from 'react'

const SelectAccess = ({ setStory }) => {
  const [value, setValue] = useState('');

  const handleUpdate = () => {
    setStory(value)
  };

  return (
    <div>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="man">Homem</option>
        <option value="woman">Mulher</option>
        <option value="dog">Cachorro</option>
      </select>

      <button 
      disabled={!value}
      onClick={handleUpdate}
      style={{marginLeft: 16}}
      >
        Salvar
      </button>
    </div>
  );
};

export default SelectAccess;
