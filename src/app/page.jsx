import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "./components/buttons";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { User } from "./components/user";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "black",
        opacity: 0.5
      }}
    >
      <div className="text-white">
        Main
      </div>
    </main>
  );
}
