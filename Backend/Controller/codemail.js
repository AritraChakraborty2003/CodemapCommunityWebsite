import nodemailer from "nodemailer";
import { google } from "googleapis";
const CLIENT_ID =
  "48446837672-uc0413s0dcoaq5mm5h0iu08jum3jsouj.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04U6CL8OHcyHNCgYIARAAGAQSNwF-L9Irtprgnt5GpGGxpblqktibfR3ARdnTWvIqeON6drnCwMfivHrFX11Yr4HZJXp6oBPRFj0";

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

export { sendMail };
