import express from "express";

const app = express();

/**
 * GET => Search a information
 * POST => Create a information
 * PUT => Change a information
 * DELETE => Delete a information
 * PATCH => Change a specific information
 */

app.get("/test", (request, response) => {
  // Request => Entering
  // Respose => Leaving
  return response.send("Olá NLW");
})

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW POST");
})

app.listen(3000, () => console.log("Server is running"));