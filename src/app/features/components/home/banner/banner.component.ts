import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ImagePair, product } from 'src/app/core/model';
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
    this.ApiService.getProdects().subscribe(( books : product[]) => {
      console.log(books);
      for (let i = 0; i < books.length; i += 2) {
        const pair: ImagePair[] = [];
        if (books[i]) pair.push({ image: books[i].image, id: books[i].id });
        if (books[i + 1]) pair.push({ image: books[i + 1].image, id: books[i + 1].id });
        if (books[i + 2]) pair.push({ image: books[i + 2].image, id: books[i + 2].id });
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
