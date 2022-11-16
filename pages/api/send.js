import sgMail from "@sendgrid/mail";

// console.log(process.env.SENDGRID_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method === "POST") {
    const { fname, lname, email, cname, hear, message } = req.body;
    const msg = {
      to: "other@sachoo.co.uk",
      from: "chromadnd@gmail.com",
      subject: `${fname} ${lname} sent you a message`,
      text: `Email from ${email}`,
      html: `<p>${cname} heard about you from ${hear} and sent the message ${message}</p>`,
    };

    try {
      await sgMail.send(msg);
      console.log(msg);
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(200).json({ success: false });
    }
  }
};
