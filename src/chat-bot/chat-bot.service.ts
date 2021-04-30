import { Injectable, OnModuleInit } from '@nestjs/common';
import { create, Whatsapp } from 'venom-bot';

@Injectable()
export class ChatBotService implements OnModuleInit {
  async onModuleInit() {
    const chatBot = await this.create('chatbot-teste');

    await this.start(chatBot);

    console.log(`Bot teste started!!!`);
  }

  async create(name: string): Promise<Whatsapp> {
    const venom = await create(name);

    return venom;
  }

  async start(client: Whatsapp): Promise<void> {
    // await client.setTheme('light');

    await client.onMessage(async (message) => {
      if (message.body.toLowerCase() === 'oi') {
        // console.log(message.from);

        // await client.sendSeen(message.from);
        await client.setProfileName('Venom bot');

        // await client.startTyping(message.from);

        await client.sendContactVcard(
          message.from,
          '5522998756849@c.us',
          'Layraa',
        );

        // await client.stopTyping(message.from);

        // await client.sendLocation(
        //   message.from,
        //   '-13.6561589',
        //   '-69.7309264',
        //   'Brasil',
        // );
      }

      if (message.body.toLowerCase() === 'como vai?') {
        await client.sendText(message.from, 'Welcome to Venom HAHA🕷');
      }
    });
  }
}
