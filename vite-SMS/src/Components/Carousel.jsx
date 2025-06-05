import React, { useContext } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';


const Carousel = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const slides = [
    {
      imgSrc: "/SMSIMG/learnig01.jpeg",
      title: "Welcome to Your Learning Hub",
      description: "Manage student records, track progress, and empower academic success — all in one place."
    },
    {
      imgSrc: "/SMSIMG/learning02.png",
      title: "Smart & Secure Student Data",
      description: "Easily add, update, and track student profiles with a modern and intuitive system."
    },
    {
      imgSrc: "/SMSIMG/learning03.png",
      title: "Streamlined Course Enrollment",
      description: "Assign students to courses and manage enrollments effortlessly through our platform."
    },
    {
      imgSrc: "/SMSIMG/learning04.png",
      title: "Real-Time Updates for Admins",
      description: "Stay informed with fast, responsive access to student data anytime, anywhere."
    }
  ];

  const PrevArrow = ({ className, style, onClick }) => (
    <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
      <BiLeftArrowAlt
        className='arrows'
        style={{
          ...style,
          display: "block",
          borderRadius: "50px",
          background: 'red',
          color: 'white',
          position: 'absolute',
          padding: '2px',
          left: '60px'
        }}
      />
    </div>
  );

  const NextArrow = ({ className, style, onClick }) => (
    <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
      <BiRightArrowAlt
        className='arrows'
        style={{
          ...style,
          display: "block",
          borderRadius: "50px",
          background: 'red',
          color: 'white',
          position: 'absolute',
          padding: '2px',
          right: '60px'
        }}
      />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-screen bg-gradient-to-r from-white via-gray-200 to-orange-50">
            <div className="flex flex-col-reverse lg:flex-row gap-10 justify-center items-center h-auto lg:h-[750px] px-4 py-10 max-w-screen-xl mx-auto">

              <div className='space-y-6 text-center lg:text-left'>
                <h2 className='text-orange-500 font-semibold text-lg'>Empower Education</h2>
                <h1 className='text-2xl md:text-4xl font-bold uppercase line-clamp-2 lg:w-[500px] text-slate-800'>
                  {slide.title}
                </h1>
                <p className='text-base md:text-lg lg:w-[500px] line-clamp-3 text-slate-600'>
                  {slide.description}
                </p>
                <button
                  onClick={handleGetStarted}
                  className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
                >
                  Get Started
                </button>
              </div>

              <div>
                <img
                  src={slide.imgSrc}
                  alt={slide.title}
                  className='rounded-full w-[300px] md:w-[400px] lg:w-[500px] mx-auto hover:scale-105 transition-transform duration-300'
                />
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
