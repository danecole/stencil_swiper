import Swiper from 'swiper';
export class DcSwiper {
    componentDidLoad() {
        this.options = {
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
        };
        this.initSwiper();
    }
    initSwiper() {
        for (const slide of this.wrapper.children) {
            slide.classList.add('swiper-slide');
        }
        this.swiper = new Swiper(this.container, Object.assign({}, this.options));
    }
    update() {
        this.swiper.update();
    }
    render() {
        return (h("div", { class: "swiper-container", ref: el => this.container = el },
            h("div", { class: "swiper-wrapper", ref: el => this.wrapper = el },
                h("slot", null)),
            h("div", { class: "swiper-button-prev swiper__nav-arrow swiper__nav-arrow-prev", tabindex: "0", role: "button", "aria-label": "Previous slide" },
                h("i", { class: "zmdi zmdi-chevron-left swiper__nav-arrow-icon" })),
            h("div", { class: "swiper-button-next swiper__nav-arrow swiper__nav-arrow-next", tabindex: "0", role: "button", "aria-label": "Next slide" },
                h("i", { class: "zmdi zmdi-chevron-right swiper__nav-arrow-icon" }))));
    }
    static get is() { return "dc-swiper"; }
    static get properties() { return {
        "loop": {
            "type": Boolean,
            "attr": "loop"
        },
        "speed": {
            "type": Number,
            "attr": "speed"
        }
    }; }
    static get style() { return "/**style-placeholder:dc-swiper:**/"; }
}
