import { memo } from 'react';
import { PhrasalVerb } from '@/lib/data';
import { Copy } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface MeaningSectionProps {
  verb: PhrasalVerb;
  onCopy: (text: string, label: string) => void;
}

const MeaningSection = ({ verb, onCopy }: MeaningSectionProps) => {
  return (
    <div className="bg-secondary/50 rounded-xl p-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">Meaning</h3>
        <Tooltip>
          <TooltipTrigger asChild>
            <button 
              onClick={() => onCopy(verb.meaning, "Meaning")}
              className="p-1 rounded-full hover:bg-background/50 transition-colors"
              aria-label="Copy meaning"
            >
              <Copy className="h-4 w-4 text-muted-foreground" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy meaning</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <p className="text-primary text-lg">{verb.meaning}</p>
    </div>
  );
};

export default memo(MeaningSection); 