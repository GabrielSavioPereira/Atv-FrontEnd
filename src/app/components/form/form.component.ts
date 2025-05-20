import { CommonModule } from '@angular/common';
import { MessageObject } from './../../../models/MessageObject';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'FormComponent',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FormComponent {
  messagesList: MessageObject[] = [
    { author: "administrador", userRole: 0, messageValue: "lorem" },
    { author: "you", userRole: 1, messageValue: "lorem" },
  ];

  newMessage: string = '';

  sendMessage(message: string) {
    const messageWithoutSpaces = message.trim();
    if (!messageWithoutSpaces) return;

    this.messagesList.push({
      author: "you",
      userRole: 1,
      messageValue: messageWithoutSpaces
    });

    this.newMessage = '';
  }
}


