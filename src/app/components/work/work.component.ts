import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, Project, MiniProject } from '../../services/portfolio-data.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-work',
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="work" class="sec">
      <div class="wrap">
        <div class="sec-head" appReveal>
          <span class="eyebrow">Selected work</span>
          <h2>Products I've designed, built, and shipped.</h2>
          <p>From enterprise clinical platforms to AI tooling — a look at recent projects.</p>
        </div>
        <div class="work-grid">
          <article class="work" *ngFor="let p of projects; let i = index" [appReveal]="i * 80">
            <div class="work-thumb">
              <img [src]="p.image" [alt]="p.title" loading="lazy" />
              <div class="tint" [style.background]="p.color + '22'"></div>
            </div>
            <div class="work-body">
              <h3>{{ p.title }}</h3>
              <p>{{ p.description }}</p>
              <div class="work-meta">
                <span class="cat">{{ p.category }}</span>
                <span>{{ p.year }}</span>
              </div>
            </div>
          </article>
        </div>

        <div class="more-head" appReveal>
          <span class="eyebrow">More work</span>
          <h3>Selected engineering projects</h3>
        </div>
        <div class="more-grid">
          <div class="more-card" *ngFor="let m of more; let i = index" [appReveal]="i * 70">
            <h4>{{ m.title }}</h4>
            <p>{{ m.desc }}</p>
            <div class="more-tags"><span *ngFor="let t of m.tags">{{ t }}</span></div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class WorkComponent {
  projects: Project[];
  more: MiniProject[];
  constructor(private data: PortfolioDataService) {
    this.projects = data.projects;
    this.more = data.moreProjects;
  }
}
