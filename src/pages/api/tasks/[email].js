import prisma from "../../../../lib/prisma";

export default async function handler(req, res) {
  try {
    const {
      query: { email },
    } = req;
    const tasks = await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        tasks: true,
      },
    });

    res
      .status(200)
      .json({ tasks: tasks ? tasks : [], message: "Successful Operation!" });
  } catch (error) {
    res.status(504).json({
      name: error.name,
      message: error.message,
    });
  }
}
