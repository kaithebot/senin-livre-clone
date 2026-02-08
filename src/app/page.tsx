"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#aa8267]/10 rounded-full blur-3xl" />
        </div>
        <div className="hero-content relative z-10 max-w-5xl mx-auto space-y-8">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 text-sm font-medium">
            Sevgililər Gününün #1 Hədiyyəsi
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
            Sevincdən<br /><span className="text-[#e9e1d0]">Ağladıran</span> Hədiyyə
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Sevginizin hekayəsi, unikal bir kitabda əbədiləşdirildi.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><span>✓</span><span>Məmnun qalmasanız, pulunuz qaytarılır</span></div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><span>🚚</span><span>Pulsuz çatdırılma</span></div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><span>★★★★★</span><span>Cütlüklər tərəfindən sevilir</span></div>
          </div>
          <div className="pt-4">
            <a href="#create" className="inline-block bg-gradient-to-r from-[#aa8267] to-[#c4956a] text-[#09090d] px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl">✨ Kitabınızı Yaradın</a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Necə İşləyir?</h2>
            <p className="text-xl text-white/80">3 sadə addımda unikal kitabınızı yaradın</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[{num:"1",title:"Formu Doldurun",desc:"Bir neçə suala cavab verin və şəklinizi əlavə edin."},{num:"2",title:"Önizləməni Alın",desc:"12 saat ərzində WhatsApp-da önizləməni alın."},{num:"3",title:"Təsdiq Edin",desc:"Dizaynı təsdiq edin, biz çap edib çatdırırıq."}].map((step,i)=>(
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#aa8267] to-[#c4956a] rounded-full flex items-center justify-center text-2xl font-bold mx-auto">{step.num}</div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-white/80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Niyə Sehrli Kitab?</h2>
            <p className="text-xl text-white/80">Zibilə atılan hədiyyələri unudun</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-white/60">Klassik Hədiyyələr</h3>
              <ul className="space-y-3 text-white/70"><li>✗ 3 gündə solur</li><li>✗ Zibilliyə atılır</li><li>✗ Unudulur</li></ul>
              <div className="mt-6 text-white/40 font-medium">Keçmişdə qaldı</div>
            </div>
            <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/30">
              <h3 className="text-2xl font-bold mb-4">Sehrli Kitab</h3>
              <ul className="space-y-3 text-white"><li>✓ Ömür boyu qalır</li><li>✓ Hər səhifə bir hisdir</li><li>✓ Əbədi xatirə</li></ul>
              <div className="mt-6 text-[#e9e1d0] font-bold">Əbədi Hədiyyə</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Onlar Aşiq Oldular ❤️</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[{text:"Səmimi deyirəm, alanda ağladım! Keyfiyyət inanılmazdır.",author:"Sara K.",location:"Bakı"},{text:"2 illiyimiz üçün orijinal hədiyyə axtarırdım və bu mükəmməldir!",author:"Muna və Kərim",location:"Bakı"},{text:"Möhtəşəm müştəri xidməti. Nəticə əladır!",author:"Fatimə Zahra",location:"Gəncə"}].map((t,i)=>(
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 space-y-4">
                <div className="text-yellow-400 text-xl">★★★★★</div>
                <p className="text-white/90 leading-relaxed italic">"{t.text}"</p>
                <div className="pt-4 border-t border-white/10">
                  <div className="font-bold">{t.author}</div>
                  <div className="text-white/60 text-sm">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Tez-tez Verilən Suallar</h2>
          </div>
          <div className="space-y-6">
            {[{q:"Kitabı əvvəlcədən görə bilərəmmi?",a:"Əlbəttə! Sifarişdən sonra WhatsApp-da pulsuz önizləmə göndəririk. Təsdiqiniz olmadan heç nə çap etmirik!"},{q:"Çatdırılma müddəti nə qədərdir?",a:"Hekayənizin yaradılması 12 saatdan az çəkir. Fiziki çatdırılma 24-48 saat ərzində həyata keçirilir."},{q:"Ödəniş necə olur?",a:"Ödəniş yalnız çatdırılmada həyata keçirilir. Paketi əlinizə alana qədər heç nə ödəmirsiniz."}].map((f,i)=>(
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h3 className="text-xl font-bold mb-3">{f.q}</h3>
                <p className="text-white/80 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="create" className="py-24 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Sevginizi Əbədiləşdirin</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Bu Sevgililər Günündə unudulmaz bir hədiyyə yaradın.</p>
          <a href="https://wa.me/994000000000?text=Salam! Sehrli kitab sifariş etmək istəyirəm." target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-[#aa8267] to-[#c4956a] text-[#09090d] px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl">🎁 İndi Sifariş Et — WhatsApp</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#09090d] py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-3"><span>📚</span> Sehrli Kitab</h3>
              <p className="text-white/70 max-w-md leading-relaxed">Sevginizi əbədiləşdirin. Hər kitab unikal, hər hekayə xüsusi.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#aa8267] text-lg">Əlaqə</h4>
              <ul className="space-y-3 text-white/70">
                <li>📱 +994 00 000 00 00</li>
                <li>📧 info@sehrlikitab.az</li>
                <li>📍 Bakı, Azərbaycan</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50">© 2024 Sehrli Kitab. Bütün hüquqlar qorunur.</div>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/994000000000?text=Salam! Sehrli kitab haqqında məlumat almaq istəyirəm." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-xl hover:scale-110 transition-transform z-40">💬</a>
    </main>
  );
}
