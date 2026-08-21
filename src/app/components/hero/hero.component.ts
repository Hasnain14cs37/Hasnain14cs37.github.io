import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, Stat } from '../../services/portfolio-data.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  stats: Stat[];
  techStack: string[];
  email: string;

  constructor(private data: PortfolioDataService) {
    this.stats = data.stats;
    this.techStack = data.techStack;
    this.email = data.config.email;
  }
}
