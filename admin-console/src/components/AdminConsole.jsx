import React from "react";
import { Link } from "react-router-dom";

const AdminConsole = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.cardBody}>
          <p style={styles.cardText}>Hello and Welcome to Admin Console</p>
          <Link to="/admin/login" style={styles.button}>Please Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminConsole;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  card: {
    width: "400px",
    height: "300px",
    background: "white",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  cardBody: {
    padding: "20px",
  },
  cardText: {
    paddingTop: "50px",
    fontSize: "18px",
    marginBottom: "20px",
    textAlign: "center",
  },
  button: {
    paddingTop: "20px",
    display: "block",
    width: "100%",
    padding: "10px 0",
    color: "white",
    backgroundColor: "blue",
    borderRadius: "5px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "16px",
  },
};
document.body.style.backgroundImage = "url(data:image/jpeg;base64,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)";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";