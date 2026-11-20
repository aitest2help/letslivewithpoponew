import React from 'react';
import {
  Heart,
  Home,
  HandHeart,
  Sun,
  MessageCircle,
  User,
  NotebookPen,
  Footprints,
  Utensils,
  ShieldAlert,
  Moon,
  ShieldCheck,
  BookOpen,
  Clock,
  Phone,
  Sparkles,
} from 'lucide-react';
import type { SectionIconName } from '../data/types';

interface SectionIconProps {
  name: SectionIconName;
  className?: string;
}

export const SectionIcon: React.FC<SectionIconProps> = ({ name, className = 'w-5 h-5' }) => {
  const props = { className, strokeWidth: 1.75, 'aria-hidden': true as const };

  switch (name) {
    case 'heart':
      return <Heart {...props} />;
    case 'home':
      return <Home {...props} />;
    case 'hand':
      return <HandHeart {...props} />;
    case 'sun':
      return <Sun {...props} />;
    case 'chat':
      return <MessageCircle {...props} />;
    case 'user':
      return <User {...props} />;
    case 'note':
      return <NotebookPen {...props} />;
    case 'walk':
      return <Footprints {...props} />;
    case 'bowl':
      return <Utensils {...props} />;
    case 'stop':
      return <ShieldAlert {...props} />;
    case 'moon':
      return <Moon {...props} />;
    case 'shield':
      return <ShieldCheck {...props} />;
    case 'book':
      return <BookOpen {...props} />;
    case 'clock':
      return <Clock {...props} />;
    case 'phone':
      return <Phone {...props} />;
    case 'sparkles':
      return <Sparkles {...props} />;
    default:
      return <Heart {...props} />;
  }
};
