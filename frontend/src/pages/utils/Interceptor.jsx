import React, { createContext, useContext, useState } from "react";

const InterceptorContext = createContext();

export const useInterseptor = () => useContext(InterceptorContext);

export const InterceptorProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <InterceptorContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </InterceptorContext.Provider>
  );
};
