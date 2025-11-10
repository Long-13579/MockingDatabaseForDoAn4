// sendEmail.js
const sgMail = require("@sendgrid/mail");

// Make sure you set this environment variable in Render dashboard
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, name, newPassword) => {
  try {
    const msg = {
      to: email,
      from: {
        email: "leztwaper@gmail.com", // must be a verified sender in SendGrid
        name: "Workout Tracker",
      },
      subject: "Reset Password",
      html: `
        <p>Hello ${name || ""},</p>
        <p>Your password has been reset. Here’s your new password:</p>
        <p><strong>${newPassword}</strong></p>
        <p>Please log in and change it immediately.</p>
      `,
    };

    const response = await sgMail.send(msg);
    console.log("Email sent successfully:", response[0].statusCode);
    return response;
  } catch (error) {
    console.error("Error sending email:", error.response?.body || error.message);
    throw error;
  }
};

module.exports = sendEmail;
