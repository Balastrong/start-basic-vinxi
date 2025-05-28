import { json } from "@tanstack/react-start";
import { createAPIFileRoute } from "@tanstack/react-start/api";
import { auth } from "~/lib/auth/auth";

export const APIRoute = createAPIFileRoute("/api/auth/$")({
  GET: ({ request }) => {
    console.log("Auth GET request handler called", request);
    return auth.handler(request);
  },
  POST: ({ request }) => {
    console.log("Auth POST request handler called", request);
    return auth.handler(request);
  },
});
