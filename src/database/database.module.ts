import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsUserCreateEntity } from 'src/database/entities/newscrud_route.entity';
import { BlogEntity } from './entities/blog.entity';
import { CardProduct } from './entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: true,
        entities: [CardProduct, NewsUserCreateEntity, BlogEntity],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
