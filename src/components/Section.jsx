import React from 'react';
import { spacing } from '../design-system/spacing';
import { typography } from '../design-system/typography';

const Section = ({ 
  id, 
  title, 
  subtitle, 
  className = '', 
  compact = false, 
  align = 'center', // 'center' | 'left'
  children 
}) => {
  return (
    <section 
      id={id} 
      className={`${compact ? spacing.sectionPaddingCompact : spacing.sectionPadding} ${className}`}
    >
      <div className={spacing.container}>
        {(title || subtitle) && (
          <div className={`${align === 'left' ? 'text-left mr-auto' : 'text-center mx-auto'} max-w-3xl mb-12 md:mb-16`}>
            {subtitle && (
              <p className={typography.sectionSubtitle}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={typography.sectionTitle}>
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
