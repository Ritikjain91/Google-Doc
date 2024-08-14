
import React from 'react';

const DroppableArea = ({ onDropItem, children }) => {
  const handleDragOver = (e) => {
    e.preventDefault();  // Necessary to allow a drop
  };

  const handleDrop = (e) => {
    const id = e.dataTransfer.getData('text');
    onDropItem(id);
  };

  return (
    <div 
      onDragOver={handleDragOver} 
      onDrop={handleDrop} 
      style={{ padding: '16px', margin: '16px', backgroundColor: '#e8e8e8', minHeight: '50px', border: '2px dashed #ccc' }}
    >
      {children}
    </div>
  );
};

export default DroppableArea;
