import React from 'react';
import {
  Crown,
  LayoutGrid,
  Code2,
  BarChart3,
  Megaphone,
  TrendingUp,
  Users,
  DollarSign,
  Scale,
  Cog,
  Headphones,
  Palette,
  Sparkles,
  LucideProps,
} from 'lucide-react';

interface RoleIconProps extends LucideProps {
  name: string;
}

export const RoleIcon: React.FC<RoleIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'Crown':
      return <Crown {...props} />;
    case 'LayoutGrid':
      return <LayoutGrid {...props} />;
    case 'Code2':
      return <Code2 {...props} />;
    case 'BarChart3':
      return <BarChart3 {...props} />;
    case 'Megaphone':
      return <Megaphone {...props} />;
    case 'TrendingUp':
      return <TrendingUp {...props} />;
    case 'Users':
      return <Users {...props} />;
    case 'DollarSign':
      return <DollarSign {...props} />;
    case 'Scale':
      return <Scale {...props} />;
    case 'Cog':
      return <Cog {...props} />;
    case 'Headphones':
      return <Headphones {...props} />;
    case 'Palette':
      return <Palette {...props} />;
    default:
      return <Sparkles {...props} />;
  }
};
