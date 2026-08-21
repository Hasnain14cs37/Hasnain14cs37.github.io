import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, ProcessStep } from '../../services/portfolio-data.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-process',
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="process" class="sec">
      <div class="wrap">
        <div class="sec-head" appReveal>
          <span class="eyebrow">How I work</span>
          <h2>A clear process, from idea to deploy.</h2>
          <p>No surprises — you always know what's happening and what's next.</p>
        </div>
        <div class="steps">
          <div class="step" *ngFor="let s of steps; let i = index" [appReveal]="i * 70">
            <div class="n">{{ s.n }}</div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProcessComponent {
  steps: ProcessStep[];
  constructor(private data: PortfolioDataService) {
    this.steps = data.process;
  }
}
