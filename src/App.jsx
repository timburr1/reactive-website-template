import React from 'react'
import { createRoot } from "react-dom/client";
import TopBar from './components/TopBar'

function App() {
  return (
    <div>
      <TopBar />
    </div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
