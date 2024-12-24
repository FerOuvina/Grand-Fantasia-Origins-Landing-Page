import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import "../../css/global.css";
import { getVerify } from "../../services/auth";

export default function MailVerification() {
  const [status, setStatus] = useState("loading"); // 'loading', 'success', 'error' TO-DO: Change this to constants or differents states
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);
  const [isTokenExtracted, setIsTokenExtracted] = useState(false); // Track token extraction

  // Extract token from the query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tokenFromQuery = queryParams.get("token");
    setToken(tokenFromQuery);
    setIsTokenExtracted(true); // Mark token extraction as complete
  }, []);

  // Handle verification API call
  const handleVerification = async (token) => {
    try {
      const result = await getVerify({ token });
      if (result) {
        setStatus("success");
        setMessage("Your email has been successfully verified!");
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  // Trigger verification when token is available
  useEffect(() => {
    if (isTokenExtracted) {
      if (token) {
        handleVerification(token);
      } else {
        setStatus("error");
        setMessage("Invalid or missing verification token.");
      }
    }
  }, [token, isTokenExtracted]);

  //Change styles becasuse pls
  return (
    <section className="center-container">
      <div className="verification-box">
        {status === "loading" && <p className="status-message">Verifying...</p>}

        {status === "success" && (
          <div className="text-center">
            <h1 className="success-message">Verification Complete!</h1>
            <p className="status-message">{message}</p>
            <Link href="/" className="link-button">
              Go Home
            </Link>
          </div>
        )}

        {status === "error" && (
          <div className="text-center">
            <h1 className="error-message">Verification Failed</h1>
            <p className="status-message">{message}</p>
            <Link href="/register" className="link-button">
              Try Again
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
