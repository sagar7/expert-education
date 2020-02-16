import React, { lazy, Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Spinner from "./components/spinner";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const NotFound = lazy(() => import("./components/notFound"));
const HomePage = lazy(() => import("./components/homePage"));
const Jokes = lazy(() => import("./components/jokes"));
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/jokes" component={Jokes} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
