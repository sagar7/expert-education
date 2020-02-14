import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Spinner from "./components/spinner";
import "./App.css";

const NotFound = lazy(() => import("./components/notFound"));
const HomePage = lazy(() => import("./components/homePage"));
// const RandomJokes = lazy(() => import("./components/randomJokes"));
const Jokes = lazy(() => import("./components/jokes"));
function App() {
  return (
    <div className="App">
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
