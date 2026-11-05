import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto.js';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';
import { CarStatus } from '../entities/car.entity.js';

export class UpdateCarDto extends PartialType(CreateCarDto) {

    @ApiProperty() @IsString() @IsNotEmpty()
    plate: string;
    
    @ApiProperty() @IsString() @IsNotEmpty()
    brand: string;
    
    @ApiProperty() @IsString() @IsNotEmpty()
    model: string;
    
    @ApiProperty({ minimum: 1990, maximum: 2027 }) @IsInt() @Min(1990) @Max(2027)
    year: number;

    @ApiProperty() @IsInt() @Min(0)
    price: number;
    
    @ApiProperty({ enum: CarStatus }) @IsNotEmpty() @IsEnum(CarStatus)
    status: CarStatus;
    
    @ApiProperty() @IsInt()
    dealership_id: number;

}
