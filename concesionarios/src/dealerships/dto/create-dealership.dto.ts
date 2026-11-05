import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class CreateDealershipDto {

    @ApiProperty() @IsString()
    name: string;

    @ApiProperty() @IsString()
    city: string;

    @ApiProperty() @IsBoolean()
    active: boolean;

}
