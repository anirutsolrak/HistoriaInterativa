import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HistoriaCard from './HistoriaCard';

const HistoriaSwiper = ({ historiasFiltradas, progresso }) => {

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      sx={{ width: '100%', display: 'flex' }}
    >
      {historiasFiltradas.map((historia, index) => (
        <SwiperSlide key={historia.id} style={{ flex: index === 1 ? 2 : 1 }}>
          <HistoriaCard key={historia.id} historia={historia} progresso={progresso} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HistoriaSwiper;