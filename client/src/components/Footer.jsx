export default function Footer() {
  return (
    <footer
      className="text-center py-3 mt-auto"
      style={{
        background: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
        color: "#475569",
        fontSize: "14px",
      }}
    >
      © {new Date().getFullYear()} TaskHub • All rights reserved
    </footer>
  );
}
