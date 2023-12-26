import { useState } from 'react';


function Admin() {
  return (
    <>
      <div className="App">
        <h1>Team 1</h1>
        <MyButton />
      </div>
      <div className="App">
        <h1>Team 2</h1>
        <MyButton />
      </div>
    </>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}


export default Admin;
