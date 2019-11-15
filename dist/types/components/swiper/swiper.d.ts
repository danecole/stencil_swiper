import '../../stencil.core';
export declare class DcSwiper {
    loop: boolean;
    speed: number;
    private container?;
    private wrapper?;
    private swiper;
    private options;
    componentDidLoad(): void;
    initSwiper(): void;
    update(): void;
    render(): JSX.Element;
}
