const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const session = require("express-session");
const ExpressError = require("./utils/expressError");
const MongoStore = require("connect-mongo");
app.use(cors());
app.use(bodyParser());

mongoose.set("strictQuery", false);
const User = require("./models/user");
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const batchRoutes = require("./routes/batchRoutes");
const userRoutes = require("./routes/userRoutes");
const timetableRoutes = require("./routes/timetableRoutes");
const subjectRoutes = require('./routes/subjectRoutes');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { verifyTokenAndTeacher } = require("./routes/verifyToken");

const store = MongoStore.create({
	mongoUrl: process.env.MONGODB_URI,
	secret: process.env.SECRET,
	touchAfter: 24 * 60 * 60,
});

store.on("error", function (e) {
	console.log("SESSION STORE ERROR", e);
});
const sessionConfig = {
	store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
	name: "session",
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
		maxAge: 1000 * 60 * 60 * 24 * 7,
	},
};

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log("DB Connection Successful");
	})
	.catch((err) => {
		console.log(err);
	});

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(
	new LocalStrategy({ usernameField: "email" }, User.authenticate())
);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);
app.use("/batches", batchRoutes);
app.use("/timetables", timetableRoutes);
app.use("/subjects", subjectRoutes);
app.use("/", userRoutes);

app.get("/", (req, res) => {
	res.send("User not found");
});

app.get("/home", (req, res) => {
	res.send("Home Page");
});

app.all('*', (req, res, next) => {
	next(new ExpressError('Page not found', 404));
})

app.use((err, req, res, next) => {
	const { statusCode = 500 } = err;
	if (!err.message) {
		err.message = 'Something went wrong';
	}
	res.status(statusCode).send(err);
})

app.listen(3000, () => {
	console.log("Serving on port 3000");
});
