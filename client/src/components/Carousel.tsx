import { useEffect, useRef, useState, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/useMobile';

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
  itemsPerPage: defaultItemsPerPage = 5
}: CarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isMobile = useIsMobile();
  
  const itemsPerPage = isMobile ? 1 : defaultItemsPerPage;
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
    <div className="relative px-0 md:px-16">
      {/* Items Container - Alt alta dizilim */}
      <div className="flex-1 max-w-4xl mx-auto">
        <div className="space-y-4">
          {visibleItems.map((item, index) => (
            <div key={`${currentPage}-${index}`}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Navigation Buttons */}
      <Button
        onClick={prev}
        variant="outline"
        size="icon"
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-primary hover:text-primary-foreground border-2 border-foreground w-12 h-12"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        onClick={next}
        variant="outline"
        size="icon"
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-primary hover:text-primary-foreground border-2 border-foreground w-12 h-12"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Mobile Navigation Buttons */}
      <div className="flex md:hidden justify-center gap-4 mt-6">
        <Button
          onClick={prev}
          variant="outline"
          size="icon"
          className="bg-background/80 hover:bg-primary hover:text-primary-foreground border-2 border-foreground w-12 h-12"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          onClick={next}
          variant="outline"
          size="icon"
          className="bg-background/80 hover:bg-primary hover:text-primary-foreground border-2 border-foreground w-12 h-12"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Dots - Sayfa sayısı kadar */}
      <div className="flex justify-center gap-2 mt-6 flex-wrap">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`min-h-[44px] min-w-[44px] flex items-center justify-center`}
            aria-label={`Go to page ${index + 1}`}
          >
            <span className={`block h-3 transition-all duration-300 ${
              index === currentPage ? 'bg-primary w-8' : 'bg-muted-foreground w-3'
            }`} />
          </button>
        ))}
      </div>

      {/* Sayfa göstergesi */}
      <div className="text-center mt-2 text-sm text-muted-foreground">
        Sayfa {currentPage + 1} / {totalPages}
      </div>
    </div>
  );
}
