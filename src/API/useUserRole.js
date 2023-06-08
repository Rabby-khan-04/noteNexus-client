import axios from "axios";

// Save Logged In user
export const saveUser = async (user) => {
  const currentUser = {
    name: user?.displayName,
    email: user?.email,
    image: user?.photoURL,
    role: "Student",
  };

  const res = await axios.put(
    `${import.meta.env.VITE_BASE_URL}/user/${user?.email}`,
    currentUser
  );
};
