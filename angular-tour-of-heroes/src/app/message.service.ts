import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  // Cache of messages
  messages: string[] = [];
  constructor() { }

  add(message): void {
      this.messages.push(message);
  }

  clear() {
      this.messages = [];
  }

}
