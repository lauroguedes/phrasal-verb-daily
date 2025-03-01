import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationControlsProps {
  loading: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onToday: () => void;
}

const NavigationControls = ({
  loading,
  onPrevious,
  onNext,
  onToday
}: NavigationControlsProps) => {
  return (
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
  );
};

export default NavigationControls; 