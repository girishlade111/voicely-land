let resendInstance: import("resend").Resend | null = null;

export async function getResend() {
  if (!resendInstance) {
    const { Resend } = await import("resend");
    resendInstance = new Resend(process.env.RESEND_API_KEY || "");
  }
  return resendInstance;
}
