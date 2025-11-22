import React from 'react';
import { ServiceItem, DifferentialItem, FAQItem, TestimonialItem } from './types';

// ==========================================
// CONFIGURAÇÃO DE IMAGENS E LINKS
// ==========================================
// Configurado para ler as imagens da pasta /assets na raiz do projeto.

export const IMAGES = {
  // Logotipo Principal (Retangular)
  LOGO: "/assets/mjl-logotipo-advocacia-porto-alegre.png",
  
  // Foto do advogado (Germano) para a seção Sobre (Card do Fundador)
  LAWYER_PHOTO: "/assets/germano.webp",
  
  // Foto secundária para a seção Sobre (Imagem principal da seção)
  // Estou usando a 'mjladv.webp' aqui. Se preferir a do 'Avatar', basta alterar para "/assets/Avatar MJL Advocacia Causa Imobiliaria.webp"
  OFFICE_PHOTO: "/assets/mjladv.webp",
  
  // Fundo da seção Hero (Topo) - Mantido Unsplash pois as imagens enviadas parecem ser verticais/quadradas
  // Se tiver um banner largo, coloque na pasta assets e altere aqui.
  HERO_BG: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
};

export const WHATSAPP_LINK = "https://wa.me/5551981817991";
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/eFZnrr1D12WM2jCMA";

// URL do Iframe do Google Maps (Gerado para o endereço cadastrado)
export const MAP_IFRAME_SRC = "https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=Rua%20Professor%20Langendonck,%20n%C2%BA%2037,%20conjunto%20n%C2%BA%20503,%20bairro%20Petr%C3%B3polis,%20Porto%20Alegre/RS&t=&z=15&ie=UTF8&iwloc=B&output=embed";

export const CONTACT_INFO = {
  address: "Rua Professor Langendonck, nº 37, conjunto nº 503, bairro Petrópolis, Porto Alegre/RS",
  phone: "(51) 3062-7991",
  mobile: "(51) 98181-7991",
  email: "contato@mjl.adv.br",
  website: "www.mjl.adv.br"
};


// ==========================================
// ÍCONES E DADOS (Não alterar a menos que necessário)
// ==========================================

// Simple SVG Icons components for zero-dependency
// Added aria-hidden="true" by default as they are usually decorative icons accompanied by text.
export const BuildingIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>
);

export const FamilyIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 12h6"/><path d="M12 3v9"/><path d="M7.2 3.8l4.8 3.2 4.8-3.2"/><circle cx="12" cy="17" r="4"/></svg> // Abstract family/tree
);

export const BriefcaseIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);

export const BoltIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

export const UsersIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export const ScaleIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
);

export const HeartHandshakeIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

export const ShieldCheckIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);

export const ClockIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

export const MapPinIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export const PhoneIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

export const MailIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

// Star Icon for Reviews
export const StarIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

export const GoogleIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" {...props}><path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
);

// Data
export const SERVICES: ServiceItem[] = [
  {
    title: "Direito Imobiliário",
    icon: BuildingIcon,
    items: [
      "Assessoria para condomínios",
      "Compra e venda de imóveis",
      "Atraso na entrega e vícios construtivos",
      "Regularização de imóveis",
      "Locação e ações possessórias"
    ]
  },
  {
    title: "Família e Sucessões",
    icon: FamilyIcon,
    items: [
      "Divórcios consensuais e litigiosos",
      "Guarda e alimentos",
      "União estável (reconhecimento/dissolução)",
      "Inventários e partilhas",
      "Planejamento sucessório"
    ]
  },
  {
    title: "Holding Familiar",
    icon: ShieldCheckIcon,
    items: [
      "Constituição de holdings patrimoniais",
      "Redução de custos tributários",
      "Proteção de bens familiares"
    ]
  },
  {
    title: "Direito Empresarial",
    icon: BriefcaseIcon,
    items: [
      "Constituição de empresas",
      "Contratos comerciais",
      "Recuperação de crédito",
      "Assessoria preventiva e contenciosa"
    ]
  },
  {
    title: "Direito da Energia",
    icon: BoltIcon,
    items: [
      "Enquadramento tarifário",
      "Recuperação de valores em convênios",
      "Indenizações por instabilidade",
      "Atuação administrativa"
    ]
  },
  {
    title: "Direito Trabalhista",
    icon: UsersIcon,
    items: [
      "Reclamatórias trabalhistas",
      "Cálculo de verbas rescisórias",
      "Assédio moral e doenças ocupacionais",
      "Consultoria preventiva para empresas"
    ]
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    title: "Atendimento Personalizado",
    description: "Atendimento humanizado, focado nas necessidades específicas de cada cliente.",
    icon: HeartHandshakeIcon
  },
  {
    title: "Segurança Jurídica",
    description: "Planejamento jurídico focado na prevenção de problemas e economia processual.",
    icon: ShieldCheckIcon
  },
  {
    title: "Agilidade",
    description: "Comunicação direta com o advogado e rapidez na resolução de demandas.",
    icon: ClockIcon
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Carlos Eduardo",
    rating: 5,
    date: "há 2 meses",
    text: "Excelente atendimento! O Dr. Germano foi muito atencioso e resolveu meu problema imobiliário com agilidade e competência. Recomendo fortemente."
  },
  {
    name: "Fernanda Souza",
    rating: 5,
    date: "há 5 meses",
    text: "Profissionais de extrema confiança. Me senti segura durante todo o processo de inventário. A clareza nas explicações fez toda a diferença."
  },
  {
    name: "Roberto Almeida",
    rating: 5,
    date: "há 1 ano",
    text: "A MJL Advocacia superou minhas expectativas na assessoria empresarial. Têm uma visão estratégica que ajudou muito minha empresa."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Vocês atendem só Porto Alegre?",
    answer: "Nosso escritório físico está em Porto Alegre, mas atendemos demandas em outras regiões e online através de videoconferências e processos digitais."
  },
  {
    question: "Eu falo direto com advogado?",
    answer: "Sim. Prezamos pelo atendimento direto e transparente. Você terá acesso ao advogado responsável pelo seu caso."
  },
  {
    question: "Consulta é cobrada?",
    answer: "A cobrança de consulta depende da complexidade do caso. Entre em contato conosco pelo WhatsApp para uma avaliação inicial."
  },
  {
    question: "Quais documentos devo separar?",
    answer: "Isso varia conforme a área (Imobiliário, Família, etc.). Em nosso primeiro contato, enviaremos uma lista personalizada para sua necessidade."
  }
];