import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { name, email, userId, avatar } = req.body;
      await prisma.user.create({
        data: {
          name: name,
          email: email,
          userId: userId,
          avatar: avatar,
        },
      });

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
