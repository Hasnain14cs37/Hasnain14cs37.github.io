import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  roles: string[];
  stats: { value: string; label: string }[];
  cvPath: string;
  currentRole = '';
  currentRoleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimer: any;

  constructor(private data: PortfolioDataService) {
    this.roles = data.roles;
    this.stats = data.stats;
    this.cvPath = data.config.cvPath;
  }

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    clearTimeout(this.typingTimer);
  }

  private type() {
    const full = this.roles[this.currentRoleIndex];
    if (this.isDeleting) {
      this.currentRole = full.substring(0, --this.charIndex);
    } else {
      this.currentRole = full.substring(0, ++this.charIndex);
    }

    let delay = this.isDeleting ? 60 : 120;

    if (!this.isDeleting && this.currentRole === full) {
      delay = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentRole === '') {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      delay = 400;
    }

    this.typingTimer = setTimeout(() => this.type(), delay);
  }
}
