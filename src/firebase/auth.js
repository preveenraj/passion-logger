import {
  onAuthStateChanged as _onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "./config";

async function signIn() {
  let result = null,
    error = null;
  try {
    result = await signInWithPopup(auth, provider);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

function onAuthStateChanged(cb) {
  return _onAuthStateChanged(auth, cb);
}

export { signIn, onAuthStateChanged };
