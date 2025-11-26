import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home-container d-flex justify-content-center align-items-center flex-column">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="fw-bold mb-3"
          style={{ color: "#1E293B", fontSize: "42px" }}
        >
          Organize Your Day, Effortlessly
        </motion.h1>

        <p className="text-secondary mb-4" style={{ fontSize: "18px" }}>
          TaskHub helps you stay on track with a clean task manager
          designed for your daily routine.
        </p>

        <div className="d-flex justify-content-center gap-3 mb-5">
          <Link to="/login" className="btn btn-primary px-4">
            Login
          </Link>
          <Link to="/register" className="btn btn-outline-primary px-4">
            Create Account
          </Link>
        </div>
      </motion.div>

      {/* FLOATING CARDS */}
      <div className="floating-area">

        <motion.div
          className="float-card"
          initial={{ y: 0 }}
          animate={{ y: -12 }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.8 }}
        >
          Add tasks and stay organized!
        </motion.div>

        <motion.div
          className="float-card"
          initial={{ y: -10 }}
          animate={{ y: 6 }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.6 }}
        >
          Mark tasks as completed✔ 
        </motion.div>

        <motion.div
          className="float-card"
          initial={{ y: 5 }}
          animate={{ y: -10 }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
        >
          Track your progress easily.
        </motion.div>
      </div>

      {/* FEATURES SECTION */}
      <div className="container mt-5">
        <h3 className="fw-bold text-center mb-4" style={{ color: "#1E293B" }}>
          What can TaskHub do for you?
        </h3>

        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="feature-card p-4">
              ⚡
              <h5 className="fw-semibold mt-2">Quick and Easy</h5>
              <p className="text-secondary">
                No waiting or loading — add and manage your tasks instantly.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card p-4">
              🔐
              <h5 className="fw-semibold mt-2">Your Space, Your Data</h5>
              <p className="text-secondary">
                Only you can access your tasks — privacy comes first.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card p-4">
              📊
              <h5 className="fw-semibold mt-2">Stay in Control</h5>
              <p className="text-secondary">
                Track what’s done, pending, or coming next — all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
