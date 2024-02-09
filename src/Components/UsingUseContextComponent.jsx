// UsingUseContextComponent.js
import React, { useContext } from 'react';
import MyContext from './MyContext';

const UsingUseContextComponent = () => {
  const { value, updateValue } = useContext(MyContext)();

  const handleUpdateClick = () => {
    updateValue(value + 1);
  };

  return (
    <div>
      <h2>Another Component</h2>
      <p>Context Value: {value}</p>
      <button type='submit'>Reset</button><br></br>
      <button type='submit' onClick={handleUpdateClick}>Submit</button>
      </div>
  );
};

export default UsingUseContextComponent;
