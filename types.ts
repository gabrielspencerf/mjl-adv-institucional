export interface ServiceItem {
  title: string;
  items: string[];
  icon: React.FC<any>;
}

export interface DifferentialItem {
  title: string;
  description: string;
  icon: React.FC<any>;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  text: string;
  rating: number;
  date: string;
}