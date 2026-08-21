import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, Service } from '../../services/portfolio-data.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="services" class="sec">
      <div class="wrap">
        <div class="sec-head" appReveal>
          <span class="eyebrow">What I do</span>
          <h2>Services built to ship, not just demo.</h2>
          <p>Hire me for one piece or the whole build — here's where I add the most value.</p>
        </div>
        <div class="cards-3">
          <div class="svc" *ngFor="let s of services; let i = index" [appReveal]="i * 90">
            <div class="ic">{{ s.icon }}</div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
            <ul>
              <li *ngFor="let pt of s.points">{{ pt }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  services: Service[];
  constructor(private data: PortfolioDataService) {
    this.services = data.services;
  }
}
