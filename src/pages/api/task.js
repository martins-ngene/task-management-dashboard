import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { email, taskId } = req.body;
      const tasks = await prisma.user.findUnique({
        where: {
          email: email,
        },
        include: {
          tasks: {
            where: {
              task_id: taskId,
            },
          },
        },
      });

      res.status(200).json({ tasks: tasks, message: "Successful Operation!" });
    }
  } catch (error) {
    res.status(504).json({
      name: error.name,
      message: error.message,
    });
  }
}
