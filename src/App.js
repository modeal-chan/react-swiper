import React, { useState } from 'react';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react'; // 필수! 'npm i swiper' install 후 swiper 불러오기, swiper package에서 Swiper, SwiperSlide 컴포넌트를 불로온다. [필수]
import SwiperCore, { Navigation, Pagination, Thumbs, Controller, Autoplay} from 'swiper'; // swiper에 있는 기능들 불러오기 = additional modules imports [필수]
 // swiper package에 다른 종류의 css가 있다. (import 'swiper/components/navigation/navigation.scss'; import 'swiper/components/pagination/pagination.scss';import 'swiper/components/scrollbar/scrollbar.scss';)
import 'swiper/swiper-bundle.css'; // swiper pacakge의 css 묶음. [필수]

SwiperCore.use([Navigation, Pagination, Thumbs, Controller, Autoplay]); // 사용하고자 하는 기능만 import하고, 왼쪽과 같이 선언한다. 그리고 아래 <Swiper></Swiper> 안에 속석값으로 넣어준다.

function App(){
  // 1. 이미지를 저장할 변수(배열) 만들기
  // 2. for구문으로 이미지 갯수만큼 너을 공간 만들기
  // 3. 생성한 변수에 push() 매소드로  변수에 저장.
  const slides = [];
  const slides2 = [];
  const thumbs = [];
  const [ thumbsSwiper, setThumbsSwiper ] = useState(null);
  const [ controlledSwiper, setControlledSwiper ] = useState(null);

  for(let i = 0; i < 5; ++i){
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag='li' style={{ listStyle: 'none' }} >
        <img 
          src={`https://picsum.photos/id/${i+1}/500/300`} 
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    )
  }
  for(let i = 0; i < 5; ++i){
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag='li' style={{ listStyle: 'none' }} >
        <img 
          src={`https://picsum.photos/id/${i+1}/163/100`} 
          alt={`Thumbnail ${i}`}
        />
      </SwiperSlide>
    )
  }
  for(let i = 0; i < 5+2; ++i){
    slides2.push(
      <SwiperSlide key={`slide-${i}`} tag='li' style={{ listStyle: 'none' }} >
        <img 
          src={`https://picsum.photos/id/${i+1}/500/300`} 
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    )
  }


  return (
    // return으로는 Swiper, SwiperSlide가 있어야 한다.
    <>
      <Swiper 
        // 아래는 props다.
        id='main'
        thumbs={{swiper: thumbsSwiper}}
        controller={{control: controlledSwiper}} // 같이 연동하고자 하는 swiper에 "oinSwiper"props를 추가하고 React Hook으로 제어한다.
        tag='section' 
        wrapperTag='ul' 
        id='main'
        // additional import modules을 props에 넣을 때는 소문자로 적어야 한다.
        autoplay={{delay: 1000, disableOnInteraction: false}}
        navigation 
        pagination={{clickable: true}}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        onInit={( swiper ) => console.log('Swiper initialized!', swiper)} // Swiper event의 종류 중 하나이다.
        onSlideChange={( swiper )=> console.log('swiper index changed to:', swiper.activeIndex)} // Swiper event의 종류 중 하나이다.
        onReachEnd={()=> console.log('swiper end reached!')} // Swiper event의 종류 중 하나이다.
        // 추가적인 API event는 홈페이지 참고. 'on'을 반드시 앞에 붙혀야 한다. (react에서만!!)
        >
        { slides }
      </Swiper>
      <Swiper 
      id='thumbs' 
      spaceBetween={5}
      slidesPerView={3}
      onSwiper={setThumbsSwiper}
      >
        {thumbs}
      </Swiper>
      <Swiper 
        id='' 
        onSwiper={setControlledSwiper}
        >
        {slides2}
      </Swiper>
    </>
  );
}

export default App;