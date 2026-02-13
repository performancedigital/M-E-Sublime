
import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  ChevronDown, 
  ChevronUp,
  ExternalLink,
  Gift,
  Zap,
  Star,
  Coffee,
  Heart,
  Truck,
  ShieldCheck,
  Smile
} from 'lucide-react';
import { 
  COLLECTIONS, 
  STEPS, 
  TESTIMONIALS, 
  FAQ, 
  DIFFERENTIATORS 
} from './constants';

const App: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5531997469802?text=Olá M&E Sublime! Quero criar uma caneca personalizada exclusiva!', '_blank');
  };

  return (
    <div className="min-h-screen text-[#3D2B1F] selection:bg-[#F2C1C9] selection:text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-16 h-16 logo-ring overflow-hidden flex items-center justify-center bg-white shadow-inner group-hover:scale-110 transition-transform">
               {/* Caminho absoluto da raiz do repositório */}
               <img 
                 src="/logo.png" 
                 alt="M&E Sublime" 
                className="w-54 md:w-70 lg:w-86 object-contain" 
                 />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl tracking-tighter leading-none gold-text-gradient uppercase">SUBLIME</span>
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#C5A059]/80">Artes & Personalizados</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#colecoes" className="text-sm font-bold uppercase tracking-widest hover:text-[#C5A059] transition-colors">Coleções</a>
            <a href="#processo" className="text-sm font-bold uppercase tracking-widest hover:text-[#C5A059] transition-colors">Como Funciona</a>
            <button 
              onClick={handleWhatsApp}
              className="btn-gold text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all active:scale-95 shadow-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] watercolor-bg blur-[100px] opacity-60 -z-10"></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] watercolor-bg blur-[80px] opacity-40 -z-10"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-[#C5A059]/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059]">Qualidade Premium Garantida</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold leading-[0.95] text-[#3D2B1F]">
              Eternize seu <br />
              <span className="gold-text-gradient italic font-serif">melhor momento</span> <br />
              em uma caneca.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed font-medium">
              Muito mais que cerâmica. Criamos peças exclusivas que transformam o café da manhã em uma viagem no tempo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button 
                onClick={handleWhatsApp}
                className="btn-gold text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl flex items-center justify-center gap-4 hover:scale-105 transition-transform"
              >
                Personalizar Agora <ArrowRight className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-4 px-6 py-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${i+20}`} className="w-10 h-10 rounded-full border-2 border-white shadow-md" alt="User" />)}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#3D2B1F]/60">
                   <span className="text-[#C5A059] block">+4.000 clientes</span>
                   apaixonados por café
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative flex justify-center">
            <div className="relative animate-float-mug">
              <div className="absolute -inset-10 border-2 border-[#C5A059]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute -inset-16 border border-[#F2C1C9]/30 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
              
              <img 
                src="/hero-caneca.jpg" 
                alt="Caneca Personalizada M&E Sublime" 
                className="relative z-10 w-full max-w-[500px] rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(61,43,31,0.3)] border-[16px] border-white object-cover aspect-square"
              />
              
              <div className="absolute -bottom-10 -right-6 glass-nav p-6 rounded-3xl shadow-2xl border border-white/50 z-20 flex items-center gap-4 backdrop-blur-xl">
                 <div className="w-12 h-12 rounded-2xl bg-[#C5A059] flex items-center justify-center text-white shadow-lg">
                    <Coffee className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Feito à mão</p>
                    <p className="font-bold text-sm">Presente Único</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section id="colecoes" className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-[#3D2B1F]">Escolha seu nicho</h2>
              <div className="w-32 h-1.5 btn-gold rounded-full"></div>
            </div>
            <p className="text-gray-500 max-w-md font-medium">Designs pensados para cada perfil. Selecione o que mais combina com quem você quer presentear.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {COLLECTIONS.map((col) => (
              <div key={col.id} className="group relative cursor-pointer mug-card-shadow rounded-[3rem] overflow-hidden bg-[#FDFBF9] transition-all hover:-translate-y-4">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={col.image} 
                    alt={col.title} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-3xl font-bold text-white mb-2">{col.title}</h3>
                  <p className="text-sm text-white/80 mb-6 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">{col.description}</p>
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full py-4 rounded-2xl bg-white text-[#3D2B1F] font-bold text-sm uppercase tracking-widest shadow-xl flex items-center justify-center gap-2"
                  >
                    Personalizar <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sessão Personalizada - Imagem "Caneca Borboleta" enviada */}
      <section className="py-32 bg-[#FCF9F7] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full watercolor-bg opacity-30"></div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="relative">
             <div className="absolute -inset-4 gold-border-gradient border-2 opacity-30 rounded-[3rem]"></div>
             {/* Referência à imagem na raiz do repositório */}
             <img 
               src="/caneca-premium.jpg" 
               alt="Sua Caneca Premium M&E Sublime" 
               className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[700px] object-cover"
             />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                   <Heart className="w-12 h-12 text-white fill-current" />
                </div>
             </div>
          </div>
          
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[#C5A059] font-bold uppercase tracking-[0.3em] text-sm">Nossa Essência</span>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">Canecas feitas para durar <span className="italic font-serif gold-text-gradient">uma vida inteira.</span></h2>
            </div>
            
            <p className="text-lg text-gray-500 leading-relaxed font-medium">
              Utilizamos cerâmica AAA de brilho intenso e tecnologia de sublimação de alta temperatura. O resultado? Uma estampa que não desbota, não descasca e mantém o brilho do primeiro dia, mesmo após centenas de lavagens.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F2C1C9]/20 flex items-center justify-center text-[#F2C1C9]">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-lg">Resistente a tudo</h4>
                <p className="text-sm text-gray-400">Micro-ondas e lava-louças liberados com segurança total.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059]">
                  <Truck className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-lg">Entrega Blindada</h4>
                <p className="text-sm text-gray-400">Embalagem pensada para que nada estrague sua surpresa.</p>
              </div>
            </div>
            <div className="pt-6">
                <button 
                  onClick={handleWhatsApp}
                  className="btn-gold text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl flex items-center gap-3 hover:scale-105 transition-transform"
                >
                  <MessageSquare className="w-6 h-6" /> Quero uma igual a esta
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="processo" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto space-y-4">
            <h2 className="text-5xl font-bold">Rápido e sem burocracia</h2>
            <p className="text-gray-500 font-medium">Da sua ideia ao café quentinho na caneca nova, em apenas 5 passos simples.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
            
            {STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl border-2 border-transparent group-hover:border-[#C5A059] transition-all duration-500 transform group-hover:scale-110">
                  <div className="text-[#C5A059] group-hover:text-[#F2C1C9] transition-colors">{step.icon}</div>
                </div>
                <div className="bg-[#3D2B1F] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-6 group-hover:bg-[#C5A059] transition-colors">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-xs text-gray-400 font-medium leading-relaxed px-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 bg-[#3D2B1F] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full watercolor-bg opacity-10 blur-[120px]"></div>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold italic font-serif gold-text-gradient">O que nossos clientes dizem</h2>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">Já entregamos milhares de canecas e cada depoimento nos motiva a buscar a perfeição em cada pixel.</p>
              <div className="flex gap-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" />)}
              </div>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {TESTIMONIALS.slice(0, 2).map((t) => (
                <div key={t.id} className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-8">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-[#C5A059]" />
                    <div>
                      <h4 className="font-bold text-lg">{t.name}</h4>
                      <p className="text-[10px] uppercase font-bold text-[#C5A059] tracking-widest">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 italic leading-relaxed">“{t.content}”</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-bold text-[#3D2B1F]">Dúvidas Frequentes</h2>
            <p className="text-gray-500 font-medium">Tudo o que você precisa saber para pedir com segurança.</p>
          </div>
          
          <div className="space-y-6">
            {FAQ.map((item, idx) => (
              <div key={idx} className="bg-[#FCF9F7] rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-10 py-8 text-left flex justify-between items-center"
                >
                  <span className="font-bold text-xl text-[#3D2B1F]">{item.question}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeFaq === idx ? 'bg-[#C5A059] text-white rotate-180' : 'bg-gray-200 text-gray-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div className={`transition-all duration-500 ease-in-out ${activeFaq === idx ? 'max-h-96 opacity-100 pb-10 px-10' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p className="text-gray-500 font-medium leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] watercolor-bg opacity-40 blur-[150px] -z-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold text-[#3D2B1F] mb-12 leading-none">
            Pronto para <br />
            <span className="gold-text-gradient italic font-serif">eternizar</span> seu momento?
          </h2>
          <p className="text-xl text-gray-500 mb-16 max-w-2xl mx-auto font-medium">
            Clique no botão abaixo, fale conosco no WhatsApp e receba uma caneca sublime em sua casa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button 
              onClick={handleWhatsApp}
              className="btn-gold text-white px-16 py-8 rounded-3xl font-bold text-2xl shadow-2xl hover:scale-105 transition-all flex items-center gap-6"
            >
              Criar Minha Caneca Agora <ArrowRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer Atualizado */}
      <footer className="bg-[#3D2B1F] text-white pt-32 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-20 mb-32">
            <div className="md:col-span-2 space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center bg-white shadow-2xl border-4 border-white/20 overflow-hidden">
                  <img src="/logo.png" alt="M&E Sublime" className="w-full h-full object-contain p-1" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-3xl tracking-tighter leading-none gold-text-gradient uppercase">SUBLIME</span>
                  <span className="text-xs tracking-[0.4em] uppercase font-bold text-[#C5A059]">Artes & Personalizados</span>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                Transformando sentimentos em presentes únicos. Excelência em canecas personalizadas desde 2020.
              </p>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] transition-colors"><Instagram /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] transition-colors"><Facebook /></a>
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="font-bold text-lg uppercase tracking-widest text-[#C5A059]">Atendimento</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li>Segunda a Sexta: 09h às 18h</li>
                <li>Sábado: 09h às 13h</li>
                <li>WhatsApp: (31) 99746-9802</li>
              </ul>
            </div>
            
            <div className="space-y-8">
              <h4 className="font-bold text-lg uppercase tracking-widest text-[#C5A059]">Dados da Empresa</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li>CNPJ: 64.175.596/0001-43</li>
                <li>M&E Sublime - 2026</li>
                <li>Atendimento 100% Digital</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            <p>© 2026 M&E Sublime. Todos os direitos reservados. CNPJ: 64.175.596/0001-43</p>
            <p className="flex items-center gap-2 italic">M&E Sublime – Porque todo presente pode ser eterno <Heart className="w-3 h-3 text-[#F2C1C9] fill-current" /></p>
          </div>
        </div>
      </footer>

      {/* Floating Button WhatsApp Desktop */}
      <button 
        onClick={handleWhatsApp}
        className="fixed bottom-10 right-10 z-[100] w-20 h-20 bg-[#25D366] rounded-full shadow-2xl hidden md:flex items-center justify-center text-white hover:scale-110 transition-transform animate-bounce-short border-4 border-white/20"
      >
        <MessageSquare className="w-10 h-10" />
      </button>

      {/* Sticky Mobile CTA com cor do WhatsApp */}
      <div className="fixed bottom-0 left-0 right-0 p-6 z-[100] md:hidden">
        <button 
          onClick={handleWhatsApp}
          className="w-full bg-[#25D366] text-white py-6 rounded-3xl font-bold text-xl shadow-[0_20px_40px_-10px_rgba(37,211,102,0.6)] flex items-center justify-center gap-4 animate-bounce-short border-b-4 border-green-700"
        >
          <MessageSquare className="w-6 h-6" />
          Falar no WhatsApp
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .animate-bounce-short {
          animation: bounce-short 4s ease-in-out infinite;
        }
        @keyframes bounce-short {
          0%, 100% {transform: translateY(0);}
          50% {transform: translateY(-10px);}
        }
      `}</style>
    </div>
  );
};

export default App;
