import { useEffect, useRef, useState, SetStateAction, useCallback } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db as firestore } from "@/firebase/config";

import debounce from "lodash/debounce";

const DEBOUNCE_SAVE_DELAY_MS = 1000;

const useAutosave = (dataToSave: string): [string, React.Dispatch<SetStateAction<string>>] => {
  const [data, setData] = useState<string>(dataToSave);

  const saveDataToFirebase = useCallback(async (newData: string) => {
    setData(newData);
    const docRef = doc(firestore, "users", "admin_user");

    await updateDoc(docRef, {
      scratchPad: newData,
    });
    console.log("Saved successfully!");
  }, []);

  const debouncedSave = debounce((newData: string) => {
    saveDataToFirebase(newData);
  }, DEBOUNCE_SAVE_DELAY_MS);
  
  const memoizedDebouncedSave = useCallback(debouncedSave, []);

  // This effect runs only when `data` changes.
  // Effectively achieving the auto-save functionality we wanted.
  useEffect(() => {
    if (data) {
        memoizedDebouncedSave(data);
    }
  }, [data, debouncedSave]);

  return [data, setData];
};

export default useAutosave;
