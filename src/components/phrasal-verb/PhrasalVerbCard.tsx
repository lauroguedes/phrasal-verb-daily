import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhrasalVerb } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import VerbHeader from './VerbHeader';
import MeaningSection from './MeaningSection';
import ExamplesSection from './ExamplesSection';
import ShareButton from './ShareButton';
import ToggleButton from './ToggleButton';
import CardSkeleton from './CardSkeleton';

interface PhrasalVerbCardProps {
  verb: PhrasalVerb | null;
  loading: boolean;
}

const PhrasalVerbCard = ({ verb, loading }: PhrasalVerbCardProps) => {
  const [showMeaning, setShowMeaning] = useState(true);
  const { toast } = useToast();

  const toggleMeaning = useCallback(() => {
    setShowMeaning(prev => !prev);
  }, []);

  const copyToClipboard = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
        duration: 2000,
      });
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
        duration: 2000,
      });
    });
  }, [toast]);

  const shareFullContent = useCallback(() => {
    if (!verb) return;
    
    const text = `Phrasal Verb: ${verb.verb} ${verb.particle}\n\nMeaning: ${verb.meaning}\n\nExamples:\n${verb.examples.map(ex => `- ${ex}`).join('\n')}`;
    
    copyToClipboard(text, "Full content");
  }, [verb, copyToClipboard]);

  if (loading) {
    return <CardSkeleton />;
  }

  if (!verb) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto rounded-2xl p-6 card-shadow glass-effect relative"
    >
      <ShareButton onShare={shareFullContent} />
      <VerbHeader verb={verb} onCopy={copyToClipboard} />

      <AnimatePresence mode="wait">
        <motion.div
          key={showMeaning ? 'meaning' : 'examples'}
          initial={{ opacity: 0, x: showMeaning ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: showMeaning ? -20 : 20 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          {showMeaning ? (
            <MeaningSection verb={verb} onCopy={copyToClipboard} />
          ) : (
            <ExamplesSection verb={verb} onCopy={copyToClipboard} />
          )}
        </motion.div>
      </AnimatePresence>

      <ToggleButton showMeaning={showMeaning} onToggle={toggleMeaning} />
    </motion.div>
  );
};

export default PhrasalVerbCard; 