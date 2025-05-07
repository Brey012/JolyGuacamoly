import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Si no hay usuario logueado o el rol no coincide, redirige al login
  if (!loggedInUser || loggedInUser.role !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  // Si el usuario tiene el rol adecuado, renderiza el contenido protegido
  return children;
};

export default ProtectedRoute;
