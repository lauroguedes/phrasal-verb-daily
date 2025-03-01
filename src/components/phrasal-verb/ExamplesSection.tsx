import { memo } from 'react';
import { PhrasalVerb } from '@/lib/data';
import { Copy } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface ExamplesSectionProps {
  verb: PhrasalVerb;
  onCopy: (text: string, label: string) => void;
}

const ExamplesSection = ({ verb, onCopy }: ExamplesSectionProps) => {
  return (
    <div className="bg-secondary/50 rounded-xl p-5">
      <h3 className="font-medium text-sm uppercase tracking-wider mb-2 text-muted-foreground">Examples</h3>
      <ul className="space-y-3">
        {verb.examples.map((example, index) => (
          <li key={index} className="text-primary">
            <div className="flex items-start gap-2">
              <p className="text-lg flex-1">"{example}"</p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    onClick={() => onCopy(example, `Example ${index + 1}`)}
                    className="p-1 rounded-full hover:bg-background/50 transition-colors mt-1 flex-shrink-0"
                    aria-label={`Copy example ${index + 1}`}
                  >
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy example</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ExamplesSection); 