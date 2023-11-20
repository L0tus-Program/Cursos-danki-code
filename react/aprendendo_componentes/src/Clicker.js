import React, { useState } from 'react';



function Example_click() {

  // Declare uma nova variável de state, a qual chamaremos de "count"

  const [count, setCount] = useState(0);  // useState é o valor inicial da variavel
  const [nome,setNome] = useState("Felipe")
// Const precisa de uma variavel para armazenar e outra setar

  return (

    <div>

      <p>You clicked {nome} times</p>

      <button onClick={() => setNome("Vitor")}>

        Click me

      </button>

    </div>

  );

}


export default Example_click