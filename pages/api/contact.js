import nodemailer from 'nodemailer'
import formidable from 'formidable'
import Cors from 'cors'

const cors = Cors({
  methods: ["GET", "POST"],
  origin: "*",
  optionsSuccessStatus: 200,
})

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_SENDER_EMAIL_ADDRESS,
    pass: process.env.NEXT_PUBLIC_SENDER_EMAIL_PASSWORD,
  }
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

const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

const handler = async (req, res) => {
  const { fields, files } = await parseFormData(req)
  await runMiddleware(req, res, cors)

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_SENDER_EMAIL_ADDRESS,
    to: [process.env.NEXT_PUBLIC_ADAM_EMAIL_ADDRESS, process.env.NEXT_PUBLIC_MATTHEW_EMAIL_ADDRESS],
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
