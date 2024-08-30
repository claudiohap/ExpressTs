import { Router } from "express";
import { AppDataSource } from "../data_source";
import { User } from "../entity/user";

const userRepository = AppDataSource.getRepository(User);
const router = Router();

router.get("/", async (req, res) => {
  try {
    const usersAll = await userRepository.find();
    return res.send(usersAll);
  } catch (error) {
    console.error({ error });
    return res.send({ error: "Error al obtener los usuarios" });
  }
});

router.post("/", async (req, res) => {
  try {
    const userData = req.body;
    const userName: string = userData.name!;
    const userBirthday: Date = new Date(userData.birthday!);

    const newUser = new User();
    newUser.name = userName;
    newUser.birthday = userBirthday;

    const savedNewUser = await userRepository.save(newUser);
    return res.send(savedNewUser);
  } catch (error) {
    console.error({ error });
    return res.send({ error: "Error al crear un nuevo usuario" });
  }
});

export default router;
