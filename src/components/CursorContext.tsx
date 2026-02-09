// src/context/CursorContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';

type CursorVariant = 'default' | 'hover' | 'project' | 'text';

interface CursorContextProps {
  variant: CursorVariant;
  setVariant: (variant: CursorVariant) => void;
}

const CursorContext = createContext<CursorContextProps | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [variant, setVariant] = useState<CursorVariant>('default');

  return (
    <CursorContext.Provider value={{ variant, setVariant }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) throw new Error('useCursor deve ser usado dentro de CursorProvider');
  return context;
};