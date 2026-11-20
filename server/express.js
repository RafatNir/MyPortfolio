import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import projectRoutes from "./routes/project.routes.js";
import qualificationRoutes from "./routes/qualification.routes.js";

const app = express();

// CORS 
app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "http://localhost:3002",
      "https://marvelous-gaufre-d00b69.netlify.app"
    ]
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compress());
app.use(helmet());

// Routes
app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", contactRoutes);
app.use("/", projectRoutes);
app.use("/", qualificationRoutes);

// Error handler
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res
      .status(401)
      .json({ error: err.name + ": " + err.message });
  }

  if (err) {
    console.log(err);
    return res
      .status(400)
      .json({ error: err.name + ": " + err.message });
  }

  next();
});

export default app;