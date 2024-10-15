import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);
    app.listen(3333, () => {
        console.log('Listening on port 3333...');
    })
}

bootstrap();