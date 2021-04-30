import { Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ChatBotService } from './chat-bot.service';

@Controller('chatbot')
export class ChatBotController {
  constructor(private readonly chatBotService: ChatBotService) {}

  @Post('create/:name')
  async createChatBot(
    @Param('name') name: string,
    @Res() res,
  ): Promise<string> {
    const chatBot = await this.chatBotService.create(name);

    this.chatBotService.start(chatBot);

    return res.status(HttpStatus.OK).json(`Bot ${name} started!!!`);
  }
}
