import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import send from "../../assets/commonIcons/sendm.png";
import { Alert, Snackbar } from "@mui/material";

const ContactForm = ({ darkMode }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        //"service_uryujqr",
        "template_e6alqnj",
        e.target,
        "w7Q_2vzEQTUwbNAnL"
      )
      .then(
        (result) => {
          setSnackbarMsg("Message sent successfully!");
          setSnackbarSeverity("success");
          setOpenSnackbar(true);
          e.target.reset();
        },
        (error) => {
          setSnackbarMsg("Failed to send message. Please try again.");
          setSnackbarSeverity("error");
          setOpenSnackbar(true);
        }
      );
  };

  return (
    <>
      <form className="space-y-4" onSubmit={sendEmail}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name :"
            name="f_name"
            required
            className={`p-3 rounded-[3px] w-full bg-white bg-opacity-30 text-sm
              ${darkMode ? 'text-white placeholder-white' : 'text-[#59453F] placeholder-[#59453F]'}`}
            style={{ boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.5)' }}
          />
          <input
            type="text"
            placeholder="Last Name :"
            name="l_name"
            required
            className={`p-3 rounded-[3px] w-full bg-white bg-opacity-30 text-sm
              ${darkMode ? 'text-white placeholder-white' : 'text-[#59453F] placeholder-[#59453F]'}`}
            style={{ boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.5)' }}
          />
        </div>

        <input
          type="email"
          placeholder="Email :"
          name="email_from"
          required
          className={`p-3 rounded-[3px] w-full bg-white bg-opacity-30 text-sm
            ${darkMode ? 'text-white placeholder-white' : 'text-[#59453F] placeholder-[#59453F]'}`}
          style={{ boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.5)' }}
        />

        <textarea
          rows="4"
          placeholder="Message"
          name="message"
          required
          className={`p-3 rounded-[3px] w-full bg-white bg-opacity-30 text-sm h-[300px]
            ${darkMode ? 'text-white placeholder-white' : 'text-[#59453F] placeholder-[#59453F]'}`}
          style={{
            boxShadow: darkMode
              ? '0 0 0 1px rgba(255, 255, 255, 0.2)'
              : '0 0 0 1px rgba(89, 69, 63, 0.2)',
          }}
        ></textarea>

        <button
          type="submit"
          className={`group px-6 py-3 rounded-md font-semibold w-full flex items-center justify-center gap-2 transition
            ${darkMode
              ? 'text-white bg-white bg-opacity-5 hover:bg-white hover:text-[#59453F]'
              : 'text-[#59453F] bg-white bg-opacity-30 hover:bg-[#59453F] hover:text-white'}`}
          style={{
            boxShadow: darkMode
              ? '0 0 0 1px rgba(255, 255, 255, 0.2)'
              : '0 0 0 1px rgba(89, 69, 63, 0.2)',
          }}
        >
          Send Message
          <img
            src={send}
            alt="Send"
            className={`w-5 h-5 transition 
              ${darkMode ? 'filter invert group-hover:invert-0' : 'group-hover:invert'}`}
          />
        </button>
      </form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={snackbarSeverity} onClose={handleCloseSnackbar}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
