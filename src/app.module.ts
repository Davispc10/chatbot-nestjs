import { Module } from '@nestjs/common';
import { ChatBotModule } from './chat-bot/chat-bot.module';

@Module({
  imports: [ChatBotModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
