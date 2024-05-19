import { doc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import useSession from "../hooks/session";
import { db } from "../firebase/config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { userId, loading: sessionLoading } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isLoggedIn = Boolean(user);

  useEffect(() => {
    if (sessionLoading) {
      setLoading(true);
      return;
    }

    if (!userId) {
      setUser(null);
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      const usersRef = doc(db, "users", "admin_user");
      const userDoc = await getDoc(usersRef);

      if (userDoc.exists) {
        setUser({ id: userDoc.id, ...userDoc.data() });
        console.log("🚀 ~ fetchUserData ~ userDoc.data():", userDoc.data())
      }

      setLoading(false);
    };

    // get user data from firebase
    fetchUserData();
  }, [userId, sessionLoading]);

  const value = {
    user,
    loading: loading || sessionLoading,
    isLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
