import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext/TodoContext'
// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];


function App() {



//  console.log(' rednder(antes de efee)')
//    React.useEffect(()=>{
//      console.log('user effeect')
//    },[totalTodos]);
//    console.log(' rednder(despues de efee)')


  return (
<TodoProvider>
  <AppUI/>
</TodoProvider>
  );
}

export default App;
