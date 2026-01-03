import { cn } from '../../lib/utils';

interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide' | 'tall';
}

export function ImageSkeleton({ className, aspectRatio = 'video' }: ImageSkeletonProps) {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
    tall: 'aspect-[9/16]',
  };

  return (
    <div
      className={cn(
        'animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]',
        aspectRatioClasses[aspectRatio],
        className
      )}
      style={{
        animation: 'shimmer 2s infinite',
      }}
    />
  );
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-lg overflow-hidden bg-white shadow-sm', className)}>
      <ImageSkeleton className="w-full h-48" />
      <div className="p-6 space-y-3">
        <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
        <div className="flex gap-2 mt-4">
          <div className="h-8 bg-gray-200 rounded animate-pulse w-20" />
          <div className="h-8 bg-gray-200 rounded animate-pulse w-20" />
        </div>
      </div>
    </div>
  );
}

export function DestinationCardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="h-8 bg-gray-200 rounded animate-pulse w-48" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-32" />
        </div>
        <div className="flex gap-4">
          <div className="h-12 w-20 bg-gray-200 rounded animate-pulse" />
          <div className="h-12 w-20 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ImageSkeleton className="w-full h-96 rounded-lg" />
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
          <div className="space-y-2 mt-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-6 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
