import { signOut, useSession } from "next-auth/client";
import AccessDenied from "components/accessDenied";
import { DefaultBtn } from "components/atoms/buttons/DefaultBtn.component";
import useDarkMode from "use-dark-mode";

export default function Home() {
  const [session, loading] = useSession();
  const darkMode = useDarkMode(false);
  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return (
      <>
        <button onClick={() => darkMode.toggle()} className="primary-button">
          Darkmode: {JSON.stringify(darkMode.value)}
        </button>
        <AccessDenied />
      </>
    );
  }

  // If session exists, display content
  return (
    <>
      <h1>Protected Page</h1>
      <p>
        <strong>Welcome {session.user.name}</strong> <br />
        Signed in as {session.user.email}
      </p>
      <DefaultBtn text="Logout" onClickFn={signOut} href="/" />
    </>
  );
}
