import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(async ({ command }) => ({
    server: {
        fs: {
            allow: ["."],
        },
    },
    plugins: [react()],
}));
