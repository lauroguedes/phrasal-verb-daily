import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PhrasalVerb } from '@/lib/data';
import { cn } from '@/lib/utils';

interface VerbListProps {
  currentVerb: PhrasalVerb | null;
  allVerbs: PhrasalVerb[];
  loading: boolean;
  onSelect: (id: number) => void;
}

const VerbList = ({
  currentVerb,
  allVerbs,
  loading,
  onSelect
}: VerbListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
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
  );
};

export default VerbList; 