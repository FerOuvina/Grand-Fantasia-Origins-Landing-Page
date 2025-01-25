import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useRoute } from 'wouter';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [location, navigate] = useLocation();
  const [register] = useRoute('/register');
  const [login] = useRoute('/login');

  const [user, setUser] = useState(null);
  const [userAP, setUserAP] = useState(0);
  
  const value = useMemo(
    () => ({
      user,
      setUser,
      userAP,
      setUserAP
    }),
    [user]
  );

  useEffect(() => {
    if ((register || login) && user) {
      navigate('/profile');
    }
  }, [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
