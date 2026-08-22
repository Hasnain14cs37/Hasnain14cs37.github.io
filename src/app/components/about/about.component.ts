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
              I'm Muhammad Hasnain, a full-stack software engineer with 4+ years building production
              software for clinical, healthcare, and product teams. I work front to back —
              Angular UIs on .NET Core / SQL Server back ends, real-time systems with SignalR —
              and build AI agents (OpenAI) that automate real engineering work.
            </p>
            <p>
              Based in Lahore, Pakistan, currently working remotely for a Houston-based company and
              open to work worldwide. Clear communication, fast turnaround, production-minded.
            </p>
            <div class="about-actions">
              <a [href]="'mailto:' + email" class="btn btn-accent">Work with me</a>
              <a [href]="upwork" target="_blank" rel="noopener" class="btn btn-ghost">View Upwork profile</a>
            </div>
          </div>

          <div class="about-creds" [appReveal]="120">
            <div class="cred"><span class="cred-k">Location</span><span class="cred-v">Lahore, PK</span></div>
            <div class="cred"><span class="cred-k">Experience</span><span class="cred-v">4+ years</span></div>
            <div class="cred"><span class="cred-k">Education</span><span class="cred-v">BS Computer Systems Eng.</span></div>
            <div class="cred"><span class="cred-k">Focus</span><span class="cred-v">Full-Stack + AI</span></div>
            <div class="cred"><span class="cred-k">Upwork</span><span class="cred-v">5.0 ★ rating</span></div>
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
