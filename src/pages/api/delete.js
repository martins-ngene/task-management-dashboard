import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { taskId } = req.body;
      const task = await prisma.task.delete({
        where: {
          task_id: taskId,
        },
      });

      res.status(200).json({ tasks: task, message: "Successful Operation!" });
    }
  } catch (error) {
    res.status(504).json({
      name: error.name,
      message: error.message,
    });
  }
}
