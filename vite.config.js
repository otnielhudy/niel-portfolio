import react from '@vitejs/plugin-react'
import { defineConfig, transformWithOxc } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/

const transformJsxInJs = () => ({
  name: "transform-jsx-in-js",
  enforce: "pre",
  async transform(code, id) {
    if (!id.match(/.*\.js$/)) {
      return null;
    }

    return await transformWithOxc(code, id, {
      lang: "jsx",
    });
  },
});

export default defineConfig({
  plugins: [react(), svgr(), transformJsxInJs()],
  oxc:{
    jsx: {
      // Tell Oxc how to handle specific file
      runtime: "automatic"
    }
  }
})
