import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: 'rkpatel1706@gmail.com', // Your email where you'll receive emails
      from: process.env.NEXT_PUBLIC_SENDGRID_MAIL, // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>
              <div>Email: ${req.body.email}</div>
              <div>Full Name: ${req.body.fullname}</div>
              <div>Message: ${req.body.message}</div>
            </div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;