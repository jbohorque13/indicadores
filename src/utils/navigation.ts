import React from 'react';

import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef: React.RefObject<NavigationContainerRef<any>> =
  React.createRef();

export const navigate = (route: string) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(route);
  }
}