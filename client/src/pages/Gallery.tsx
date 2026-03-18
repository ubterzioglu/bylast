import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronUp, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Gallery() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const galleryImages = [
    { src: "/gallery/IMG_0394.jpg", alt: "Antrenman" },
    { src: "/gallery/IMG_0494.JPG", alt: "Sporcular" },
    { src: "/gallery/IMG_3006.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_7064.JPG", alt: "Yarışma" },
    { src: "/gallery/IMG_7075.JPG", alt: "Ödül Töreni" },
    { src: "/gallery/IMG_8379.JPG", alt: "Sporcu ve Hoca" },
    { src: "/gallery/IMG_8380.JPG", alt: "Salon" },
    { src: "/gallery/IMG_8381.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8382.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8383.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8384.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8385.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8387.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8388.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8389.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8390.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8391.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8392.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8393.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8394.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8395.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8396.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8397.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8398.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8399.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8400.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8401.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8402.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8403.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8405.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8406.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8407.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8408.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8409.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8410.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8411.JPG", alt: "Antrenman" },
    { src: "/gallery/IMG_8412.JPG", alt: "Sporcu" },
    { src: "/gallery/IMG_8744.jpg", alt: "Birebir Özel Kurslar" },
    { src: "/gallery/IMG_8745.jpg", alt: "Çocuklar için Kickboks" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="/logo.png" alt="Baki Yılmaz Logo" className="h-12 w-auto" />
              <span className="font-bold text-lg hidden sm:inline">BAKI YILMAZ</span>
            </div>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-2 border-border hover:border-primary">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Geri Dön
            </Button>
          </Link>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="pt-32 pb-20 bg-card">
        <div className="container animate-on-scroll">
          <h1 className="text-5xl font-black mb-12">GALERİ</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="aspect-square overflow-hidden border-2 border-border hover:border-primary transition cursor-pointer group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="bg-card py-12 border-t border-border">
        <div className="container flex justify-center gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 bg-background border-2 border-border hover:border-primary px-6 py-3 transition"
          >
            <ChevronUp className="w-5 h-5" />
            Yukarı Çık
          </button>
          <Link href="/">
            <button className="flex items-center gap-2 bg-background border-2 border-border hover:border-primary px-6 py-3 transition">
              <Home className="w-5 h-5" />
              Ana Sayfaya Dön
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container text-center text-muted-foreground">
          <p>©2026 Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
