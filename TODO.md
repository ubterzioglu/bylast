# Mobil Uyumluluk (Responsive) İyileştirme Planı

Bu dosya, projede tespit edilen mobil uyumluluk sorunlarının çözümü için yapılacaklar listesini içermektedir.

## 🔴 Kritik ve Yüksek Öncelikli Düzeltmeler

- [x] **Navigasyon ve Header (Menü)**
  - `client/src/pages/Home.tsx` dosyasındaki masaüstü menü linkleri mobilde gizlenecek (`hidden lg:flex`).
  - Mobil cihazlar için bir Hamburger Menü (açılır/kapanır menü) eklenecek.

- [x] **Carousel Bileşeni (Layout & Structure)**
  - `client/src/components/Carousel.tsx` dosyasında `itemsPerPage={5}` değeri sabit olmaktan çıkarılacak.
  - Mobilde 1, tablette 2-3, masaüstünde 5 öğe gösterecek şekilde dinamik hale getirilecek.
  - Yönlendirme butonları mobilde içeriği sıkıştırmaması için alt kısma alınacak.

- [x] **Hero Bölümü (Tipografi ve Boyutlandırma)**
  - `client/src/pages/Home.tsx` dosyasındaki ana başlık boyutu mobilde küçültülecek (`text-4xl md:text-6xl lg:text-7xl`).
  - Logo boyutu mobilde ekranı kaplamaması için küçültülecek (`h-40 md:h-72`).

## 🟡 Orta Öncelikli Düzeltmeler

- [x] **Genel Tipografi (Başlıklar ve Metinler)**
  - Tüm sayfalardaki bölüm başlıkları (`text-5xl`) mobilde daha küçük olacak şekilde güncellenecek (`text-3xl md:text-5xl`).
  - "Hakkımda" bölümündeki paragraf metinleri mobilde daha okunaklı olması için küçültülecek (`text-lg md:text-2xl`).

- [x] **Video Performansı ve Mobil UX**
  - Hero bölümündeki arka plan videosuna `poster` (yüklenmeden önce görünecek görsel) eklenecek.
  - iOS cihazlarda otomatik oynatma sorunu yaşamamak için `playsInline` özelliği eklenecek.

## 🟢 Düşük Öncelikli ve UX İyileştirmeleri

- [x] **Galeri Navigasyon Butonları**
  - `client/src/pages/Gallery.tsx` dosyasının en altındaki butonlar çok küçük ekranlarda yan yana sığmayacağı için alt alta dizilecek şekilde güncellenecek (`flex-col sm:flex-row`).

- [x] **Gelişmiş UX İyileştirmeleri**
  - **Dokunma Alanları (Touch Targets):** SSS bölümündeki `<summary>` etiketleri ve Carousel noktaları gibi tıklanabilir alanlara minimum `min-h-[44px]` yüksekliği verilecek.
  - **Safe Area Insets:** Çentikli telefonlar (iPhone vb.) için alt kısımlara `pb-safe` (veya `padding-bottom: env(safe-area-inset-bottom)`) eklenecek.
  - **Tap Highlight:** Mobilde butonlara tıklandığında çıkan mavi efekti kaldırmak için `[-webkit-tap-highlight-color:transparent]` eklenecek.
  - **Scroll Padding:** Sabit header'ın (h-20) sayfa içi linklere tıklandığında içeriğin üstünü kapatmaması için `index.css` dosyasına `html { scroll-padding-top: 5rem; }` eklenecek.
