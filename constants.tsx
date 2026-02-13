
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
    title: 'Linha Afeto', 
    image: 'https://images.unsplash.com/photo-1544787210-282ce43604bc?q=80&w=600&auto=format&fit=crop', 
    description: 'Eternize fotos de família e momentos que aquecem o peito.' 
  },
  { 
    id: '2', 
    title: 'Amor & Romance', 
    image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=600&auto=format&fit=crop', 
    description: 'Para o casal que divide mais do que apenas o café.' 
  },
  { 
    id: '3', 
    title: 'Pet Lovers', 
    image: 'https://images.unsplash.com/photo-1535914223966-3240a28351c4?q=80&w=600&auto=format&fit=crop', 
    description: 'A fofula do seu pet estampada com perfeição.' 
  },
  { 
    id: '4', 
    title: 'Doses de Orgulho', 
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=600&auto=format&fit=crop', 
    description: 'Canecas personalizadas com sua profissão ou conquista.' 
  },
  { 
    id: '5', 
    title: 'Geek & Arte', 
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop', 
    description: 'Designs exclusivos para fãs de filmes, séries e jogos.' 
  },
  { 
    id: '6', 
    title: 'Eventos & Marcas', 
    image: 'https://images.unsplash.com/photo-1536939459926-301728717817?q=80&w=600&auto=format&fit=crop', 
    description: 'Identidade visual e elegância para sua empresa ou festa.' 
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
  { id: 1, name: 'Juliana Paiva', role: 'Presente de Aniversário', content: 'Minha mãe chorou quando viu a foto dos netos na caneca. A qualidade é surreal, cores vivas e o brilho é lindo!', image: 'https://i.pravatar.cc/150?u=ju', stars: 5 },
  { id: 2, name: 'Marcos Oliveira', role: 'Colecionador', content: 'Fiz uma caneca Geek personalizada e superou minhas expectativas. Acabamento perfeito e entrega rápida.', image: 'https://i.pravatar.cc/150?u=ma', stars: 5 },
  { id: 3, name: 'Renata Souza', role: 'Empresária', content: 'Encomendei para os brindes da empresa e todos amaram. A M&E Sublime é profissional demais!', image: 'https://i.pravatar.cc/150?u=re', stars: 5 },
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
