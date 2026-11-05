import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createObserveModule } from '@nestjs/observe';
import { CarsModule } from './cars/cars.module.js';
import { DealershipsModule } from './dealerships/dealerships.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'dealer',
      password: 'dealer123',
      database: 'dealerships_db',
      autoLoadEntities: true,
      synchronize: false,
    }),

      ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'taller-api-marvel',
    }),

      CarsModule,

      DealershipsModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
