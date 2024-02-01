import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { task_id, title, deadline, description, status } = req.body;
      const tasks = await prisma.task.update({
        where: {
          task_id: task_id,
        },
        data: {
          title: title,
          deadline: deadline,
          description: description,
          status: status,
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
