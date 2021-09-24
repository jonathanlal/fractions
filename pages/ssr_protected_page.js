import { getSession } from "next-auth/client";
import AccessDenied from "../components/accessDenied";

export default function Page({ session }) {
  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied />;
  }

  // If session exists, display content
  return (
    <>
      <h1>Protected Page</h1>
      <p>
        <strong>Welcome {session.user.name}</strong>
      </p>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
