import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const {
        taskId,
        title,
        dueDate,
        description,
        isNew,
        isCompleted,
        isInProgress,
      } = req.body;
      const tasks = await prisma.task.update({
        where: {
          task_id: taskId,
        },
        data: {
          title: title,
          dueDate: dueDate,
          description: description,
          isNew: isNew,
          isCompleted: isCompleted,
          isInProgress: isInProgress,
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
