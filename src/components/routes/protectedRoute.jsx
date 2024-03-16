import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      return <Navigate to="/login" replace />;
    }
    return children;
  } catch (error) {
    console.error("Error decoding or verifying token:", error);
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
