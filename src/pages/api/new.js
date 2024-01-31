import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const {
        email,
        title,
        task_id,
        dueDate,
        description,
        isNew,
        isCompleted,
        isInProgress,
      } = req.body;
      const newTask = await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          tasks: {
            create: {
              title: title,
              task_id: task_id,
              dueDate: dueDate,
              description: description,
              isNew: isNew,
              isCompleted: isCompleted,
              isInProgress: isInProgress,
            },
          },
        },
      });

      res
        .status(200)
        .json({ newTask: newTask, message: "Successful Operation!" });
    }
  } catch (error) {
    res.status(504).json({
      name: error.name,
      message: error.message,
    });
  }
}
