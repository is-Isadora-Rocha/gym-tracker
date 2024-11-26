import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ExerciseModule } from './exercise/exercise.module';
import { WorkoutModule } from './workout/workout.module';
import { ProgressModule } from './progress/progress.module';

@Module({
  imports: [AuthModule, UserModule, ExerciseModule, WorkoutModule, ProgressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
