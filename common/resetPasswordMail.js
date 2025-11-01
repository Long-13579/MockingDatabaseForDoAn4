const transporter = require("./mailTransporter");

const sendEmail = async (email, name, newPassword) => {
  try {
    const info = await transporter.sendMail({
      from: '"Workout Tracker" <leztwaper@gmail.com>',
      to: email,
      subject: "Reset Password",
      html: `
        <p>Hello ${name || ""},</p>
        <p>Your password has been reset. Here’s your new password:</p>
        <p><strong>${newPassword}</strong></p>
        <p>Please log in and change it immediately.</p>
      `,
    });

    console.log("Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = sendEmail;
