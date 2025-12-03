import { Directive, ElementRef, inject, Input, HostBinding, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollObserver]',
  standalone: true
})
export class ScrollObserverDirective implements OnInit, OnDestroy {
  @Input('appScrollObserver') animationClass = '';
  @Input() animationDelay: number | null = null;

  private observer!: IntersectionObserver;
  private elementRef = inject(ElementRef);

  @HostBinding('class.animate__animated') isAnimated = false;

  ngOnInit() {
    const options = {
      root: null, // use the viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the animation classes when in view
          this.isAnimated = true;
          this.elementRef.nativeElement.classList.add(this.animationClass);
          if (this.animationDelay !== null) {
            this.elementRef.nativeElement.style.setProperty('--animate-delay', `${this.animationDelay}ms`);
          }
          this.observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, options);

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
