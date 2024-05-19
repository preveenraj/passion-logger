import {
  onAuthStateChanged as _onAuthStateChanged,
  signInWithPopup,
  signOut as _signOut,
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

async function signOut() {
  let error = null;
  try {
    await _signOut(auth);
  } catch (e) {
    error = e;
  }

  return { error };
}

function onAuthStateChanged(cb) {
  return _onAuthStateChanged(auth, cb);
}

export { signIn, onAuthStateChanged, signOut };
