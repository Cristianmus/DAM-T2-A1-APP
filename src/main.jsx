import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyFetchAPIs from './functions/MyFetchs.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <MyFetchAPIs/>
  </StrictMode>,
);
// import App from './App.jsx'
// import MyFunctions from "./functions/MyFunctions.jsx";
// import MyPromises from './functions/MyPromises.jsx';
// import MyPromisesAll from './functions/MyPromisesAll.jsx';
import MyPrimesesRace from './functions/MyPrimesesRace.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyFunctions />
    <MyPromises />
    <MyPromisesAll /> */}
    <MyPrimesesRace />
  </StrictMode>
)
