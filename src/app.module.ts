import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterModule } from './character/character.module';
@Module({
  imports: [TasksModule, AuthModule, MongooseModule.forRoot(
    'mongodb+srv://root:Q5wDn02zjnzmY1Dv@cluster0.ygh74.mongodb.net/task-managment?retryWrites=true&w=majority'
    ), CharacterModule,
  ],
})
export class AppModule {}
