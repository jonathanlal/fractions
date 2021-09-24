import { signIn } from "next-auth/client";
import { DefaultBtn } from "./atoms/buttons/DefaultBtn.component";

export default function AccessDenied() {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <DefaultBtn
          href="/api/auth/signin"
          text="You must be signed in to view this page"
          onClickFn={signIn}
        />
      </p>
    </>
  );
}
