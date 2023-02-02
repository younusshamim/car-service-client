import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../../api/Auth";
import { AuthContext } from "../../../context/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setAuthToken(user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <p className="text-center">
        <small>Social Login</small>
      </p>
      <p className="text-center">
        <button className="btn btn-ghost" onClick={handleGoogleSignIn}>
          Google
        </button>
      </p>
    </div>
  );
};

export default SocialLogin;
