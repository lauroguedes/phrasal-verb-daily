
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhrasalVerb } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

interface PhrasalVerbCardProps {
  verb: PhrasalVerb | null;
  loading: boolean;
}

const PhrasalVerbCard = ({ verb, loading }: PhrasalVerbCardProps) => {
  const [showMeaning, setShowMeaning] = useState(true);

  const toggleMeaning = () => {
    setShowMeaning(!showMeaning);
  };

  if (loading) {
    return (
      <div className="w-full max-w-2xl mx-auto rounded-2xl p-6 card-shadow glass-effect">
        <div className="space-y-4">
          <Skeleton className="h-12 w-3/4 mx-auto rounded-lg" />
          <Skeleton className="h-4 w-20 mx-auto rounded-full" />
          <Skeleton className="h-20 w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-full rounded-lg" />
            <Skeleton className="h-6 w-full rounded-lg" />
          </div>
        </div>
      </div>
    );
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
      className="w-full max-w-2xl mx-auto rounded-2xl p-6 card-shadow glass-effect"
    >
      <div className="text-center mb-6">
        <Badge variant="outline" className="mb-3 px-3 py-1 font-normal text-xs">
          {verb.level.toUpperCase()}
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
          <span className="text-primary">{verb.verb}</span>
          <span className="mx-2 text-muted-foreground font-medium">{verb.particle}</span>
        </h2>
      </div>

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
            <div className="bg-secondary/50 rounded-xl p-5">
              <h3 className="font-medium text-sm uppercase tracking-wider mb-2 text-muted-foreground">Meaning</h3>
              <p className="text-primary text-lg">{verb.meaning}</p>
            </div>
          ) : (
            <div className="bg-secondary/50 rounded-xl p-5">
              <h3 className="font-medium text-sm uppercase tracking-wider mb-2 text-muted-foreground">Examples</h3>
              <ul className="space-y-3">
                {verb.examples.map((example, index) => (
                  <li key={index} className="text-primary">
                    <p className="text-lg">"{example}"</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center">
        <button
          onClick={toggleMeaning}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-all",
            "hover:scale-105 active:scale-95",
            "border-2 border-primary/10 hover:border-primary/20",
            "bg-background/80"
          )}
        >
          {showMeaning ? "Show Examples" : "Show Meaning"}
        </button>
      </div>
    </motion.div>
  );
};

export default PhrasalVerbCard;
