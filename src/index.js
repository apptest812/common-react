import React from 'react';
import ReactDOM from 'react-dom/client';
import CommonReact from "./lib";
// import TextInput from "./lib/TextInput";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <CommonReact.TextInput label="Email Address" placeholder="name@example.com" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);