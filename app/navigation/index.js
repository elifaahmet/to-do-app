import React from 'react';
import { useAuthentication } from '../hooks/useAuthentication';
import HomeStack from './home-stack';
import AuthStack from './auth-stack';

export const RootNavigation = () => {
  const { user } = useAuthentication();

  return user ? <HomeStack /> : <AuthStack />;
}

export default RootNavigation;