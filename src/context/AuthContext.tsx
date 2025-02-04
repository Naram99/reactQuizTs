import { createContext } from "react";
import { AuthContextType } from "../models/AuthContext.interface";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
