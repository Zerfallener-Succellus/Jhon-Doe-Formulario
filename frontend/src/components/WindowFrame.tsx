import React, { ReactNode } from 'react';

interface WindowFrameProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const WindowFrame: React.FC<WindowFrameProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`window ${className}`}>
      <div className="window-title">
        <span>{title}</span>
        <div className="buttons">
          <button>_</button>
          <button>□</button>
          <button>×</button>
        </div>
      </div>
      <div className="window-body">
        {children}
      </div>
    </div>
  );
};

export default WindowFrame;