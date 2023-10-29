import { useEffect } from "react";
import { app } from "./client";

export default function App() {
  useEffect(() => {
    app.authenticate();
    let pictures;
    async function getPics() {
      await app.service("pictures").create({
        picture: "'test'",
        destination: "'test'",
        region: "'test'",
        country: "'test'",
        subdivision: "'test'",
        tags: ["'test'", "'test'"],
      });
      pictures = await app.service("pictures").find();
      console.log(pictures);
    }

    getPics();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        onClick={() =>
          (window.location.href = "http://localhost:3030/oauth/google")
        }
      >
        Admin
      </button>
    </div>
  );
}
