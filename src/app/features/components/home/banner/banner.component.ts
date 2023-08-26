import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ImagePair, Product } from 'src/app/core/model';
import { ApiService } from 'src/app/features/services/api.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Subscription } from 'rxjs';

declare var bootstrap: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class BannerComponent implements AfterViewInit ,OnDestroy{
  @ViewChild('carousel', { static: true }) carouselRef!: ElementRef<HTMLDivElement>;
  private carousel: any;
  subscription1: Subscription | undefined;

  currentPairIndex = 0;
  public pairsOfImages: ImagePair[][] = [];

  constructor(private ApiService: ApiService) {}

  ngAfterViewInit() {
    this.createPairsOfImages();
    window.addEventListener('load', () => {
      this.initCarousel();
    });
  }

  initCarousel() {
    this.carousel = new bootstrap.Carousel(this.carouselRef.nativeElement, {
      interval: 3000,
    });
    this.startCarousel();
  }

  createPairsOfImages() {
    if (this.pairsOfImages.length === 0) {
      this.subscription1= this.ApiService.getProducts().subscribe((product: Product[]) => {
        for (let i = 0; i < product.length; i += 2) {
          const pair: ImagePair[] = [];
          if (product[i]) pair.push({ image: product[i].image, id: product[i].id });
          if (product[i + 1]) pair.push({ image: product[i + 1].image, id: product[i + 1].id });
          if (product[i + 2]) pair.push({ image: product[i + 2].image, id: product[i + 2].id });
          this.pairsOfImages.push(pair);
        }
      });
    }
  }

  startCarousel() {
    setInterval(() => {
      this.currentPairIndex =
        (this.currentPairIndex + 1) % this.pairsOfImages.length;
      this.carousel.to(this.currentPairIndex);
    }, 4000);
  }

  prevSlide() {
    this.currentPairIndex =
      (this.currentPairIndex - 1 + this.pairsOfImages.length) %
      this.pairsOfImages.length;
    this.carousel.to(this.currentPairIndex);
  }

  nextSlide() {
    this.currentPairIndex =
      (this.currentPairIndex + 1) % this.pairsOfImages.length;
    this.carousel.to(this.currentPairIndex);
  }

  
  ngOnDestroy(): void {
    this.subscription1?.unsubscribe()
  }
}
