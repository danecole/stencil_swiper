import { Component, Prop } from '@stencil/core';
import Swiper from 'swiper';

@Component({
  tag: 'dc-swiper',
  styleUrl: 'swiper.scss',
  shadow: false
})
export class DcSwiper {
  // slider-options
  @Prop() loop: boolean;
  @Prop() speed: number;

  private container?: HTMLDivElement;
  private wrapper?: HTMLDivElement;
  private swiper: any;
  private options: any;

  componentDidLoad() {
    this.options = {
      //default
      loop: this.loop || true,
      speed: this.speed || 1000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
      
    }

    this.initSwiper()
  }

  initSwiper() {
    for (const slide of this.wrapper.children as any) {
      slide.classList.add('swiper-slide')
    }

    this.swiper = new Swiper (this.container, {
      ...this.options,
    })
    // console.log(this.swiper)
  }

  update() {
    this.swiper.update();
    
  }

  render() {
    return (
      <div class="swiper-container"
        ref={el => this.container = el as HTMLDivElement}>
        <div class="swiper-wrapper"
          ref={el => this.wrapper = el as HTMLDivElement}>
          <slot />
        </div>
        <div class="swiper-button-prev swiper__nav-arrow swiper__nav-arrow-prev" tabindex="0" role="button" aria-label="Previous slide">
          <i class="zmdi zmdi-chevron-left swiper__nav-arrow-icon"></i>
        </div>
        <div class="swiper-button-next swiper__nav-arrow swiper__nav-arrow-next" tabindex="0" role="button" aria-label="Next slide">
          <i class="zmdi zmdi-chevron-right swiper__nav-arrow-icon"></i>
        </div>
      </div>  
    );
  }
}
