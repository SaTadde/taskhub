import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      toast.success("Account created! Please login.");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h3 className="fw-bold text-center mb-4">Create Account</h3>

        <form onSubmit={registerUser}>
          <input name="name" placeholder="Full Name" className="form-control mb-3" onChange={handleChange} />

          <input name="email" type="email" placeholder="Email" className="form-control mb-3" onChange={handleChange} />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="form-control mb-4"
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100">Register</button>
        </form>

        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
