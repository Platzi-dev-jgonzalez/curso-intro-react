import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext/TodoContext'
//import { TodoSearch } from '../TodoSearch/TodoSearch';
//import { TodoCounter } from '../TodoCounter/TodoCounter';
// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];
function App() {

  const [state, setState]= React.useState("Estado Compartido");

  return(
    <React.Fragment>
      <TodoHeader>
          <TodoCounter/>
          <TodoSearch/>
      </TodoHeader>
     <TodoList>
      <TodoItem state={state}/>
     </TodoList>

    </React.Fragment>
  );
}
function TodoHeader({children}) {
  return(
  <header>
    {children}
  </header>

  );
}
function TodoList({children}) {
 return(
  <section className='TodoList-conatiner'>
{children}
  </section>


);
}
function TodoCounter() {
  return <p>TodoCounter</p>;
}
function TodoSearch() {
  return <p>TodoSearch</p>;
}
function TodoItem({state}) {
  return <p>TodoItem: {state}</p>;
}


//  console.log(' rednder(antes de efee)')
//    React.useEffect(()=>{
//      console.log('user effeect')
//    },[totalTodos]);
//    console.log(' rednder(despues de efee)')


//   return (
// <TodoProvider>
//   <AppUI/>
// </TodoProvider>
//   );
// }

export default App;
