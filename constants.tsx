
import React from 'react';
import { 
  Camera, 
  Palette, 
  CheckCircle, 
  Package, 
  Coffee, 
  Heart, 
  Star,
  ShieldCheck,
  Zap,
  Gift,
  Smile,
  Truck
} from 'lucide-react';
import { Collection, Testimonial, Step, FAQItem } from './types';

export const COLLECTIONS: Collection[] = [
  { 
    id: '1', 
    title: 'Aniversários', 
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop', 
    description: 'Celebre a vida de quem você ama com um presente que será usado todos os dias.' 
  },
  { 
    id: '2', 
    title: 'Dia das Mães', 
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop', 
    description: 'Um gesto de carinho para a mulher mais importante da sua vida.' 
  },
  { 
    id: '3', 
    title: 'Dia dos Namorados', 
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop', 
    description: 'Eternize o amor de vocês em uma peça exclusiva e romântica.' 
  },
];

export const STEPS: Step[] = [
  { title: 'Sua Ideia', description: 'Você nos envia a foto, frase ou tema pelo WhatsApp.', icon: <Camera className="w-8 h-8" /> },
  { title: 'Nossa Arte', description: 'Criamos um layout exclusivo seguindo seu estilo.', icon: <Palette className="w-8 h-8" /> },
  { title: 'Sua Aprovação', description: 'Só produzimos após você amar cada detalhe da arte.', icon: <CheckCircle className="w-8 h-8" /> },
  { title: 'Produção Premium', description: 'Sublimação em alta temperatura para brilho eterno.', icon: <Zap className="w-8 h-8" /> },
  { title: 'Entrega Segura', description: 'Embalagem especial anti-impacto em todo o Brasil.', icon: <Truck className="w-8 h-8" /> },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Juliana Oliveira', role: 'Presente de Aniversário', content: 'Fiquei impressionada com a nitidez da foto na caneca. Foi o presente de aniversário perfeito para o meu pai!', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop', stars: 5 },
  { id: 2, name: 'Marcos Silva', role: 'Presente Romântico', content: 'Minha namorada amou a caneca que fizemos com nossa foto da viagem. Qualidade premium mesmo.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop', stars: 5 },
  { id: 3, name: 'Renata Castro', role: 'Dia das Mães', content: 'Melhor presente que já dei à minha mãe. O acabamento é impecável e não desbota.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop', stars: 5 },
];

export const FAQ: FAQItem[] = [
  { question: 'A caneca pode ir no micro-ondas?', answer: 'Sim! Nossas canecas de cerâmica premium são resistentes ao calor intenso e ao frio, seguras para micro-ondas e lava-louças.' },
  { question: 'Como envio minha foto?', answer: 'Após o clique no botão de compra, você será direcionado ao nosso WhatsApp, onde poderá enviar arquivos com facilidade.' },
  { question: 'Qual o tempo de produção?', answer: 'Após a aprovação da arte, sua caneca fica pronta em até 48h úteis.' },
  { question: 'E se a caneca quebrar no envio?', answer: 'Temos garantia total! Se sua caneca chegar com qualquer dano, enviamos uma nova sem custo algum.' },
];

export const DIFFERENTIATORS = [
  { title: 'Sublimação HD', icon: <Zap className="w-6 h-6" />, desc: 'Cores que não desbotam.' },
  { title: 'Cerâmica AAA', icon: <Star className="w-6 h-6" />, desc: 'O melhor material do mercado.' },
  { title: 'Arte Inclusa', icon: <Palette className="w-6 h-6" />, desc: 'Não cobramos para montar sua arte.' },
  { title: 'Embalagem "Garantia"', icon: <ShieldCheck className="w-6 h-6" />, desc: 'Chega inteira ou novo envio.' },
  { title: 'Toque Sublime', icon: <Heart className="w-6 h-6" />, desc: 'Feito com carinho artesanal.' },
];
