import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Somtheing wrong in context");
  }
  return context;
};

export default useUser;
