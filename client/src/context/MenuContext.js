import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
