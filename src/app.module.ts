import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterModule } from './character/character.module';
@Module({
  imports: [TasksModule, AuthModule, CharacterModule ,MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: `${process.env.MONGO_URI}`,
    }),
  }),
  ],
})
export class AppModule {}
