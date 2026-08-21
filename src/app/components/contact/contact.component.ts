import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, Social } from '../../services/portfolio-data.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  socials: Social[];
  email: string;
  upwork: string;

  constructor(private data: PortfolioDataService) {
    this.socials = data.socials;
    this.email = data.config.email;
    this.upwork = data.config.upwork;
  }
}
