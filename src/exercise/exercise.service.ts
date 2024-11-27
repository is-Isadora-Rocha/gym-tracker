import { Injectable } from '@nestjs/common';

@Injectable()
export class ExerciseService {
    async createExercise(name: string, group: string) {
        // implementar lógica de criação no banco de dados
        return { message: `Exercise ${name} from group ${group} created successfully!` };
    }
}
