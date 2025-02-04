export interface AuthContextType {
    authenticated: boolean;
    checkAuth: () => Promise<void>;
}
