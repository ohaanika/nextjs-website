import nodemailer from 'nodemailer'
import formidable from 'formidable'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.SENDER_EMAIL_ADDRESS,
    pass: process.env.SENDER_EMAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
})

const parseFormData = (req) => {
  var form = new formidable.IncomingForm()
  return new Promise((resolve, reject) => {
    form.parse(req, (error, fields, files) => {
      if (error) reject(error)
      else resolve({ fields, files })
    })
  })
}

const handler = async (req, res) => {
  const { fields, files } = await parseFormData(req)

  const mailOptions = {
    from: process.env.SENDER_EMAIL_ADDRESS,
    to: process.env.RECIEVER_EMAIL_ADDRESS,
    replyTo: fields.email,
    subject: `Inquiry: ${fields.affiliation} - ${fields.name}`,
    text: `Email Address: ${fields.email} \n\nFound out about Zyphr by: ${fields.method} \n\n${fields.message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
  return res.status(200).json({ error: '' })
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
