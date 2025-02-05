import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'impactis-db-user',
      password: 'DBUser@2022!',
      database: 'landing',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, //process.env.DB_SYNC === 'true',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
