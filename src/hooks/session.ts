import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '../firebase/auth';

const useSession = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user: any) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  return {
    userId: user?.uid,
    loading,
  }
};

export default useSession;
