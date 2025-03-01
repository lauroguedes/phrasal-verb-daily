import { memo } from 'react';
import { cn } from '@/lib/utils';

interface ToggleButtonProps {
  showMeaning: boolean;
  onToggle: () => void;
}

const ToggleButton = ({ showMeaning, onToggle }: ToggleButtonProps) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onToggle}
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
  );
};

export default memo(ToggleButton); 