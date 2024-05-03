import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class searchByCriteriaEngineVolumeDto {
  @IsOptional()
  @IsString()
  @Type(() => String)
  brand: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  model: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  year: number;

  @IsOptional()
  @IsString()
  @Type(() => String)
  engine: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  volume: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  detail_name: string;
}
