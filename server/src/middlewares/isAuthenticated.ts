import AuthRequest from "@libs/auth/types";
import Error from "@libs/error";

const isAuthenticated = (req: AuthRequest, res, next) => {

  if (!req.session.user) {
    return Error(res, 401, "UNAUTHORIZED", "You are not authorized to access this resource.");
  }

  next();
}

export default isAuthenticated;