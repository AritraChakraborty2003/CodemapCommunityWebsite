import nodemailer from "nodemailer";
import { google } from "googleapis";
const CLIENT_ID =
  "879612379447-g1hi54bkesnn2or9rh77pvd8re4g4ho7.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//049gseUrZ3cFlCgYIARAAGAQSNwF-L9IrSGH8CPncROMPBuLMoJQc7_an-7CeePSnqyLAczUDig_HiwfPr-F_UikNGY2P_WCoH-I";

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

