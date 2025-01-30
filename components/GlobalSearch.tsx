import React, { createContext, useState, useContext } from 'react';

type GlobalContextType = {
  hostelname: string;
  setHostelname: (name: string) => void;
  sickness: string;
  setSickness: (name: string) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hostelname, setHostelname] = useState('');
  const [sickness, setSickness] = useState('');

  return (
    <GlobalContext.Provider value={{ hostelname, setHostelname, sickness, setSickness }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
};
