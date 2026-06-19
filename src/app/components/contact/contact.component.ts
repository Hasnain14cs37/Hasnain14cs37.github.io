import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo: any[];
  socials: any[];
  email: string;

  constructor(private data: PortfolioDataService) {
    this.contactInfo = data.contactInfo;
    this.socials = data.socials;
    this.email = data.config.email;
  }
}
