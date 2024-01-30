import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Process a POST request
    try {
      const allUsers = await prisma.user.findMany();

      res.status(200).json({
        response: allUsers,
      });
    } catch (error) {
      res.status(504).json({
        name: error.name,
        message: error.message,
      });
    }
  }
}
