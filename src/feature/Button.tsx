import React from 'react';

interface ButtonProps {
  onAddClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onAddClick, children }) => {
  return (
    <button
      className="bg-indigo-600 py-2 px-6 text-white my-10 rounded hover:bg-indigo-700"
      onClick={onAddClick}
    >
      {children}
    </button>
  );
};

export default Button;
