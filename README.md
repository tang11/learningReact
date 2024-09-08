1. how to create a typescript react project?


npx create-react-app react-typescrpit-demo --template typescript



2. how to convert js project to typescript project

after you use command npx create-react-app my-app to create the project, it's a js project, if you want to convert to tsx file
1. run command npm install -D typescript @types/node @types/react @types/react-dom @types/jest
2. with the dependencies installed, rename the App.js file to App.tsx, index.js to index.tsx , reportWebVitals.js to reportWebVitals.js to reportWebVitals.tsx.
3. run command npm start
if you have error : Module not found: Error: Can't resolve './App' in '/[your file path]'
this usally occurs because tsconfig.json (TypeScript’s configuration file) is absent from your project,
to resolve this, manually create tsconfig.json file and paste the following:
{
    "compilerOptions": {
      "target": "es5",
      "lib": [
        "dom",
        "dom.iterable",
        "esnext"
      ],
      "allowJs": true,
      "skipLibCheck": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "noFallthroughCasesInSwitch": true,
      "module": "esnext",
      "moduleResolution": "node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx"
    },
    "include": [
      "src"
    ]
  }
