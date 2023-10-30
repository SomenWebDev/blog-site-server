import express from "express";
import cors from "cors";
import httpStatus from "http-status";
import router from "./app/routes/routes.js";
const app = express();
// Using the middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api/v1", router);
// app.get(env);
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use((req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Route not found",
    errorMessage: [
      {
        path: "/",
        message: "Route not found",
      },
    ],
  });
});
export default app;
