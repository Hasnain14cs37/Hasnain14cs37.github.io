import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  skills: { name: string; level: number; color: string }[];
  tools: { name: string; icon: string }[];
  animated = false;

  constructor(private data: PortfolioDataService) {
    this.skills = data.skills;
    this.tools = data.tools;
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.animated) {
          this.animated = true;
        }
      },
      { threshold: 0.3 }
    );
    const section = document.querySelector('#skills');
    if (section) observer.observe(section);
  }
}
