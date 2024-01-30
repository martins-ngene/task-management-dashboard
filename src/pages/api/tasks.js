export default function handler(req, res) {
  if (req.method === "GET") {
    // Process a POST request
    try {
      let response = "Hello World!";
      res
        .status(200)
        .json({
          response: response,
          message: "Message was successfully sent!",
        });
    } catch (error) {
      res.status(504).json({
        name: error.name,
        message: error.message,
      });
    }
  }
}
