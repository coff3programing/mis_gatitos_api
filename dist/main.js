"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("@nestjs/common/pipes/validation.pipe");
const swagger_1 = require("@nestjs/swagger");
const dotenv = require("dotenv");
const main = async () => {
    dotenv.config();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    app.setGlobalPrefix('api');
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('vet')
        .setVersion('1.0')
        .addTag('vet')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const corsOptions = {
        origin: 'http://localhost:4200',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    };
    app.enableCors(corsOptions);
    await app.listen(3000);
};
main();
//# sourceMappingURL=main.js.map