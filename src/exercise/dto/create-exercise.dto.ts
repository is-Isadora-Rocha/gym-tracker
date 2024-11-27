import { IsString } from "class-validator";


export class CreateExerciseDTO {

    @IsString()
    name: string;

    @IsString()
    group: string;
}