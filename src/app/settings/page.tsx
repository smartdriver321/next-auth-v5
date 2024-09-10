import { Metadata } from "next";
import { redirect } from "next/navigation";

import getSession from "@/lib/getSession";
import SettingsPage from "./SettingsPage";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function Page() {
  // TODO: Protect this page via authentication
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/settings");
  }

  return <SettingsPage user={user} />;
}
