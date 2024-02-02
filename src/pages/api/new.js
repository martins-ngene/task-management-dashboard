import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { email, task_id, title, deadline, description, status } = req.body;

      // Get All Tasks From DB
      const taskInDB = await prisma.task.findMany();

      // Check if task exists
      const isTaskInDB = taskInDB.some(task => task.task_id === task_id);

      if (!isTaskInDB) {
        const newTask = await prisma.user.update({
          where: {
            email: email,
          },
          data: {
            tasks: {
              create: {
                task_id: task_id,
                title: title,
                deadline: deadline,
                description: description,
                status: status,
              },
            },
          },
        });

        res
          .status(200)
          .json({ newTask: newTask, message: "Task Added Successfully!" });
      }
    }
  } catch (error) {
    res.status(504).json({
      name: error.name,
      message: error.message,
    });
  }
}
