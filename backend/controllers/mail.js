const jwt = require("jsonwebtoken");
const User = require("../models/user");
const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    try {
        // Get token
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "Unauthorized" });

        // Decode token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decoded.id;
        const userName = decoded.name;

        // Fetch user with relatives
        const user = await User.findById(userId);
        if (!user || !user.relatives || user.relatives.length === 0) {
            return res.status(404).json({ message: "No relatives found" });
        }

        // Collect all relative emails
        const emails = user.relatives.map(r => r.email);

        // Setup transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            port: 465,
            auth: {
                user: "damnhye07@gmail.com",
                pass: process.env.MAIL_PASS,
            },
        });

        // Mail options
        const mailOptions = {
            from: "damnhye07@gmail.com",
            to: emails,
            subject: "🚨 SOS Alert!",
            text: `⚠️ Alert! ${user.name} may not be safe. Please check immediately.`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error sending email", error });
    }
};

module.exports = { sendMail };
