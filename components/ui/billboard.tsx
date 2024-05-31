"use client"

import { Billboard } from "@/types";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  return ( 
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
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
      >
        {data?.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundImage: `url(${image.url})` }}
              className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
            >
              <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                {/* <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                  {image.label}
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   );
};

export default Billboard;
