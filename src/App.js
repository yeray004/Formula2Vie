//import react
import React from 'react';
//-----------------------------------------Component
import Inicio from './pages/inicio/Inicio'

export const numberF = Intl.NumberFormat("es-ES")

//App function / Component
function App() {
  return (
    <>
      <Inicio/>
    </>
  );
}
//Export Apps by default
export default App;
