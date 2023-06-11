import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

// Create Context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Create Auth
  const auth = getAuth(app);

  // Create New User
  const createUser = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update Existing User
  const updateUserProfile = (name, image) => {
    setUserLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // Signin Existing User
  const userSignin = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Goole Login
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // User Logout
  const userLogout = () => {
    setUserLoading(true);
    setUser(null);
    return signOut(auth);
  };

  // Track user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email) {
        axios
          .post(`${import.meta.env.VITE_BASE_URL}/jwt`, {
            email: currentUser?.email,
          })
          .then((data) => {
            const token = data.data.token;
            localStorage.setItem("user-access-token", token);
            setUserLoading(false);
          });
      } else {
        localStorage.removeItem("user-access-token");
      }
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // All Auth Operations
  const authInfo = {
    user,
    userLoading,
    createUser,
    updateUserProfile,
    userSignin,
    googleLogin,
    userLogout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
