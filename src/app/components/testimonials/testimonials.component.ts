import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, Testimonial } from '../../services/portfolio-data.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="testimonials" class="sec">
      <div class="wrap">
        <div class="sec-head" appReveal>
          <span class="eyebrow">Testimonials</span>
          <h2>What clients say.</h2>
          <p>Feedback from teams I've built and shipped software for.</p>
        </div>
        <div class="quotes">
          <div class="quote-card" *ngFor="let t of testimonials; let i = index" [appReveal]="i * 90">
            <div class="stars">★★★★★</div>
            <blockquote>"{{ t.quote }}"</blockquote>
            <div class="who">
              <span class="name" *ngIf="t.name">{{ t.name }}</span>
              <span class="role">{{ t.role }}<ng-container *ngIf="t.company"> · {{ t.company }}</ng-container></span>
            </div>
            <div class="note" *ngIf="t.sample">(sample — replace with a real client quote)</div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent {
  testimonials: Testimonial[];
  constructor(private data: PortfolioDataService) {
    this.testimonials = data.testimonials;
  }
}
