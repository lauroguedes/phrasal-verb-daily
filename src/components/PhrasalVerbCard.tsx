import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhrasalVerb } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PhrasalVerbCardProps {
  verb: PhrasalVerb | null;
  loading: boolean;
}

const PhrasalVerbCard = ({ verb, loading }: PhrasalVerbCardProps) => {
  const [showMeaning, setShowMeaning] = useState(true);
  const { toast } = useToast();

  const toggleMeaning = () => {
    setShowMeaning(!showMeaning);
  };

  const copyToClipboard = (text: string, label: string) => {
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
        <div className="flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            <span className="text-primary">{verb.verb}</span>
            <span className="mx-2 text-muted-foreground font-medium">{verb.particle}</span>
          </h2>
          <button 
            onClick={() => copyToClipboard(`${verb.verb} ${verb.particle}`, "Phrasal verb")}
            className="ml-2 p-1.5 rounded-full hover:bg-secondary/50 transition-colors"
            aria-label="Copy phrasal verb"
          >
            <Copy className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
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
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">Meaning</h3>
                <button 
                  onClick={() => copyToClipboard(verb.meaning, "Meaning")}
                  className="p-1 rounded-full hover:bg-background/50 transition-colors"
                  aria-label="Copy meaning"
                >
                  <Copy className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <p className="text-primary text-lg">{verb.meaning}</p>
            </div>
          ) : (
            <div className="bg-secondary/50 rounded-xl p-5">
              <h3 className="font-medium text-sm uppercase tracking-wider mb-2 text-muted-foreground">Examples</h3>
              <ul className="space-y-3">
                {verb.examples.map((example, index) => (
                  <li key={index} className="text-primary">
                    <div className="flex items-start gap-2">
                      <p className="text-lg flex-1">"{example}"</p>
                      <button 
                        onClick={() => copyToClipboard(example, `Example ${index + 1}`)}
                        className="p-1 rounded-full hover:bg-background/50 transition-colors mt-1 flex-shrink-0"
                        aria-label={`Copy example ${index + 1}`}
                      >
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
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
