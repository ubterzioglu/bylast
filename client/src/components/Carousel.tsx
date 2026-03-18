import { useEffect, useRef, useState, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselProps {
  items: ReactNode[];
  autoScroll?: boolean;
  interval?: number;
  itemsPerPage?: number;
}

export default function Carousel({ 
  items, 
  autoScroll = true, 
  interval = 5000,
  itemsPerPage = 5
}: CarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Sayfaya göre gösterilecek item'lar
  const getVisibleItems = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
  };

  useEffect(() => {
    if (!autoScroll) return;

    autoScrollRef.current = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, interval);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [autoScroll, interval, totalPages]);

  const next = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4">
        <Button
          onClick={prev}
          variant="outline"
          size="icon"
          className="flex-shrink-0 bg-background/80 hover:bg-primary hover:text-primary-foreground border-2 border-foreground w-12 h-12"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        {/* Items Container - Alt alta dizilim */}
        <div className="flex-1 max-w-4xl">
          <div className="space-y-4">
            {visibleItems.map((item, index) => (
              <div key={`${currentPage}-${index}`}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={next}
          variant="outline"
          size="icon"
          className="flex-shrink-0 bg-background/80 hover:bg-primary hover:text-primary-foreground border-2 border-foreground w-12 h-12"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Dots - Sayfa sayısı kadar */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-3 h-3 transition-all duration-300 ${
              index === currentPage ? 'bg-primary w-8' : 'bg-muted-foreground'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* Sayfa göstergesi */}
      <div className="text-center mt-2 text-sm text-muted-foreground">
        Sayfa {currentPage + 1} / {totalPages}
      </div>
    </div>
  );
}
