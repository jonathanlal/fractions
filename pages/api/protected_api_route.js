import { getSession } from "next-auth/client";

const protectedApiRoute = async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    res.send({ error: "You must be signed in to access this api route" });
  }
};

export default protectedApiRoute;
