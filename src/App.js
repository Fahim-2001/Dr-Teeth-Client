import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import Spinner from "./Pages/Shared/Spinner/Spinner";

function App() {
  return (
    <div className="App " data-theme="cupcake">
      <RouterProvider
        fallbackElement={<Spinner></Spinner>}
        router={routes}
      ></RouterProvider>
    </div>
  );
}

export default App;
