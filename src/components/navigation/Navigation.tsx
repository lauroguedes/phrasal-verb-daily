import { PhrasalVerb } from '@/lib/data';
import NavigationControls from './NavigationControls';
import VerbList from './VerbList';

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
  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <NavigationControls 
        loading={loading}
        onPrevious={onPrevious}
        onNext={onNext}
        onToday={onToday}
      />
      
      <VerbList 
        currentVerb={currentVerb}
        allVerbs={allVerbs}
        loading={loading}
        onSelect={onSelect}
      />
    </div>
  );
};

export default Navigation; 