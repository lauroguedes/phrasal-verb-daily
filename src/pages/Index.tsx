import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import { usePhrasalVerb } from '@/hooks/usePhrasalVerb';
import Header from '@/components/Header';
import PhrasalVerbCard from '@/components/PhrasalVerbCard';
import Navigation from '@/components/Navigation';
import { BookOpen } from 'lucide-react';

const Index = () => {
  const { 
    currentVerb, 
    allVerbs, 
    loading, 
    setToday, 
    goToNext, 
    goToPrevious,
    goToById
  } = usePhrasalVerb();
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Show welcome toast on first load
    toast({
      title: "Welcome to Phrasal Verb Daily!",
      description: "Learn a new phrasal verb every day to improve your English."
    });
  }, []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen px-4 py-8 bg-gradient-to-b from-background to-secondary/20"
        >
          <Header />
          
          <div className="mt-8 mb-8">
            <PhrasalVerbCard 
              verb={currentVerb} 
              loading={loading} 
            />
          </div>
          
          <Navigation 
            currentVerb={currentVerb}
            allVerbs={allVerbs}
            loading={loading}
            onPrevious={goToPrevious}
            onNext={goToNext}
            onToday={setToday}
            onSelect={goToById}
          />
          
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            <p>Expand your English vocabulary, one phrasal verb at a time.</p>
            <div className="flex items-center justify-center mt-4">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>Phrasal Verb Daily</span>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
