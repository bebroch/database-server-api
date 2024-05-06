import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule } from './database/database.module';
import { NewscrudRoutesModule } from './newscrud_routes/newscrud_routes.module';
import { SparesModule } from './spares/spares.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SparesModule,
    DatabaseModule,
    ScheduleModule.forRoot(),
    NewscrudRoutesModule,
    // TestttModule, // Если нужно будет использовать мою загрузку в бд
  ],
})
export class AppModule {}
