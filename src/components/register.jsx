import Footer from "./footer";
import NavbarSecondary from "./navbarSecundary";
import DiscordWidget from "./discordWidget";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../css/navbar.css";
import { Link } from "wouter";
import { postRegister } from "../services/auth";

const MySwal = withReactContent(Swal);

export default function Register() {
  const { t } = useTranslation();
  const usernameRegisterError = t("usernameRegisterError");
  const emailErrorInvalid = t("emailErrorInvalid");
  const emailErrorNone = t("emailErrorNone");
  const passwordErrorNone = t("passwordErrorNone");
  const passwordErrorLength = t("passwordErrorLength");
  const passwordErrorSymbol = t("passwordErrorSymbol");
  const passwordErrorNumber = t("passwordErrorNumber");
  const confirmPasswordError = t("confirmPasswordError");
  const validationError = t("validationError");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const lengthCheck = password.length >= 8;
    const symbolCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const numberCheck = /[0-9]/.test(password);
    return lengthCheck && symbolCheck && numberCheck;
  };

  const validateForm = () => {
    let valid = true;
    let errorMessages = [];

    if (!formData.username) {
      errorMessages.push(usernameRegisterError);
      valid = false;
    }

    if (!formData.email) {
      errorMessages.push(emailErrorNone);
      valid = false;
    } else if (!validateEmail(formData.email)) {
      errorMessages.push(emailErrorInvalid);
      valid = false;
    }

    if (!formData.password) {
      errorMessages.push(passwordErrorNone);
      valid = false;
    } else if (!validatePassword(formData.password)) {
      if (formData.password.length < 8) {
        errorMessages.push(passwordErrorLength);
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
        errorMessages.push(passwordErrorSymbol);
      }
      if (!/[0-9]/.test(formData.password)) {
        errorMessages.push(passwordErrorNumber);
      }
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      errorMessages.push(confirmPasswordError);
      valid = false;
    }

    if (errorMessages.length > 0) {
      MySwal.fire({
        icon: "error",
        title: validationError,
        html: `<ul>${errorMessages
          .map((msg) => `<li>${msg}</li>`)
          .join("")}</ul>`,
        position: "bottom-right",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        timerProgressBar: true,
        background: "#f8d7da",
        iconColor: "#dc3545",
      });
    }

    return valid;
  };

  const handleRegister = async () => {
    try {
      const result = await postRegister(formData);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(); //this should be called in the validateForm() check bellow, but there is an error with that function
    if (validateForm()) {
      console.log("Form data submitted:", formData);
      handleRegister();
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <section className="flex flex-col w-full max-w-[1250px] justify-center items-center bg-green h-full">
      <NavbarSecondary />
      <article className="my-5 w-full border-8 border-white bg-background">
        <div className="flex gap-4 justify-center items-center py-4">
          <div className="h-[313.4px] flex flex-col items-center my-4 border-8 border-white w-fit">
            <h1 className="px-4 py-2 w-full text-3xl text-white bg-navbar">
              {t("registerTitle")}
            </h1>

            <hr className="w-full border-4 border-white" />

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 justify-center items-center px-4 py-2 w-full text-xl text-white bg-navbar"
            >
              <div className="grid relative grid-cols-2 gap-3 pr-4 mt-2 w-full">
                <label htmlFor="username" className="text-right">
                  {t("usernameRegister")}
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="inputField"
                />
              </div>
              <div className="grid relative grid-cols-2 gap-3 pr-4 w-full">
                <label htmlFor="email" className="text-right">
                  {t("emailField")}
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="inputField"
                />
              </div>
              <div className="grid relative grid-cols-2 gap-3 pr-4 w-full">
                <label htmlFor="password" className="text-right">
                  {t("passwordField")}
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="inputField"
                />
              </div>
              <div className="grid relative grid-cols-2 gap-3 pr-4 w-full">
                <label htmlFor="confirmPassword" className="text-right">
                  {t("confirmPasswordField")}
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="inputField"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 pr-4 mt-2 w-full">
                <Link href="/login" className="navbarButton text-center">
                  {t("loginButton")}
                </Link>
                <button type="submit" className="navbarButton">
                  {t("registerButton")}
                </button>
              </div>
            </form>
          </div>

          <DiscordWidget />
        </div>
      </article>
      <Footer />
    </section>
  );
}
