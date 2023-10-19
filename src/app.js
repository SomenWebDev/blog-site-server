import express from "express";
import cors from "cors";
import httpStatus from "http-status";
// Use the Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("api/v1",router)
app.get(env);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use((req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Route not found",
    errorMessage: [{ path: "", message: "API not found" }],
  });
  next();
});

export default app;
