import { redirect } from "@tanstack/react-router";
import { ProfileCard } from "src/components/profile-card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (!context.userSession) {
      throw redirect({ to: "/" });
    }
  },
});

function RouteComponent() {
  return <ProfileCard />;
}
