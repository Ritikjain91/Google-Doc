
import React, { useState } from 'react';
import DraggableItem from './Dragable';
import DroppableArea from './Dropable';

const App = () => {
  const [items, setItems] = useState([
    { id: 'item1', content: 'Item 1' },
    { id: 'item2', content: 'Item 2' },
    { id: 'item3', content: 'Item 3' },
  ]);

  const handleDrop = (id) => {
    // Rearrange items
    const itemToMove = items.find(item => item.id === id);
    const filteredItems = items.filter(item => item.id !== id);
    setItems([...filteredItems, itemToMove]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Drag-and-Drop Example</h1>
      <DroppableArea onDropItem={handleDrop}>
        {items.map(item => (
          <DraggableItem key={item.id} id={item.id}>
            {item.content}
          </DraggableItem>
        ))}
      </DroppableArea>
    </div>
  );
};

export default App;
