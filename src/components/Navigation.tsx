
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PhrasalVerb } from '@/lib/data';
import { cn } from '@/lib/utils';

interface NavigationProps {
  currentVerb: PhrasalVerb | null;
  allVerbs: PhrasalVerb[];
  loading: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onToday: () => void;
  onSelect: (id: number) => void;
}

const Navigation = ({
  currentVerb,
  allVerbs,
  loading,
  onPrevious,
  onNext,
  onToday,
  onSelect
}: NavigationProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-5">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrevious}
          disabled={loading}
          className="rounded-full h-10 w-10"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <Button
          variant="outline"
          onClick={onToday}
          disabled={loading}
          className="rounded-full text-sm"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Today's Verb
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          disabled={loading}
          className="rounded-full h-10 w-10"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ScrollArea className="w-full whitespace-nowrap rounded-xl border p-2" ref={scrollRef}>
          <div className="flex space-x-2 p-1">
            {allVerbs.map((verb) => (
              <button
                key={verb.id}
                onClick={() => onSelect(verb.id)}
                disabled={loading}
                className={cn(
                  "inline-flex px-3 py-2 rounded-lg text-sm font-medium transition-all",
                  "hover:bg-secondary whitespace-nowrap",
                  currentVerb?.id === verb.id ? "bg-primary text-primary-foreground" : "bg-background"
                )}
              >
                {verb.verb} {verb.particle}
              </button>
            ))}
          </div>
        </ScrollArea>
      </motion.div>
    </div>
  );
};

export default Navigation;
