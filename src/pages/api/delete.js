import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { task_id } = req.body;

      // Get All Tasks From DB
      const taskInDB = await prisma.task.findMany();

      // Check if task exists
      const isTaskInDB = taskInDB.some(task => task.task_id === task_id);
      if (isTaskInDB) {
        await prisma.task.delete({
          where: {
            task_id: task_id,
          },
        });

        res.status(200).json({ message: "Deleted Task Successfully!" });
      }
    }
  } catch (error) {
    res.status(504).json({
      name: error.name,
      message: error.message,
    });
  }
}
