let resendClient: import("resend").Resend | null = null;

export function getResend() {
  if (!resendClient) {
    const { Resend } = require("resend");
    resendClient = new Resend(process.env.RESEND_API_KEY || "");
  }
  return resendClient;
}
