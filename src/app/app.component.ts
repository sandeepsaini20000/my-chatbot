import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyChatbotLibModule } from 'my-chatbot-lib';
import { MyChatbotLibComponent } from "../../projects/my-chatbot-lib/src/lib/my-chatbot-lib.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MyChatbotLibComponent]
})
export class AppComponent {
  title = 'my-chatbot';
}
