import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { token, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav
      className="navbar px-4 py-3"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #E2E8F0",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      }}
    >
      {/* LOGO */}
      <h4
        className="fw-bold m-0"
        style={{ color: "#1E293B", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        TaskHub
      </h4>

      <div className="d-flex align-items-center gap-4">

        {/* DASHBOARD LINK */}
        {token && (
          <Link className="fw-semibold" to="/dashboard">
            Dashboard
          </Link>
        )}

        {/* USER PROFILE - UPDATED CIRCLE */}
        {token && user && (
          <div className="d-flex align-items-center gap-2">
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg,  #1E293B, #334155)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
                fontSize: "16px",
                boxShadow: "0 4px 10px rgba(14,165,233,0.3)",
              }}
            >
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <span className="fw-semibold">{user.name}</span>
          </div>
        )}

        {/* AUTH BUTTONS */}
        {!token ? (
          <>
            <Link className="fw-semibold" to="/login">
              Login
            </Link>
            <Link className="fw-semibold" to="/register">
              Register
            </Link>
          </>
        ) : (
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
