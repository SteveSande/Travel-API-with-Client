import { useEffect } from "react";
import { app } from "./client";
import Header from "./components/header";
import Content from "./components/query-customizer";
import Query from "./components/query";
import Response from "./components/response";
import QueryCustomizer from "./components/query-customizer";

export default function App() {
  useEffect(() => {
    // this stores the access token in local storage if one exists
    app.authenticate();
  }, []);

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col items-center">
        <QueryCustomizer />
        <Query />
        <Response />
      </main>
    </div>
  );
}
