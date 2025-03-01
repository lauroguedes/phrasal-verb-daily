import { useState, useEffect, useCallback } from 'react';
import { toast } from '@/components/ui/use-toast';
import { usePhrasalVerbContext } from '@/contexts/PhrasalVerbContext';
import MainLayout from '@/components/layout/MainLayout';
import PhrasalVerbCard from '@/components/phrasal-verb/PhrasalVerbCard';
import Navigation from '@/components/navigation/Navigation';

const Index = () => {
  const { 
    currentVerb, 
    allVerbs, 
    loading, 
    setToday, 
    goToNext, 
    goToPrevious,
    goToById
  } = usePhrasalVerbContext();
  
  // Show welcome toast on first render
  useEffect(() => {
    toast({
      title: "Welcome to Phrasal Verb Daily!",
      description: "Learn a new phrasal verb every day to improve your English."
    });
  }, []);

  return (
    <MainLayout>
      <PhrasalVerbCard 
        verb={currentVerb} 
        loading={loading} 
      />
      
      <Navigation 
        currentVerb={currentVerb}
        allVerbs={allVerbs}
        loading={loading}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onToday={setToday}
        onSelect={goToById}
      />
    </MainLayout>
  );
};

export default Index;
