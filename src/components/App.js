import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((item) => item.filter((item) => item.id !== id));
  }

  function handleUpdate(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList(){
    const clearConfirmation = window.confirm('Are you sure want to delete it ?');
   clearConfirmation && setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onUpdate={handleUpdate}
        onClearList = {handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}








export default App;

// windows icon + . to add emoji
