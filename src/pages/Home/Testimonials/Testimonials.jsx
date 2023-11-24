import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import useReview from '../../../hook/useReview';

const Testimonials = () => {
    const [review] = useReview();

    return (
        <div className='my-10'>
            <div>
                <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900  sm:text-4xl text-center py-10">
                    Glowing Reviews from Our Members
                </h1>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    review.map(item =>
                        <SwiperSlide>
                            <TestimonialCard item={item}></TestimonialCard>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;