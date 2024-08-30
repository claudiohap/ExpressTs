import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/user";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "",
  synchronize: true,
  logging: true,
  entities: [User],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB initialized");
  })
  .catch((error) => {
    console.error({ error });
  });
