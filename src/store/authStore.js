import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Usamos el middleware 'persist' de Zustand para que el estado de autenticación
// no se pierda al recargar la página. ¡Muy útil!
const useAuthStore = create(
    persist(
        (set) => ({
            isAuthenticated: false,
            login: () => set({ isAuthenticated: true }),
            logout: () => set({ isAuthenticated: false }),
        }),
        {
            name: 'auth-storage', // nombre de la clave en localStorage
        }
    )
);

export default useAuthStore;
