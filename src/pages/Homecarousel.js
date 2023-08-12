import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Homecarousel = () => {
  const settings = {
    slidesToShow: 2,
    speed: 500,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Testimonial Start */}
      <div className='rbt-testimonial-area bg-color-extra2 rbt-section-gap'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title text-center mb--30'>
                <h3 className='title'>Top earning experts</h3>
                <p className='description'>
                  Their positive reviews show how DoubtQ dedicatedly helped them
                  to grow
                </p>
              </div>
            </div>
          </div>
          <div className='testimonial-item-3-activation swiper rbt-arrow-between gutter-swiper-30 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden'>
            <Slider {...settings}>
              {/* Start Single Testimonial  */}
              <div
                className='swiper-slide swiper-slide-active'
                role='group'
                aria-label='1 / 5'>
                <div className='single-slide'>
                  <div className='rbt-testimonial-box'>
                    <div className='inner'>
                      <div className='clint-info-wrapper'>
                        <div className='thumb'>
                          <img
                            src='../assets/images/testimonial/client-01.png'
                            alt='Clint Images'
                          />
                        </div>
                        <div className='client-info'>
                          <h5 className='title'>Martha Maldonado</h5>
                          <span>
                            Executive Chairman <i>@ Google</i>
                          </span>
                        </div>
                      </div>
                      <div className='description'>
                        <p className='subtitle-3'>
                          After the launch, vulputate at sapien sit amet, auctor
                          iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                          risus velit.
                        </p>
                        <div className='rating mt--20'>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div
                className='swiper-slide swiper-slide-next'
                role='group'
                aria-label='2 / 5'
                style={{ width: 445 }}>
                <div className='single-slide'>
                  <div className='rbt-testimonial-box'>
                    <div className='inner'>
                      <div className='clint-info-wrapper'>
                        <div className='thumb'>
                          <img
                            src='../assets/images/testimonial/client-02.png'
                            alt='Clint Images'
                          />
                        </div>
                        <div className='client-info'>
                          <h5 className='title'>Michael D. Lovelady</h5>
                          <span>
                            CEO <i>@ Google</i>
                          </span>
                        </div>
                      </div>
                      <div className='description'>
                        <p className='subtitle-3'>
                          Histudy education, vulputate at sapien sit amet,
                          auctor iaculis lorem. In vel hend rerit nisi.
                          Vestibulum eget.
                        </p>
                        <div className='rating mt--20'>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div
                className='swiper-slide'
                role='group'
                aria-label='3 / 5'
                style={{ width: 445 }}>
                <div className='single-slide'>
                  <div className='rbt-testimonial-box'>
                    <div className='inner'>
                      <div className='clint-info-wrapper'>
                        <div className='thumb'>
                          <img
                            src='../assets/images/testimonial/client-03.png'
                            alt='Clint Images'
                          />
                        </div>
                        <div className='client-info'>
                          <h5 className='title'>Valerie J. Creasman</h5>
                          <span>
                            Executive Designer <i>@ Google</i>
                          </span>
                        </div>
                      </div>
                      <div className='description'>
                        <p className='subtitle-3'>
                          Our educational, vulputate at sapien sit amet, auctor
                          iaculis lorem. In vel hend rerit nisi. Vestibulum
                          eget.
                        </p>
                        <div className='rating mt--20'>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div
                className='swiper-slide'
                role='group'
                aria-label='4 / 5'
                style={{ width: 445 }}>
                <div className='single-slide'>
                  <div className='rbt-testimonial-box'>
                    <div className='inner'>
                      <div className='clint-info-wrapper'>
                        <div className='thumb'>
                          <img
                            src='../assets/images/testimonial/client-03.png'
                            alt='Clint Images'
                          />
                        </div>
                        <div className='client-info'>
                          <h5 className='title'>Valerie J. Creasman</h5>
                          <span>
                            Executive Designer <i>@ Google</i>
                          </span>
                        </div>
                      </div>
                      <div className='description'>
                        <p className='subtitle-3'>
                          Our educational, vulputate at sapien sit amet, auctor
                          iaculis lorem. In vel hend rerit nisi. Vestibulum
                          eget.
                        </p>
                        <div className='rating mt--20'>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Testimonial  */}
              {/* Start Single Testimonial  */}
              <div
                className='swiper-slide'
                role='group'
                aria-label='5 / 5'
                style={{ width: 445 }}>
                <div className='single-slide'>
                  <div className='rbt-testimonial-box'>
                    <div className='inner'>
                      <div className='clint-info-wrapper'>
                        <div className='thumb'>
                          <img
                            src='../assets/images/testimonial/client-03.png'
                            alt='Clint Images'
                          />
                        </div>
                        <div className='client-info'>
                          <h5 className='title'>Valerie J. Creasman</h5>
                          <span>
                            Executive Designer <i>@ Google</i>
                          </span>
                        </div>
                      </div>
                      <div className='description'>
                        <p className='subtitle-3'>
                          Our educational, vulputate at sapien sit amet, auctor
                          iaculis lorem. In vel hend rerit nisi. Vestibulum
                          eget.
                        </p>
                        <div className='rating mt--20'>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                          <Link to='#'>
                            <i className='fa fa-star' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homecarousel;
