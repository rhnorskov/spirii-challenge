import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module.js";

const app = await NestFactory.create(AppModule);

const configService = app.get(ConfigService);

await app.listen(configService.get("PORT") ?? 3000);
