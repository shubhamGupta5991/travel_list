import { useState } from "react";
import Item from "./Items";

export default function PackingList({ items, onDeleteItem, onUpdate,onClearList}) {
    const [sortyBy,setSortBy] = useState('input');
    let sortedItems;
    if(sortyBy === 'input') sortedItems = items;
    if(sortyBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
    if(sortyBy === 'packed') sortedItems = items.slice().sort((a,b)=>Number(a.packed) - Number(b.packed))
    
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onUpdate={onUpdate}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortyBy} onChange={e=>setSortBy(e.target.value)}>
            <option value='input'>Sort by input order</option>
            <option value='description'>Sort by description</option>
            <option value='packed'>Sort by Packed status</option>
          </select>
          <button onClick={()=>onClearList()}>Clear List</button>
        </div>
      </div>
    );
  }