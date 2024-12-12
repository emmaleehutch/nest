import React, { useState, createContext, useContext, ReactNode } from "react";
import classNames from "classnames"; // Optional: for conditional class handling

// Context to manage the state of the Select component
const SelectContext = createContext<any>(null);

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

export const Select = ({ value, onValueChange, children }: SelectProps) => {
  const [internalValue, setInternalValue] = useState(value || "");
  const handleValueChange = (newValue: string) => {
    setInternalValue(newValue);
    onValueChange && onValueChange(newValue);
  };

  return (
    <SelectContext.Provider value={{ value: internalValue, onChange: handleValueChange }}>
      <div className="relative w-full">{children}</div>
    </SelectContext.Provider>
  );
};

export const SelectTrigger = ({ children }: { children: ReactNode }) => {
  return (
    <button className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 rounded">
      {children}
    </button>
  );
};

export const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const { value } = useContext(SelectContext);
  return <span>{value || placeholder || "Select an option"}</span>;
};

interface SelectContentProps {
  children: ReactNode;
}

export const SelectContent = ({ children }: SelectContentProps) => {
  return (
    <div className="absolute mt-2 bg-white border rounded shadow">
      {children}
    </div>
  );
};

interface SelectItemProps {
  value: string;
  children: ReactNode;
}

export const SelectItem = ({ value, children }: SelectItemProps) => {
  const { value: selectedValue, onChange } = useContext(SelectContext);

  return (
    <div
      className={classNames(
        "px-4 py-2 cursor-pointer hover:bg-gray-200",
        selectedValue === value && "bg-gray-300"
      )}
      onClick={() => onChange(value)}
    >
      {children}
    </div>
  );
};