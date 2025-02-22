import React from 'react';

const BackgroundWrapper = ({ children, className, style }) => {
  return (
    <div 
      className={className}
      style={{
        backgroundImage: "url('/assets/background.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '140vh',
        width: '100%',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;