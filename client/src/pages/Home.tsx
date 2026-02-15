/*
Design Philosophy: Brutalism + Martial Arts Aesthetic
- Sharp geometric forms with diagonal cuts
- High contrast: black background, white text, red accents
- Asymmetric layouts
- Minimal but maximum impact
*/

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Instagram, Linkedin, Youtube, Phone, Star, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Carousel from "@/components/Carousel";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [showPopup, setShowPopup] = useState(false);

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

    // Show popup after 3 seconds
    const timer = setTimeout(() => setShowPopup(true), 3000);

    return () => {
      observerRef.current?.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("iletisim")?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent("Merhaba, web siteniz üzerinden ulaşıyorum. Özel dersler ve fiyat bilgisi hakkında bilgi almak istiyorum.");
  const whatsappLink = `https://wa.me/905XX5XXXXXX?text=${whatsappMessage}`;

  // Placeholder testimonials for carousel
  const testimonials = [
    {
      name: "Ahmet Kaya",
      role: "Müşteri",
      text: "Baki ile çalışmaya başladığımdan beri hayatım tamamen değişti. Profesyonel yaklaşımı ve motivasyonu sayesinde hedeflerime ulaştım.",
      rating: 5,
    },
    {
      name: "Zeynep Demir",
      role: "Müşteri",
      text: "Kickbox derslerinde öğrendiklerimin yanı sıra kendime olan güvenim de arttı. Çok teşekkür ederim Baki!",
      rating: 5,
    },
    {
      name: "Mehmet Yıldız",
      role: "Müşteri",
      text: "Fitness hedeflerime ulaşmak için Baki'nin yardımı çok önemliydi. Kişiselleştirilmiş programı sayesinde başarılı oldum.",
      rating: 5,
    },
    {
      name: "Ayşe Çetin",
      role: "Müşteri",
      text: "Grup derslerine katılmak çok eğlenceli. Baki'nin enerjisi ve bilgisi bizi her zaman motive ediyor.",
      rating: 5,
    },
  ];

  const testimonialItems = testimonials.map((t) => (
    <div key={t.name} className="bg-background p-8 border-2 border-border">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-lg mb-4 text-muted-foreground">"{t.text}"</p>
      <p className="font-bold">{t.name}</p>
      <p className="text-sm text-muted-foreground">{t.role}</p>
    </div>
  ));

  const services = [
    { title: "Boks", icon: "🥊" },
    { title: "Kickboks", icon: "🥋" },
    { title: "Fonksiyonel Antrenman", icon: "💪" },
    { title: "Fitness", icon: "🏋️" },
    { title: "Kondisyon Geliştirme", icon: "⚡" },
    { title: "Yağ Yakımı Programları", icon: "🔥" },
  ];

  const goals = [
    "Yağ yakımı",
    "Kondisyon artışı",
    "Güç ve dayanıklılık",
    "Özgüven",
    "Disiplinli yaşam alışkanlığı",
  ];

  const whoFor = [
    "Kilo vermek isteyenler",
    "Kondisyonunu artırmak isteyenler",
    "Sporla disiplin kazanmak isteyen gençler",
    "Güç ve dayanıklılığını geliştirmek isteyenler",
    "Profesyonel antrenman sistemi arayanlar",
  ];

  const experience = [
    "29 yıllık spor tecrübesi",
    "Milli sporcu altyapısı",
    "Disiplinli ve sistemli antrenman yaklaşımı",
    "Hedef ve sonuç odaklı çalışma modeli",
  ];

  const faqs = [
    {
      q: "Antrenmanlar nasıl geçer?",
      a: "Antrenmanlar kişiye özel planlanır. Teknik boks eğitimi, kondisyon çalışmaları, cardio ve fonksiyonel antrenmanlar birlikte uygulanır.",
    },
    {
      q: "Dersler her seviyeye uygun mu?",
      a: "Evet. Hiç spor yapmamış kişilerden ileri seviye sporculara kadar herkes için özel program hazırlanır.",
    },
    {
      q: "Beslenme programı veriliyor mu?",
      a: "Evet. Hedefe göre (kilo verme, kilo alma, performans artışı) beslenme yönlendirmesi yapılır.",
    },
    {
      q: "Yarışmalara hazırlanabilir miyim?",
      a: "Evet. Müsabık sporcular için özel disiplinli antrenman programı uygulanır.",
    },
    {
      q: "Hangi yaş aralığı kabul ediliyor?",
      a: "4 – 70 yaş arası öğrencilerimiz bulunmaktadır. 5 yaşında öğrencimiz de var, 60 yaşında öğrencimiz de. Her yaşa uygun program uygulanır.",
    },
    {
      q: "Kadınlar için uygun mu?",
      a: "Evet. Kadın öğrenciler için özel program uygulanır. Boks aynı zamanda güçlü bir cardio ve sıkılaşma antrenmanıdır.",
    },
    {
      q: "Daha önce spor yapmadım, başlayabilir miyim?",
      a: "Kesinlikle evet. Sıfırdan başlayan birçok öğrencimiz bulunmaktadır. Program seviyeye göre başlatılır.",
    },
    {
      q: "Sakatlanma riski var mı?",
      a: "Kontrollü ve disiplinli çalışma sayesinde risk minimuma indirilir. Teknik eğitim önceliklidir.",
    },
  ];

  return (
    <div className="bg-background text-foreground">


      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663350946171/ngcxJkaqTFjaQDNP.png" 
              alt="B.Y. Fight Club Academy" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold tracking-wider">BAKI YILMAZ</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#hakkimda" className="hover:text-primary transition-colors duration-200">HAKKIMDA</a>
            <a href="#hizmetler" className="hover:text-primary transition-colors duration-200">HİZMETLER</a>
            <a href="#amaç" className="hover:text-primary transition-colors duration-200">AMAÇ</a>
            <a href="#kimler" className="hover:text-primary transition-colors duration-200">KİMLER İÇİN</a>
            <a href="#sss" className="hover:text-primary transition-colors duration-200">SSS</a>
            <a href="#iletisim" className="hover:text-primary transition-colors duration-200">İLETİŞİM</a>
          </div>
          <a href={whatsappLink}>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-105">
              Fiyat bilgisi al
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663350946171/boxing-ring-video-bg.mp4)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663350946171/boxing-ring-video.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-20">
          <div className="mb-6 inline-block border-2 border-primary px-4 py-2">
            <span className="text-primary font-bold tracking-wider">B.Y. FIGHT CLUB ACADEMY</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
            DİSİPLİN<br />
            KARAKTER<br />
            GÜÇÜ
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            29 yıllık spor tecrübesi ve milli sporculuk altyapısıyla boks, kickboks, fonksiyonel antrenman ve fitness alanlarında birebir özel ders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} className="bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-8 text-lg font-bold">
              Hemen iletişime geç
            </Button>
            <a href={whatsappLink}>
              <Button className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 py-3 px-8 text-lg font-bold w-full">
                Fiyat bilgisi al
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Kısa Tanıtım */}
      <section className="py-20 bg-card border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              29 yıllık spor tecrübesi ve milli sporculuk altyapısıyla; boks, kickboks, fonksiyonel antrenman ve fitness alanlarında birebir, hedef odaklı özel dersler veriyorum.
            </p>
            <p>
              Disiplinli ve sonuç odaklı çalışma sistemiyle; kilo verme, kondisyon geliştirme, güç ve dayanıklılık artırma konularında profesyonel destek sağlıyorum.
            </p>
            <p>
              Sporun yalnızca fiziksel değil, karakter gelişimi açısından da güçlü bir araç olduğuna inanıyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Özel Ders Alanları */}
      <section id="hizmetler" className="py-20 bg-background border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Özel Ders Alanları</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="p-8 bg-card border-2 border-border hover:border-primary transition-colors">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amaç Net */}
      <section id="amaç" className="py-20 bg-card border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Amaç Net</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {goals.map((goal, i) => (
              <div key={i} className="flex items-center gap-4 text-lg">
                <Check className="w-8 h-8 text-primary flex-shrink-0" />
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kimler İçin */}
      <section id="kimler" className="py-20 bg-background border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Kimler için?</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {whoFor.map((item, i) => (
              <div key={i} className="flex items-start gap-4 text-lg">
                <span className="text-primary font-bold">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Güçlü Karakter Metni */}
      <section className="py-20 bg-card border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-2xl font-bold mb-6 leading-relaxed">
              Burada sadece kilo verilmez.
            </p>
            <p className="text-2xl md:text-2xl font-bold mb-6 leading-relaxed">
              Burada kondisyon inşa edilir, karakter şekillenir, irade güçlenir.
            </p>
            <p className="text-2xl md:text-2xl font-bold mb-6 leading-relaxed">
              Bahane değil sonuç isteyenler için.
            </p>
            <p className="text-2xl md:text-2xl font-bold leading-relaxed">
              Sınırlarını zorlamak isteyenler için.
            </p>
          </div>
        </div>
      </section>

      {/* Tecrübe ve Altyapı */}
      <section className="py-20 bg-background border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Tecrübe ve Altyapı</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {experience.map((item, i) => (
              <div key={i} className="flex items-start gap-4 text-lg">
                <span className="text-primary font-bold">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları */}
      <section className="py-20 bg-card border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">MÜŞTERİ YORUMLARI</h2>
          <Carousel items={testimonialItems} />
        </div>
      </section>

      {/* SSS */}
      <section id="sss" className="py-20 bg-background border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">SIKÇA SORULAN SORULAR</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-8 bg-card border-2 border-border">
                <h3 className="text-xl font-bold mb-4 text-primary">{faq.q}</h3>
                <p className="text-lg text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hızlı Bilgi Formu */}
      <section id="hizli-bilgi" className="py-20 bg-card border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Bilgi ve fiyat almak için bırakın, sizi arayalım.</h2>
            <form className="space-y-6 mb-8">
              <div>
                <input 
                  type="text"
                  placeholder="Ad Soyad"
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <input 
                  type="tel"
                  placeholder="Telefon"
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 font-bold text-lg">
                BİLGİ AL
              </Button>
            </form>
            <p className="text-center text-sm text-muted-foreground">
              En kısa sürede dönüş yapılacaktır. Ders içeriği ve fiyat bilgisi telefonla paylaşılır.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="py-20 bg-background border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">HEMEN BAŞLAYALIM</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="bg-card p-8 border-2 border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">📱 WhatsApp</h3>
                <p className="text-muted-foreground mb-4">Hızlı bilgi almak için WhatsApp'tan yazabilirsiniz.</p>
                <a href={whatsappLink}>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    WHATSAPP'TAN YAZ
                  </Button>
                </a>
              </div>

              <div className="bg-card p-8 border-2 border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">📍 Konum</h3>
                <p className="font-bold">B.Y. Fight Club Academy</p>
                <p className="text-muted-foreground">Ataşehir, İstanbul</p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-8 text-primary">SOSYAL MEDYA</h3>
                <div className="flex gap-4 justify-center flex-wrap">
                  <a href="https://www.instagram.com/baki_ylmaz?igsh=MXZ5ank5NjVqenQ5Yg==" target="_blank" rel="noopener noreferrer" className="bg-primary p-6 hover:bg-primary/90 transition-colors w-16 h-16 flex items-center justify-center">
                    <Instagram className="w-8 h-8" />
                  </a>
                  <a href="https://www.tiktok.com/@bakiyilmazfightclub?_r=1&_t=ZS-93tQ4XNjv16" target="_blank" rel="noopener noreferrer" className="bg-primary p-6 hover:bg-primary/90 transition-colors w-16 h-16 flex items-center justify-center">
                    <Phone className="w-8 h-8" />
                  </a>
                  <a href="https://www.youtube.com/@bakiylmaz6484" target="_blank" rel="noopener noreferrer" className="bg-primary p-6 hover:bg-primary/90 transition-colors w-16 h-16 flex items-center justify-center">
                    <Youtube className="w-8 h-8" />
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 p-6 hover:bg-green-700 transition-colors w-16 h-16 flex items-center justify-center">
                    <Phone className="w-8 h-8" />
                  </a>
                  <a href="#" className="bg-primary p-6 hover:bg-primary/90 transition-colors w-16 h-16 flex items-center justify-center">
                    <MapPin className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kapanış */}
      <section className="py-20 bg-card border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-xl text-muted-foreground">
              Disiplinli antrenman, net hedefler ve gerçek sonuçlar için doğru yerdesiniz.
            </p>
            <p className="text-xl text-muted-foreground">
              İlk adımı atın, gerisini birlikte planlayalım.
            </p>
            <a href={whatsappLink}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-8 text-lg font-bold">
                BAŞLAYALIM
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">Hakkımda</h4>
              <a href="#hakkimda" className="text-muted-foreground hover:text-primary transition-colors">Baki Yılmaz</a>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hizmetler</h4>
              <a href="#hizmetler" className="text-muted-foreground hover:text-primary transition-colors">Tüm Hizmetler</a>
            </div>
            <div>
              <h4 className="font-bold mb-4">Amaç</h4>
              <a href="#amaç" className="text-muted-foreground hover:text-primary transition-colors">Amaçlarımız</a>
            </div>
            <div>
              <h4 className="font-bold mb-4">İletişim</h4>
              <a href="#iletisim" className="text-muted-foreground hover:text-primary transition-colors">Bize Ulaşın</a>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy;2026 Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
