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
import { useEffect, useRef } from "react";
import Carousel from "@/components/Carousel";

export default function Home() {
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

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById("iletisim")?.scrollIntoView({ behavior: "smooth" });
  };

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

  const services = [
    {
      title: "Boks Özel Ders",
      description: "Birebir antrenman",
      details: [
        "Temel ve ileri seviye boks teknikleri",
        "Pad ve torba çalışmaları",
        "Refleks ve koordinasyon geliştirme",
        "Fonksiyonel kuvvet antrenmanı",
        "Hedefe uygun beslenme yönlendirmesi"
      ]
    },
    {
      title: "Kick Boks Eğitimi",
      description: "Yumruk ve tekme kombinasyonları",
      details: [
        "Temel yumruk ve tekme teknikleri",
        "Kombinasyon çalışmaları",
        "Hız ve patlayıcı kuvvet antrenmanları",
        "Kardiyö ve dayanıklılık geliştirme"
      ]
    },
    {
      title: "Fitness & Fonksiyonel Antrenman",
      description: "Genel fiziksel gelişim",
      details: [
        "Yağ yakımı",
        "Kas kazanımı",
        "Sıkılaşma",
        "Postür düzeltme"
      ]
    },
    {
      title: "Kilo Verme Programı",
      description: "Hızlı ve etkili sonuç",
      details: [
        "Cardio temelli antrenman",
        "Interval çalışmalar",
        "Metabolizma hızlandırıcı egzersizler",
        "Beslenme yönlendirmesi"
      ]
    },
    {
      title: "Çocuk Boks Eğitimi",
      description: "5-10 yaş grup dersleri",
      details: [
        "Disiplin kazandırma",
        "Özgüven geliştirme",
        "Enerjiyi doğru yönlendirme",
        "Spor alışkanlığı kazandırma"
      ]
    },
    {
      title: "Yetişkin Grup Dersleri",
      description: "16+ yaş grup antrenmanları",
      details: [
        "Motivasyonu artıran ortam",
        "Tempolu çalışma",
        "Sosyal bağlantı",
        "Disiplinli antrenman sistemi"
      ]
    }
  ];

  const whyChoose = [
    { title: "Gerçek Sporcu Geçmişi", desc: "Milli takım seviyesinde yarışmış bir sporcu" },
    { title: "Kişiye Özel Sistem", desc: "Her öğrenci için ayrı planlama yapılır" },
    { title: "Disiplin + Motivasyon Dengesi", desc: "Sert değil, disiplinli. Yönlendirme esastır" },
    { title: "Sonuç Odaklı Yaklaşım", desc: "Gözle görülür değişim sağlamak amaçtır" },
    { title: "Her Seviyeye Uygun", desc: "Başlangıçtan müsabık seviyeye kadar" },
    { title: "Güvenli ve Kontrollü", desc: "Teknik eğitim önceliklidir" }
  ];

  const faqs = [
    {
      q: "Antrenmanlar nasıl geçer?",
      a: "Antrenmanlar kişiye özel planlanır. Teknik boks eğitimi, kondisyon çalışmaları, cardio ve fonksiyonel antrenmanlar birlikte uygulanır."
    },
    {
      q: "Dersler her seviyeye uygun mu?",
      a: "Evet. Hiç spor yapmamış kişilerden ileri seviye sporculara kadar herkes için özel program hazırlanır."
    },
    {
      q: "Beslenme programı veriliyor mu?",
      a: "Evet. Hedefe göre (kilo verme, kilo alma, performans artışı) beslenme yönlendirmesi yapılır."
    },
    {
      q: "Yarışmalara hazırlanabilir miyim?",
      a: "Evet. Müsabık sporcular için özel disiplinli antrenman programı uygulanır."
    },
    {
      q: "Hangi yaş aralığı kabul ediliyor?",
      a: "4 – 70 yaş arası öğrencilerimiz bulunmaktadır. 5 yaşında öğrencimiz de var, 60 yaşında öğrencimiz de. Her yaşa uygun program uygulanır."
    },
    {
      q: "Kadınlar için uygun mu?",
      a: "Evet. Kadın öğrenciler için özel program uygulanır. Boks aynı zamanda güçlü bir cardio ve sıkılaşma antrenmanıdır."
    },
    {
      q: "Daha önce spor yapmadım, başlayabilir miyim?",
      a: "Kesinlikle evet. Sıfırdan başlayan birçok öğrencimiz bulunmaktadır. Program seviyeye göre başlatılır."
    },
    {
      q: "Sakatlanma riski var mı?",
      a: "Kontrollü ve disiplinli çalışma sayesinde risk minimuma indirilir. Teknik eğitim önceliklidir."
    }
  ];

  const testimonialItems = testimonials.map((testimonial, index) => (
    <div key={index} className="px-4 py-8 md:px-8">
      <Card className="p-8 bg-background border-2 border-border h-full">
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
        <div className="border-t border-border pt-4">
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </Card>
    </div>
  ));

  return (
    <div className="min-h-screen bg-background text-foreground">
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
            <a href="#neden" className="hover:text-primary transition-colors duration-200">NEDEN BEN</a>
            <a href="#referanslar" className="hover:text-primary transition-colors duration-200">REFERANSLAR</a>
            <a href="#iletisim" className="hover:text-primary transition-colors duration-200">İLETİŞİM</a>
          </div>
          <Button 
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-105"
          >
            İLETİŞİME GEÇ
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663350946171/DNhDPATSdkTrEFxT.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        <div className="container relative z-10 text-center px-4 pt-20">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 border-2 border-primary bg-primary/10">
              <span className="text-primary text-sm font-bold tracking-widest">B.Y. FIGHT CLUB ACADEMY</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              KENDİNİN EN GÜÇLÜ VERSİYONU OL
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4">
              Kişiye Özel Boks, Kick Boks ve Fonksiyonel Antrenman Programları
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              4 – 70 Yaş Arası Profesyonel Eğitim
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Türkiye şampiyonluğu ve milli takım geçmişi olan antrenör Baki Yılmaz ile hedefe odaklı, disiplinli ve sonuç garantili antrenman sistemi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-bold"
              >
                ÖZEL DERS İÇİN İLETİŞİME GEÇ
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-bold"
              >
                ÜCRETSİZ ÖN GÖRÜŞME
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Özel Ders Avantajları */}
      <section className="py-20 bg-background border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              ÖZEL DERS İLE HIZLI VE NET SONUÇ
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Hedefin kilo vermek, kas yapmak, teknik öğrenmek ya da müsabık olmak olabilir. Her öğrenci için program farklıdır.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Teknik hatalar anında düzeltilir",
                "Kişisel tempo belirlenir",
                "Beslenme yönlendirmesi yapılır",
                "Gelişim birebir takip edilir"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-lg font-semibold mt-12 text-primary">
              Kısa sürede gözle görülür değişim hedeflenir.
            </p>
          </div>
        </div>
      </section>

      {/* Hakkımda */}
      <section id="hakkimda" className="py-20 bg-card border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">HAKKIMDA</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  Ben Baki Yılmaz. 1997 yılında boks branşına başladım ve 29 yıldır aktif olarak sporun içindeyim. Türkiye şampiyonluğu derecelerim ve milli takım geçmişim bulunmaktadır.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Üniversitede beden eğitimi öğretmenliği eğitimi aldım ve uzun yıllar hem sporcu hem antrenör olarak görev yaptım.
                </p>
                <p className="text-lg leading-relaxed">
                  Bugüne kadar yüzlerce öğrenci ile çalıştım. Amacım sadece teknik öğretmek değil; disiplin, özgüven ve sağlıklı yaşam alışkanlığı kazandırmaktır.
                </p>
              </div>
              <div className="bg-background p-8 border-2 border-border">
                <h3 className="text-2xl font-bold mb-6 text-primary">TECRÜBE, DİSİPLİN VE SONUÇ</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>1997'den beri aktif spor hayatı</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Türkiye şampiyonluğu dereceleri</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Milli takım geçmişi</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>29+ yıl tecrübe</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Yüzlerce memnun öğrenci</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-8 mb-8">
              <p className="text-lg italic">
                "Amacımız sadece spor yaptırmak değil, özgüven kazandırmak."
              </p>
            </div>

            <div className="bg-background p-8 border-2 border-border">
              <h3 className="text-2xl font-bold mb-6">YAŞ SINIRI VAR MI?</h3>
              <p className="text-lg mb-4">
                <span className="font-bold text-primary">4 – 70 yaş arası öğrencilerimiz bulunmaktadır.</span>
              </p>
              <p className="text-lg mb-4">
                5 yaşında öğrencimiz de var, 60 yaşında öğrencimiz de.
              </p>
              <p className="text-lg">
                Yaşa değil, doğru planlamaya odaklanıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" className="py-20 bg-background border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">HİZMETLERİMİZ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="p-8 bg-card border-2 border-border hover:border-primary transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-2 text-primary">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card border-2 border-border p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">GRUP DERS PROGRAMI</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">✅ Hafta İçi</h4>
                <p className="text-lg">16 yaş ve üzeri yetişkin grup dersleri</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">✅ Hafta Sonu</h4>
                <p className="text-lg mb-2">5–10 yaş çocuk grup dersleri</p>
                <p className="text-lg">Saat aralığı: 12:00 – 13:00</p>
                <p className="text-sm text-muted-foreground mt-2">*Gün ve saatler dönemsel olarak değişebilir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Baki Yılmaz */}
      <section id="neden" className="py-20 bg-card border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">NEDEN BAKİ YILMAZ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, i) => (
              <Card key={i} className="p-8 bg-background border-2 border-border">
                <div className="text-4xl font-bold text-primary mb-4">{i + 1}️⃣</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referanslar */}
      <section id="referanslar" className="py-20 bg-background border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">MÜŞTERİ YORUMLARI</h2>
          <Carousel items={testimonialItems} />
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 bg-card border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">SIKÇA SORULAN SORULAR</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-8 bg-background border-2 border-border">
                <h3 className="text-xl font-bold mb-4 text-primary">{faq.q}</h3>
                <p className="text-lg text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">HAZIRSAN BAŞLAYALIM</h2>
          <p className="text-2xl text-muted-foreground mb-8">
            Değişim karar ile başlar. İlk adımı at, programını birlikte planlayalım.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-bold"
          >
            📞 HEMEN İLETİŞİME GEÇ
          </Button>
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="py-20 bg-card border-t-4 border-primary animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">HEMEN BAŞLAYALIM</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            {/* İletişim Bilgileri */}
            <div className="space-y-8">
              <div className="bg-background p-8 border-2 border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">📱 WhatsApp</h3>
                <p className="text-muted-foreground mb-4">Hızlı iletişim için WhatsApp üzerinden ulaşın</p>
                <a 
                  href="https://wa.me/905XXXXXXXXX" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 font-bold hover:bg-primary/90 transition-colors"
                >
                  WHATSAPP'TAN YAZ
                </a>
              </div>

              <div className="bg-background p-8 border-2 border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">📍 Konum</h3>
                <p className="font-bold mb-2">B.Y. Fight Club Academy</p>
                <p className="text-muted-foreground">Ataşehir, İstanbul</p>
              </div>

              <div className="bg-background p-8 border-2 border-border">
                <h3 className="text-2xl font-bold mb-6 text-primary">Sosyal Medya</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/baki_ylmaz?igsh=MXZ5ank5NjVqenQ5Yg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@bakiyilmazfightclub?_r=1&_t=ZS-93tQ4XNjv16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@bakiylmaz6484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-background p-8 border-2 border-border">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <input 
                    type="tel"
                    placeholder="05XX XXX XX XX"
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <input 
                    type="email"
                    placeholder="ornek@email.com"
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:border-primary">
                    <option>Seçiniz...</option>
                    <option>Boks Özel Ders</option>
                    <option>Kick Boks</option>
                    <option>Fitness</option>
                    <option>Grup Dersleri</option>
                    <option>Diğer</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Hedeflerinizi ve beklentilerinizi paylaşın..."
                    rows={4}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 font-bold text-lg">
                  MESAJ GÖNDER
                </Button>
              </form>
            </div>
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
              <h4 className="font-bold mb-4">Projeler</h4>
              <a href="#referanslar" className="text-muted-foreground hover:text-primary transition-colors">Başarı Hikayeleri</a>
            </div>
            <div>
              <h4 className="font-bold mb-4">İletişim</h4>
              <a href="#iletisim" className="text-muted-foreground hover:text-primary transition-colors">Bize Ulaşın</a>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 B.Y. Fight Club Academy. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
