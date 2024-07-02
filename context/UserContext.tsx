import React, { createContext, useState } from "react";

interface userTypes {
  username: string;
  mobile: string;
  address: string;
}

let users: userTypes[] = [];

interface contextType {
  user: userTypes | null;
  setuser: React.Dispatch<React.SetStateAction<userTypes | null>>;
  login: (name: string) => void;
  isLoggedIn: boolean;
}

export const UserContext = createContext<contextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setuser] = useState<userTypes | null>(null);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const login = (name: string) => {
    const isUser = users.filter((elm) => elm.username === name);
    if (isUser.length) {
      setisLoggedIn(true);
    } else {
      const newUser: userTypes = {
        username: name,
        address: "",
        mobile: "",
      };
      setuser(newUser);
      users.push(newUser);
    }
  };
  return (
    <UserContext.Provider value={{ user, setuser, isLoggedIn, login }}>
      {children}
    </UserContext.Provider>
  );
};
