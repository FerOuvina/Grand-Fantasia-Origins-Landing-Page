import { useState, useEffect } from "react";
import { Link } from "wouter";
import "../../css/global.css";
import { getVerify } from "../../services/auth";
import { useTranslation } from "react-i18next";
import { statuses } from "../../helpers/constants";

export default function MailVerification() {
  const [status, setStatus] = useState(statuses.LOADING);
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);
  const [isTokenExtracted, setIsTokenExtracted] = useState(false);
  const { t } = useTranslation();

  // Extract token from the query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tokenFromQuery = queryParams.get("token");
    setToken(tokenFromQuery);
    setIsTokenExtracted(true); // Mark token extraction as complete
  }, []);

  const handleVerification = async (token) => {
    try {
      const result = await getVerify({ token });
      if (result) {
        setStatus(statuses.SUCCESS);
        setMessage(t("VerificationPage.successMessage"));
      }
    } catch (error) {
      setStatus(statuses.ERROR);
      setMessage(
        error.response?.data?.message || t("VerificationPage.errorMessage")
      );
    }
  };

  // Trigger verification when token is available
  useEffect(() => {
    if (isTokenExtracted) {
      if (token) {
        handleVerification(token);
      } else {
        setStatus(statuses.ERROR);
        setMessage(t("VerificationPage.errorMessage"));
      }
    }
  }, [token, isTokenExtracted]);

  return (
    <section className="center-container">
      <div className="verification-box   bg-white">
        <img src={"/logo1.png"} alt="logo" width={400} height={400} />

        {status === statuses.LOADING && (
          <p className="status-message">{t("VerificationPage.loading")}</p>
        )}

        {status === statuses.SUCCESS && (
          <div className="items-center  flex flex-col gap-3 w-full">
            <h1 className="success-message">{t("VerificationPage.success")}</h1>
            <img src={"/divider-5318234.svg"} width={350} height={10} />
            <p className="status-message">{message}</p>
            <section className="flex justify-evenly p-4 bg-origins w-full">
              <Link href="/" className="link-button">
                {t("goHome")}
              </Link>
            </section>
          </div>
        )}

        {status === statuses.ERROR && (
          <div className="items-center  flex flex-col gap-3 w-full">
            <h1 className="error-message">{t("VerificationPage.fail")}</h1>
            <img src={"/divider-5318234.svg"} width={350} height={10} />
            <p className="status-message">{message}</p>
            <section className="flex justify-evenly p-4 bg-origins w-full">
              <Link
                href="/register"
                className="p-2 text-2xl text-center Button"
              >
                {t("tryAgain")}
              </Link>
            </section>
          </div>
        )}
      </div>
    </section>
  );
}
