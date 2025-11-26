import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { CheckCircle, XCircle, Trash2, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function Dashboard() {
  const { token, user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  const fetchTasks = async () => {
    const res = await axios.get("https://taskhub-api-ody7.onrender.com/api/tasks", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await axios.post(
      "https://taskhub-api-ody7.onrender.com/api/tasks",
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    toast.success("Task added!");
    setTitle("");
    fetchTasks();
  };

  const toggleStatus = async (id, completed) => {
    await axios.put(
      `https://taskhub-api-ody7.onrender.com/api/tasks/${id}`,
      { completed: !completed },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    toast.info("Task updated!");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    if (window.confirm("Delete this task?")) {
      await axios.delete(`https://taskhub-api-ody7.onrender.com/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.error("Task deleted!");
      fetchTasks();
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">My Tasks</h2>
      <div className="p-4 mb-4 rounded" style={{
        background:"#ffffff",
        border:"1px solid #E2E8F0",
        boxShadow:"0 4px 12px rgba(0,0,0,0.05)"
      }}>
        <h5 className="fw-bold mb-1">Welcome Back {user?.name ? `, ${user.name}` : ""}</h5>
        <p className="m-0 text-secondary">Let's stay productive today.</p>
      </div>


      {/* STATS CARDS */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="stat-card">
            <h6>Total Tasks</h6>
            <h2>{total}</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="stat-card completed">
            <h6>Completed✅</h6>
            <h2>{completed}</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="stat-card pending">
            <h6>Pending⏳ </h6>
            <h2>{pending}</h2>
          </div>
        </div>
      </div>

      {/* ADD TASK */}
      <div className="mb-4 d-flex gap-2">
        <input
          className="form-control custom-input"
          placeholder="Add new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn-primary-custom" onClick={addTask}>
          <PlusCircle size={18} /> Add
        </button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="d-flex gap-3 mb-4">
        <input
          className="form-control"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* TASK GRID */}
      <div className="row g-4">
        {tasks
          .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
          .filter((t) =>
            filter === "all"
              ? true
              : filter === "completed"
              ? t.completed
              : !t.completed
          )
          .map((task) => (
            <motion.div
              key={task._id}
              className="col-md-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="p-4 rounded"
                style={{
                  background: "#ffffff",
                  boxShadow: "0px 4px 16px rgba(0,0,0,0.08)",
                  border: "1px solid #E2E8F0",
                }}
              >
                <h5 className="fw-semibold">{task.title}</h5>
                <span
                  className={`badge ${
                    task.completed ? "bg-success" : "bg-warning text-dark"
                  } mt-2`}
                  style={{ fontSize: "12px" }}
                >
                  {task.completed ? "Completed" : "Pending"}
                </span>

                <div className="d-flex justify-content-end gap-2 mt-3">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => toggleStatus(task._id, task.completed)}
                  >
                    {task.completed ? <XCircle size={16} /> : <CheckCircle size={16} />}
                  </button>

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deleteTask(task._id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
