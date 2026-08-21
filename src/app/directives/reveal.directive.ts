import { Directive, ElementRef, Input, OnInit, OnDestroy, inject } from '@angular/core';

/**
 * Scroll-reveal directive.
 *
 * Adds the `reveal` class immediately (hiding the element) and `is-visible`
 * once it scrolls into view, letting CSS handle the fade/slide-up transition.
 *
 * Usage:
 *   <div appReveal>…</div>              plain reveal
 *   <div [appReveal]="i * 80">…</div>   staggered reveal (delay in ms)
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input('appReveal') delay: number | string = 0;

  private host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const el = this.host.nativeElement as HTMLElement;
    el.classList.add('reveal');

    const ms = Number(this.delay) || 0;
    if (ms) el.style.transitionDelay = `${ms}ms`;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            this.observer?.unobserve(el);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
