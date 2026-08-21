import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  menuOpen = false;
  progress = 0;
  activeSection = '#hero';
  email: string;

  navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  constructor(private data: PortfolioDataService) {
    this.email = data.config.email;
  }

  ngOnInit() {
    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.scrolled = scrollTop > 50;

    const doc = document.documentElement;
    const height = doc.scrollHeight - doc.clientHeight;
    this.progress = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0;

    // highlight the last section whose top has scrolled past the navbar
    let current = '#hero';
    for (const link of this.navLinks) {
      const el = document.querySelector(link.href);
      if (el && el.getBoundingClientRect().top <= 140) current = link.href;
    }
    this.activeSection = current;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollTo(href: string, event?: Event) {
    event?.preventDefault();
    this.closeMenu();
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
