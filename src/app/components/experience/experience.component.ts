import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, Experience } from '../../services/portfolio-data.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="experience" class="sec">
      <div class="wrap">
        <div class="sec-head" appReveal>
          <span class="eyebrow">Experience</span>
          <h2>Where I've worked.</h2>
          <p>4+ years across clinical, healthcare, and product teams — from junior developer to full-stack engineer.</p>
        </div>
        <div class="timeline">
          <article class="tl-item" *ngFor="let e of experience; let i = index" [appReveal]="i * 90">
            <div class="tl-top">
              <h3 class="tl-role">{{ e.role }}</h3>
              <span class="tl-period">{{ e.period }}</span>
            </div>
            <p class="tl-co">{{ e.company }} · {{ e.location }}</p>
            <ul class="tl-points">
              <li *ngFor="let p of e.points">{{ p }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  experience: Experience[];
  constructor(private data: PortfolioDataService) {
    this.experience = data.experience;
  }
}
