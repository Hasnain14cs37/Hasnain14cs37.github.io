import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  info: { icon: string; label: string; value: string }[];
  techStack: string[];
  linkedin: string;
  upwork: string;

  constructor(private data: PortfolioDataService) {
    this.info = data.info;
    this.techStack = data.techStack;
    this.linkedin = data.config.linkedin;
    this.upwork = data.config.upwork;
  }
}
