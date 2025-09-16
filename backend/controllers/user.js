const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const signToken = (user) => {
    return jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY, { expiresIn: "1d" });
}


const signup = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({
            email: email,
        })

        if (existingUser) {
            return res.status(400).json({ message: "user already exists" });
        }

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ message: "Please enter a valid email" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
        });


        const token = signToken(newUser);

        res.status(201).json({ token, newUser });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            email: email,
        })

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = signToken(user);
        res.status(200).json({ token, user });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const register = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const { relatives } = req.body;

        if (!Array.isArray(relatives) || relatives.length === 0) {
            return res.status(400).json({ message: "At least one relative is required" });
        }

        // Validate and add relatives
        for (const relative of relatives) {
            const { name, phone, email } = relative;

            if (!name || !phone || !email) {
                return res.status(400).json({ message: "All fields are required for each relative" });
            }

            // Email validation
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                return res.status(400).json({ message: `Invalid email format: ${email}` });
            }

            // Prevent duplicates
            const exists = user.relatives.some(r => r.email === email);
            if (exists) {
                return res.status(400).json({ message: `Relative with email ${email} already exists` });
            }

            // Add relative
            user.relatives.push({ name, phone, email });
        }

        await user.save();

        res.status(201).json({
            message: "Relatives registered successfully",
            relatives: user.relatives
        });

    } catch (err) {
        console.error("Error in registerRelative:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getAllRelatives = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!user.relatives || user.relatives.length === 0) {
            return res.status(404).json({ message: "No relatives found" });
        }

        res.status(200).json({
            message: "Relatives fetched successfully",
            relatives: user.relatives
        });
    } catch (err) {
        console.error("Error in getAllRelatives:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// PUT /api/user/UpdateRegister
const updateRegister = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ message: "User not found" });

        const { relatives } = req.body;
        if (!Array.isArray(relatives)) {
            return res.status(400).json({ message: "Invalid relatives data" });
        }

        // Replace all relatives with new list
        user.relatives = relatives;
        await user.save();

        res.status(200).json({ message: "Relatives updated successfully", relatives: user.relatives });
    } catch (err) {
        console.error("Error in updateRegister:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



const me = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .select('-password') // exclude password

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json({
            user: {
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};



module.exports = {
    signup,
    login,
    register,
    me,
    getAllRelatives,
    updateRegister
}
