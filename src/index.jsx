import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import SignupPage from './Components/SignUpComponent';
import MyContext from './Components/MyContext';
import UsingUseContextComponent from './Components/UsingUseContextComponent';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// const MyContext = createContext();


const App = () =>{
  var [value,setValue] = useState('Default Value');

  const updateValue = (newvalue) =>{
    setValue(newvalue)
  };
  return (
    <MyContext.Provider value={() => ({ value, updateValue })}>
      <UsingUseContextComponent />
    </MyContext.Provider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  // <React.StrictMode>
  //   <SignupPage />
  // </React.StrictMode>
  <App/>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
