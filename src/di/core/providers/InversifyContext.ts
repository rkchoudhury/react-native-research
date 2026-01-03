import React from 'react';
import { Container } from 'inversify';

const InversifyContext = React.createContext<Container | null>(null);

export { InversifyContext };
