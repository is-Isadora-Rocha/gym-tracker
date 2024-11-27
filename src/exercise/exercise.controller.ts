import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ExerciseService } from './exercise.service';

@Controller('exercise')
export class ExerciseController {
    constructor(private readonly exerciseService: ExerciseService) {}

    @Post('add')
    async createExercise(@Body() body) {
        const { name, group } = body;
        return this.exerciseService.createExercise(name, group);
    }

    @Get()
    async getAllExercises() {
        return { exercises: [] }
    }

    @Get(':id')
    async getOneExercise(@Param() params){
        return { exercise: [], params}
    }

    @Put(':id')
    async updateExercise(@Body() body, @Param() params){
        return {
            method: 'put',
            body, 
            params
        }
    }

    @Patch(':id')
    async updatePartial(@Body() body, @Param() params){
        return {
            method: 'patch',
            body, 
            params
        }
    }
    
    @Delete(':id')
    async delete(@Param() params) {
        return {
            params
        }
    }


}
