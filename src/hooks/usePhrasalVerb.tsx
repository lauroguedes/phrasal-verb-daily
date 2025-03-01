import { useState, useEffect, useCallback } from 'react';
import { PhrasalVerb, getPhrasalVerbForDate, getAllPhrasalVerbs, getPhrasalVerbById } from '@/lib/data';

export function usePhrasalVerb() {
  const [currentVerb, setCurrentVerb] = useState<PhrasalVerb | null>(null);
  const [allVerbs, setAllVerbs] = useState<PhrasalVerb[]>([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());

  // Load all verbs only once
  useEffect(() => {
    setAllVerbs(getAllPhrasalVerbs());
  }, []);

  // Update current verb when date changes
  useEffect(() => {
    // Simulate a loading delay for a smoother experience
    setLoading(true);
    const timer = setTimeout(() => {
      const verb = getPhrasalVerbForDate(date);
      setCurrentVerb(verb);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [date]);

  // Memoize functions to prevent unnecessary re-renders
  const setToday = useCallback(() => {
    setDate(new Date());
  }, []);

  const goToNext = useCallback(() => {
    if (!currentVerb || !allVerbs.length) return;
    
    const currentIndex = allVerbs.findIndex(v => v.id === currentVerb.id);
    const nextIndex = (currentIndex + 1) % allVerbs.length;
    
    setLoading(true);
    setTimeout(() => {
      setCurrentVerb(allVerbs[nextIndex]);
      setLoading(false);
    }, 400);
  }, [currentVerb, allVerbs]);

  const goToPrevious = useCallback(() => {
    if (!currentVerb || !allVerbs.length) return;
    
    const currentIndex = allVerbs.findIndex(v => v.id === currentVerb.id);
    const prevIndex = (currentIndex - 1 + allVerbs.length) % allVerbs.length;
    
    setLoading(true);
    setTimeout(() => {
      setCurrentVerb(allVerbs[prevIndex]);
      setLoading(false);
    }, 400);
  }, [currentVerb, allVerbs]);

  const goToById = useCallback((id: number) => {
    const verb = getPhrasalVerbById(id);
    if (verb) {
      setLoading(true);
      setTimeout(() => {
        setCurrentVerb(verb);
        setLoading(false);
      }, 400);
    }
  }, []);

  return {
    currentVerb,
    allVerbs,
    loading,
    setToday,
    goToNext,
    goToPrevious,
    goToById
  };
}
