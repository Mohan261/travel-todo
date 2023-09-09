import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Form from "./Form";
import Items from "./Items";
import Logo from "./Logo";

function App() {
  const [items, setItems] = useState([]);

  const handleItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleClear = () => {
    alert("Are you sure you want to clear list?");
    setItems([]);
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handlePacked = (id, packed) => {
    setItems((items) =>
      items.map((item) => {
        if (item.id === id) return { ...item, packed };
        return item;
      })
    );
  };
  const handleSort = (value) => {
    setItems(items);
    console.log(value, items);
    if (value === "input")
      return setItems((items) =>
        items.sort((a, b) => a.id - b.id).map((items) => items)
      );

    if (value === "description")
      return setItems((items) =>
        items
          .sort((a, b) => {
            if (a.product < b.product) return -1;
            if (a.product > b.product) return 1;
            return 0;
          })
          .map((items) => items)
      );

    if (value === "pack")
      return setItems((items) =>
        items.sort((a, b) => a.packed - b.packed).map((items) => items)
      );

    console.log(value, items);
  };

  return (
    <div>
      <Logo />
      <Form addItems={handleItems} />
      <Items
        itemList={items}
        clearList={handleClear}
        deleteList={handleDelete}
        packedStatus={handlePacked}
        sortItems={handleSort}
      />
      <Footer item={items} />
    </div>
  );
}

export default App;
