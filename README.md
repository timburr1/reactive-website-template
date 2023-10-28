# React + Vite

npm create vite@latest NEW_PROJECT -- --template react
cd NEW_PROJECT
npm install -D tailwindcss postcss autoprefixer prettier prettier-plugin-tailwindcss
npx tailwindcss init -p
npx tailwindcss -i /src/index.css -o /dist/output.css --watch
