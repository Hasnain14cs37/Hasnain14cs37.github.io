import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="about" class="sec">
      <div class="wrap">
        <div class="about-wrap">
          <div class="about-copy" appReveal>
            <span class="eyebrow">About</span>
            <h2>A full-stack engineer who ships — and builds with AI.</h2>
            <p>
              I'm Muhammad Hasnain, a full-stack developer with 4+ years building production
              software for clinical, healthcare, and enterprise teams. I work front to back —
              Angular UIs on .NET / SQL back ends — and lean on AI (OpenAI, Claude, Cursor)
              to move faster without cutting corners.
            </p>
            <p>
              Based in Bahawalpur, Pakistan, working with clients worldwide. Clear communication,
              fast turnaround, and a production-minded approach on every build.
            </p>
            <div class="about-actions">
              <a [href]="'mailto:' + email" class="btn btn-accent">Work with me</a>
              <a [href]="upwork" target="_blank" rel="noopener" class="btn btn-ghost">View Upwork profile</a>
            </div>
          </div>

          <div class="about-creds" [appReveal]="120">
            <div class="cred"><span class="cred-k">Location</span><span class="cred-v">Bahawalpur, PK</span></div>
            <div class="cred"><span class="cred-k">Experience</span><span class="cred-v">4+ years</span></div>
            <div class="cred"><span class="cred-k">Focus</span><span class="cred-v">Full-Stack + AI</span></div>
            <div class="cred"><span class="cred-k">Upwork</span><span class="cred-v">5.0 ★ rating</span></div>
            <div class="cred"><span class="cred-k">Response</span><span class="cred-v">0–4 hours</span></div>
            <div class="cred"><span class="cred-k">Availability</span><span class="cred-v accent">Open to work</span></div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  email: string;
  upwork: string;
  constructor(private data: PortfolioDataService) {
    this.email = data.config.email;
    this.upwork = data.config.upwork;
  }
}
