import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function getSession() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }
  return { ...session };
}
