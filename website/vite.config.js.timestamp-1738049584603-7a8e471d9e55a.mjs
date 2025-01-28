// vite.config.js
import { defineConfig } from "file:///C:/Users/levan.natsvlishvili/Desktop/projects/microfrontends/react-vite-federation/node_modules/.pnpm/vite@5.4.10/node_modules/vite/dist/node/index.js";
import federation from "file:///C:/Users/levan.natsvlishvili/Desktop/projects/microfrontends/react-vite-federation/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.6/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import react from "file:///C:/Users/levan.natsvlishvili/Desktop/projects/microfrontends/react-vite-federation/node_modules/.pnpm/@vitejs+plugin-react@4.3.3_vite@5.4.10/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        app: "http://localhost:5001/assets/remoteEntry.js",
        // URL for the `home` micro frontend
        home: "http://localhost:5002/assets/remoteEntry.js",
        // URL for the `home` micro frontend
        profile: "http://localhost:5003/assets/remoteEntry.js"
        // URL for the `home` micro frontend
      },
      shared: ["react"]
    })
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsZXZhbi5uYXRzdmxpc2h2aWxpXFxcXERlc2t0b3BcXFxccHJvamVjdHNcXFxcbWljcm9mcm9udGVuZHNcXFxccmVhY3Qtdml0ZS1mZWRlcmF0aW9uXFxcXHdlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGxldmFuLm5hdHN2bGlzaHZpbGlcXFxcRGVza3RvcFxcXFxwcm9qZWN0c1xcXFxtaWNyb2Zyb250ZW5kc1xcXFxyZWFjdC12aXRlLWZlZGVyYXRpb25cXFxcd2Vic2l0ZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbGV2YW4ubmF0c3ZsaXNodmlsaS9EZXNrdG9wL3Byb2plY3RzL21pY3JvZnJvbnRlbmRzL3JlYWN0LXZpdGUtZmVkZXJhdGlvbi93ZWJzaXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tICdAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbic7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBmZWRlcmF0aW9uKHtcbiAgICAgIHJlbW90ZXM6IHtcbiAgICAgICAgYXBwOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAxL2Fzc2V0cy9yZW1vdGVFbnRyeS5qcycsIC8vIFVSTCBmb3IgdGhlIGBob21lYCBtaWNybyBmcm9udGVuZFxuICAgICAgICBob21lOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAyL2Fzc2V0cy9yZW1vdGVFbnRyeS5qcycsIC8vIFVSTCBmb3IgdGhlIGBob21lYCBtaWNybyBmcm9udGVuZFxuICAgICAgICBwcm9maWxlOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAzL2Fzc2V0cy9yZW1vdGVFbnRyeS5qcycsIC8vIFVSTCBmb3IgdGhlIGBob21lYCBtaWNybyBmcm9udGVuZFxuICAgICAgfSxcbiAgICAgIHNoYXJlZDogWydyZWFjdCddLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdkLFNBQVMsb0JBQW9CO0FBQzdlLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUCxLQUFLO0FBQUE7QUFBQSxRQUNMLE1BQU07QUFBQTtBQUFBLFFBQ04sU0FBUztBQUFBO0FBQUEsTUFDWDtBQUFBLE1BQ0EsUUFBUSxDQUFDLE9BQU87QUFBQSxJQUNsQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
