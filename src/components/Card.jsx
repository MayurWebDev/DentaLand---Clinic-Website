import React from 'react';
import { cards as cardStyles } from '../design-system/cards';
import { radius as radiusStyles } from '../design-system/radius';

const Card = ({
  children,
  variant = 'outlined', // 'glass' | 'outlined' | 'elevated'
  radius = 'card', // design system radius class key
  className = '',
  onClick = null,
  ...props
}) => {
  const cardClass = cardStyles[variant] || cardStyles.outlined;
  const radiusClass = radiusStyles[radius] || radiusStyles.card;
  const interactiveClass = onClick ? 'cursor-pointer hover:scale-[1.01] hover:shadow-lg transition-all duration-300' : '';

  return (
    <div
      onClick={onClick}
      className={`overflow-hidden ${cardClass} ${radiusClass} ${interactiveClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
