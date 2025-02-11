import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

axios.defaults.withCredentials = true;

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userAuth, setUserAuth] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get("https://lostlink.onrender.com/api/v1/auth/current-user");

      if (response.data.success) {
        setUserAuth(true);
        setUser(response.data.user);
      } else {
        setUserAuth(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setUserAuth(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    setUser,
    loading,
    userAuth,
    setUserAuth,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
