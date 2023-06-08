import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

// Create Context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userLoading, setUserLoading] = useState(false);
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

  // User Logout
  const userLogout = () => {
    setUserLoading(true);
    return signOut(auth);
  };

  // Track user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
      }
    });
    return () => unsubscribe();
  }, []);

  // All Auth Operations
  const authInfo = {
    user,
    userLoading,
    createUser,
    updateUserProfile,
    userSignin,
    userLogout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
