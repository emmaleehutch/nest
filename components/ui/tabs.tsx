import React, { useState, createContext, useContext, ReactNode } from "react";

// Create a context for managing Tabs state
const TabsContext = createContext<any>(null);

// Tabs component
interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
}
export const Tabs = ({ value, onValueChange, children }: TabsProps) => {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

// TabsList component
export const TabsList = ({ children }: { children: ReactNode }) => {
  return <div className="tabs-list flex space-x-2">{children}</div>;
};

// TabsTrigger component
interface TabsTriggerProps {
  value: string;
  children: ReactNode;
}
export const TabsTrigger = ({ value, children }: TabsTriggerProps) => {
  const { value: activeValue, onValueChange } = useContext(TabsContext);

  return (
    <button
      className={`tabs-trigger px-4 py-2 rounded ${
        activeValue === value ? "bg-gray-300 font-bold" : "bg-white"
      }`}
      onClick={() => onValueChange(value)}
    >
      {children}
    </button>
  );
};

// TabsContent component
interface TabsContentProps {
  value: string;
  children: ReactNode;
}
export const TabsContent = ({ value, children }: TabsContentProps) => {
  const { value: activeValue } = useContext(TabsContext);

  return activeValue === value ? (
    <div className="tabs-content mt-4">{children}</div>
  ) : null;
};