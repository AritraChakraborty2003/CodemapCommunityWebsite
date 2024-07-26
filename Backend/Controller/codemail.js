import nodemailer from "nodemailer";
import { google } from "googleapis";
const CLIENT_ID = "";
const CLIENT_SECRET = "";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(email, subject, msg, filename) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "abhishek.codemap2024@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "HRCodemap <abhishek.codemap2024@gmail.com>",
      to: email,
      subject: subject,
      text: msg,
      attachments: [
        {
          fileName: filename,
          path: "https://www.api.codemap.online/" + filename,
        },
      ],
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}
sendMail()
  .then((res) => {
    console.log("Email sent...", res);
  })
  .catch((err) => {
    console.log(err.message);
  });

export { sendMail };
