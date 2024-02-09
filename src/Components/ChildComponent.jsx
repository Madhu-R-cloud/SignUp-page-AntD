// ChildComponent.js
import React, { useContext } from 'react';
import MyContext from './MyContext';


const ChildComponent = () => {
  const contextValue = useContext(MyContext);
console.log(contextValue.value);
  return <p>{contextValue}</p>;
};

export default ChildComponent;
