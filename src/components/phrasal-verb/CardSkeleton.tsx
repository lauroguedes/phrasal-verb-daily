import { Skeleton } from '@/components/ui/skeleton';

const CardSkeleton = () => {
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
};

export default CardSkeleton; 