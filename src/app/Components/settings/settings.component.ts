import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ConfigService } from '../../Services/ConfigService/config.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  
  newIp= '';
  ipMsg = '';

  constructor(private configService: ConfigService) {
  }

  updateApiUrl(): void {
    this.configService.setURL_BASE(`http://${this.newIp}:8080/api`);
    this.ipMsg = `URL base actualizada a: http://${this.newIp}:8080/api`;
  }
}

