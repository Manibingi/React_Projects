import React, { useState } from "react";

const gifts = [
  "Crackers",
  "Sweets",
  "Chocolates",
  "Lights",
  "Dresses",
  "Watches",
  "Flowers",
];

function App() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState([]);
  const [assign, setAssign] = useState(false);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleForm(e) {
    e.preventDefault();
    if (input === "") {
      alert("Enter the name");
    } else {
      setDisplay((arr) => [
        ...arr,
        { name: input, prize: "No items Assigned" },
      ]);
      setInput("");
    }
  }

  function handelRemove(index) {
    const remove = display.filter((_, i) => i !== index);
    setDisplay(remove);
  }

  function handleAssign() {
    if (!assign) {
      setDisplay((arr) => {
        let res = arr.map((item) => {
          item.prize = gifts[Math.floor(Math.random() * gifts.length)];
          return { ...item };
        });
        return [...res];
      });
    }
    setAssign(true);
  }

  function handleShuffle() {
    setDisplay((arr) => {
      let res = arr.map((item) => {
        item.prize = gifts[Math.floor(Math.random() * gifts.length)];
        return { ...item };
      });
      return [...res];
    });
  }

  function handleReset() {
    setDisplay((arr) => {
      let res = arr.map((item) => {
        item.prize = "No Gifts Assigned";
        return { ...item };
      });
      return [...res];
    });
    setAssign(false);
  }

  // console.log(assign);

  return (
    <>
      <div className="forms">
        <h1>Diwali Giftss</h1>
        <form onSubmit={handleForm}>
          <input
            type="text"
            value={input}
            placeholder="Name"
            onChange={handleInput}
          />
          <button type="submit">Add</button>
        </form>
      </div>

      <h2>
        {display.map((item, index) => (
          <li key={index}>
            {item.name} - {item.prize}
            <button onClick={() => handelRemove(index)}>Remove</button>
          </li>
        ))}
      </h2>

      <button onClick={handleAssign}>Assign Gifts</button>
      <button onClick={handleShuffle}>Shuffle Gifts</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
