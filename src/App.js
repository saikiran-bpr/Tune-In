import React from 'react';
import Home from "./components/Home";
import { ContextProvider } from "./context/context";

function App() {
  return (
    <div className='bg-black'>
      <ContextProvider>
        <Home/>
      </ContextProvider>
    </div>
    
  );
}

export default App;
