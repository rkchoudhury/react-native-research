import React, { ReactNode } from 'react';
import { Container } from 'inversify';
import { InversifyContext } from './InversifyContext';

interface InversifyProviderProps {
  container: Container;
  children: ReactNode; // Ensure children is included
}

const InversifyProvider: React.FC<InversifyProviderProps> = ({
  container,
  children,
}) => {
  return (
    <InversifyContext.Provider value={container}>
      {children}
    </InversifyContext.Provider>
  );
};

export default InversifyProvider;
