import { createContext, useContext, ReactNode, useMemo } from 'react';
import { PhrasalVerb } from '@/lib/data';
import { usePhrasalVerb } from '@/hooks/usePhrasalVerb';

interface PhrasalVerbContextType {
  currentVerb: PhrasalVerb | null;
  allVerbs: PhrasalVerb[];
  loading: boolean;
  setToday: () => void;
  goToNext: () => void;
  goToPrevious: () => void;
  goToById: (id: number) => void;
}

const PhrasalVerbContext = createContext<PhrasalVerbContextType | undefined>(undefined);

export const PhrasalVerbProvider = ({ children }: { children: ReactNode }) => {
  const verbData = usePhrasalVerb();
  
  // Memoize the context value to prevent unnecessary re-renders
  const memoizedValue = useMemo(() => verbData, [
    verbData.currentVerb, 
    verbData.allVerbs, 
    verbData.loading
  ]);
  
  return (
    <PhrasalVerbContext.Provider value={memoizedValue}>
      {children}
    </PhrasalVerbContext.Provider>
  );
};

export const usePhrasalVerbContext = () => {
  const context = useContext(PhrasalVerbContext);
  
  if (context === undefined) {
    throw new Error('usePhrasalVerbContext must be used within a PhrasalVerbProvider');
  }
  
  return context;
}; 