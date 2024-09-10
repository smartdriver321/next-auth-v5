import { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

import SettingsPage from "./SettingsPage";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function Page() {
  // TODO: Protect this page via authentication
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/settings");
  }

  return <SettingsPage user={user} />;
}
