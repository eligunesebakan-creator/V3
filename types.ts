
export interface Property {
  id: string;
  title: string;
  type: 'Office' | 'Retail' | 'Industrial' | 'Multi-family';
  location: string;
  size: string;
  price?: string;
  imageUrl: string;
  featured: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
