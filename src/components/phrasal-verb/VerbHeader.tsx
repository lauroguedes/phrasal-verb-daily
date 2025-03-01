import { memo } from 'react';
import { PhrasalVerb } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Copy } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface VerbHeaderProps {
  verb: PhrasalVerb;
  onCopy: (text: string, label: string) => void;
}

const VerbHeader = ({ verb, onCopy }: VerbHeaderProps) => {
  return (
    <div className="text-center mb-6">
      <Badge variant="outline" className="mb-3 px-3 py-1 font-normal text-xs">
        {verb.level.toUpperCase()}
      </Badge>
      <div className="flex items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
          <span className="text-primary">{verb.verb}</span>
          <span className="mx-2 text-muted-foreground font-medium">{verb.particle}</span>
        </h2>
        <Tooltip>
          <TooltipTrigger asChild>
            <button 
              onClick={() => onCopy(`${verb.verb} ${verb.particle}`, "Phrasal verb")}
              className="ml-2 p-1.5 rounded-full hover:bg-secondary/50 transition-colors"
              aria-label="Copy phrasal verb"
            >
              <Copy className="h-5 w-5 text-muted-foreground" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy phrasal verb</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default memo(VerbHeader); 