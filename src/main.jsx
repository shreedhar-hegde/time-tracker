import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TasksContextProvider } from "./TasksContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <TasksContextProvider>
    <App />
  </TasksContextProvider>
  // </React.StrictMode>
);
