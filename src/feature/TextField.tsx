import React from 'react';

interface TextFieldProps {
  label: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  value: string;
  onAddChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  inputProps,
  value,
  onAddChange,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-base text-gray-800">{label}</label>
      <input
        {...inputProps}
        onChange={onAddChange}
        value={value}
        className="bg-gray-200 px-3 py-2 border-2 outline-none"
      />
    </div>
  );
};

export default TextField;
