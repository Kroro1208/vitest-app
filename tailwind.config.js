/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ReactプロジェクトのすべてのJavaScript/TypeScriptファイルをスキャンするように指定
    "./public/index.html" // プロジェクトの公開ディレクトリにあるHTMLファイルもスキャン
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

