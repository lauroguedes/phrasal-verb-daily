import { memo } from 'react';
import { Share } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface ShareButtonProps {
  onShare: () => void;
}

const ShareButton = ({ onShare }: ShareButtonProps) => {
  return (
    <div className="absolute top-4 right-4 z-10">
      <Tooltip>
        <TooltipTrigger asChild>
          <button 
            onClick={onShare}
            className="p-2 rounded-full hover:bg-secondary/50 transition-colors focus:outline-none"
            aria-label="Share content"
          >
            <Share className="h-5 w-5 text-muted-foreground" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Copy all content</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default memo(ShareButton); 