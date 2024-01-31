import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  try {
    await prisma.user.create({
      data: {
        name: "Alice",
        email: "alice@prisma.io",
        userId: "oiryryhn",
        avatar: "avatar",
        tasks: {
          create: {
            title: "Hello World",
            task_id: "jrangharej",
            status: "pending",
            dueDate: "hhfhdjsjjks",
            description: "jfhuvbuiwgi",
          },
        },
      },
    });
    const allUsers = await prisma.user.findMany({
      include: {
        tasks: true,
      },
    });

    console.dir(allUsers, { depth: null });
    res.status(200).json({ text: "Hello World!", users: allUsers });
  } catch (error) {
    res.status(504).json({
      name: error.name,
      message: error.message,
    });
  }
}
