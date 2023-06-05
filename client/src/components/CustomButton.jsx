import React from 'react';
import { useSnapshot } from 'valtio';

import state from '../store';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state)
  const genericStyles = (type) => {
    if (type === "filed") {
      return {
        backgroundColor: snap.color,
        color: "#fff"
      }
    }
  }
  
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={genericStyles(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton