import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { email } = req.body;

      console.log(email);

      const usersInDB = await prisma.user.findMany();

      const isUserRegistered = usersInDB.some(user => user.email === email);

      if (!isUserRegistered) {
        await prisma.user.create({
          data: {
            email: email,
          },
        });
      }

      const allUsers = await prisma.user.findMany();

      res
        .status(200)
        .json({ users: allUsers, message: "User Created successfully!" });
    }
  } catch (error) {
    res.status(504).json({
      name: error.name,
      message: error.message,
    });
  }
}
