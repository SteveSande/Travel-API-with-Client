import { useEffect } from "react";
import { app } from "./client";
import Header from "./components/header";
import Content from "./components/content";
import Query from "./components/query";
import Response from "./components/response";

export default function App() {
  useEffect(() => {
    // this stores the access token in local storage if one exists
    app.authenticate();
  }, []);

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col items-center">
        <Query />
        <Response />
      </main>
    </div>
  );
}
