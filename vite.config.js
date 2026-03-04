import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // Podés cambiar esto por env para alternar fácil
  const target = env.VITE_PROXY_TARGET || "http://localhost:3000";

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target,
          changeOrigin: true,
          secure: false,

          // ✅ clave: si backend responde con Location absoluto, lo convertimos a relativo
          configure: (proxy) => {
            proxy.on("proxyRes", (proxyRes) => {
              const loc = proxyRes.headers["location"];
              if (typeof loc === "string") {
                proxyRes.headers["location"] = loc
                  .replace(/^https?:\/\/cursillomaxplanck\.com/i, "")
                  .replace(/^https?:\/\/www\.cursillomaxplanck\.com/i, "");
              }
            });
          },
        },
      },
    },
  };
});
