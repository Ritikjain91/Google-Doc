
import React from 'react';

const DraggableItem = ({ id, children }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', id);
  };

  return (
    <div 
      draggable 
      onDragStart={handleDragStart} 
      style={{ padding: '8px', margin: '4px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', cursor: 'grab' }}
    >
      {children}
    </div>
  );
};

export default DraggableItem;
