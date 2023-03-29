const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userCtrl = {
    register: async (req, res) => {
        try {
            const { name, email, phone, password } = req.body;
            const user = await Users.findOne({ email })
            const checkPhone = await Users.findOne({ phone })
            if (user) {
                return res.status(400).json({ msg: "email is already exists" })
            }
            if (checkPhone) {
                return res.status(400).json({ msg: "phone is already exists" })
            }
            if (password < 6) {
                return res.status(400).json({ msg: "password is very short, least 6 character" })
            }
            //password encryption
            const passwordHash = await bcrypt.hash(password, 10);
        
            // xác minh người dùng với pass đã được mã hoá
            const newUser = new Users({
                name, email,phone, password: passwordHash
            })
            // lưu người dùng vào mongodb
            await newUser.save()
            //tạo jsonwebtoken để xác thực người dùng

            const accessToken = createAccessToken({ id: newUser._id })
            const refreshtoken = createRefreshAccessToken({ id: newUser._id })
            res.cookie('refreshtoken', refreshtoken, {

                httpOnly: true,
                path: 'user/refresh_token'
            })
            res.json({ accessToken })


        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    login: async (req, res) => {
        try {
            const {email, password} = req.body
            const user = await Users.findOne({email})
            if (!user) {
                return res.status(500).json({msg: "User does not exit"})
            }
            const isMatch =  await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(500).json({msg: "Incorrect password"})
            }
            // nếu đăng nhập thành công, tạo token và refresh token
            const accessToken = createAccessToken({ id: user._id })
            const refreshtoken = createRefreshAccessToken({ id: user._id })
            res.cookie('refreshToken', refreshtoken, {

                httpOnly: true,
                path: 'user/refresh_token'
            })
            res.json({accessToken});

            //res.json({msg: "Login success!"})
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken',{path: 'user/refresh_token'})
            return res.json({msg: "Logged out"})
        } catch (error) {
            return res.status(500).json({ msg: error.message })
            
        }
        
    },
    refreshToken: (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken
            if (!rf_token) {
                return res.status(400).json({ msg: "please login or register" })
            }
            jwt.verify(rf_token, process.env.REFRESH_TOKEN_CECRET, (err, user) => {
                if (err) {
                    return res.status(400).json({ msg: "please login or register" })
                }
                const accesstoken = createAccessToken({ id: user.id })
                res.json({ user, accesstoken })
            })


        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getUser: async (req, res)=>{
        try {
            const user = await Users.findById(req.user.id).select('-password') // ẩn mật khẩu khỏi request
            if (!user) {
                return res.status(400).json({msg: "User does not exist"})
            }
            res.json(user)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    updateUserInfo: async (req, res) => {
        try {
            const {name,email, password, cart} = req.body
            const passwordHash = await bcrypt.hash(password, 10);
            await Users.findOneAndUpdate({ _id: req.params.id }, {
                name, email, password: passwordHash, cart
            })

            // xác minh người dùng với pass đã được mã hoá
            // const newUser = new Users({
            //     name, email, password: passwordHash, cart
            // })
            // // lưu người dùng vào mongodb
            // await newUser.save()
            //tạo jsonwebtoken để xác thực người dùng

            const accessToken = createAccessToken({ id: Users._id })
            const refreshtoken = createRefreshAccessToken({ id: Users._id })
            res.cookie('refreshtoken', refreshtoken, {

                httpOnly: true,
                path: 'user/refresh_token'
            })
            res.json("Updated user")
            
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}
const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_CECRET, { expiresIn: '1d' })
}
const createRefreshAccessToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_CECRET, { expiresIn: '7d' })
}
module.exports = userCtrl