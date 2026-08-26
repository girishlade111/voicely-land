let resendInstance: import("resend").Resend | null | undefined;

export async function getResend() {
  if (resendInstance === undefined) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      resendInstance = null;
    } else {
      const { Resend } = await import("resend");
      resendInstance = new Resend(apiKey);
    }
  }
  return resendInstance;
}
