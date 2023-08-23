import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ImagePair, Product } from 'src/app/core/model';
import { ApiService } from 'src/app/features/services/api.service';

declare var bootstrap: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements AfterViewInit {
  @ViewChild('carousel', { static: true })
  carouselRef!: ElementRef<HTMLDivElement>;
  private carousel: any;
  constructor(private ApiService: ApiService) { }

  currentPairIndex = 0;
  public pairsOfImages: ImagePair[][] = [];

  ngAfterViewInit() {
    this.createPairsOfImages()
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
    this.ApiService.getProducts().subscribe(( product : Product[]) => {
      console.log(product);
      
      for (let i = 0; i < product.length; i += 2) {
        const pair: ImagePair[] = [];
        if (product[i]) pair.push({ image: product[i].image, id: product[i].id });
        if (product[i + 1]) pair.push({ image: product[i + 1].image, id: product[i + 1].id });
        if (product[i + 2]) pair.push({ image: product[i + 2].image, id: product[i + 2].id });
        this.pairsOfImages.push(pair);
      }
    });
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
}
