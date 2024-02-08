import React, { useState } from 'react';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { Addtodo } from './MyComponents/Addtodo';

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Go to the market',
      desc: 'you need go to the market to get the job',
    },
    {
      sno: 2,
      title: 'Go to the market',
      desc: 'you need go to the market to get the job2',
    },
    {
      sno: 3,
      title: 'Go to the market',
      desc: 'you need go to the market to get the job3',
    },
  ]);

  const onDelete = (todo) => {
    console.log('I am successfully deleted');
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo ", title, desc)
    let sno;
    if(todos.length===0)
    {
      sno=0;
    }
    else{
      let sno = todos[todos.length - 1].sno + 1;

    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(mytodo);
    setTodos([...todos, mytodo]);
  };

  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
