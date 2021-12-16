import React, { useState } from 'react'
import { SliderData } from './SliderData'
// import {CgChevronLeft,CgChevronRight} from 'react-icons/fa'
import style from './ImageSlider.module.css'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div>
      <section className={style.slider}>
        <div className={style.arrow_Left} onClick={prevSlide}>
          {' '}
        </div>
        <div className={style.arrow_Right} onClick={nextSlide}></div>

        {SliderData.map((slides, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img
                  src={slides.image}
                  alt="50% Off Products"
                  className={style.Big_S_img}
                />
              )}
            </div>
          )
        })}
      </section>

      <div>
        <img
          src="https://img.faballey.com/images/banner/41f44d87-46b6-44e9-91e7-0b32ae7be97c.gif"
          alt=""
          className={style.homeBigimg}
        />
      </div>

      <div>
        <h3 className={style.hmTitle}>WHAT WE'RE CRUSHING ON</h3>
      </div>

      <div className={style.tribox}>
        <div>
          <img
            src="https://img.faballey.com/images/banner/e53b9087-b52d-44a4-8995-cb8d573ba794.jpg"
            alt=""
            className={style.tribox_img}
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/979c00cb-86e0-44a8-876e-bb3fa2d21400.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/3ed5789c-7995-4c13-a8aa-bcf33a0d76d3.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
      </div>

      <div>
        <h3 className={style.hmTitle}>HOT RIGHT NOW</h3>
      </div>

      <div>
        <img
          src="https://img.faballey.com/images/banner/179f41c1-bad0-48d9-b586-95e3eccbd371.jpg"
          alt=""
          className={style.homeBigimg}
        />
      </div>

      <div>
        <h3 className={style.hmTitle}>SIZZLING & SPANKIN' NEW</h3>
      </div>

      <div>
        <img
          src="https://img.faballey.com/images/banner/6aac31b1-98ef-4dca-beb2-aac2ca86a0da.jpg"
          alt=""
          className={style.homeBigimg}
        />
      </div>

      <h1>Need Carousel here</h1>

      <div>
        <h3 className={style.hmTitle}>DEALS YOU DON'T WANT TO MISS</h3>
      </div>

      <div className={style.quintuple}>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/e53b9087-b52d-44a4-8995-cb8d573ba794.jpg"
            alt=""
            className={style.tribox_img}
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/e53b9087-b52d-44a4-8995-cb8d573ba794.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/e53b9087-b52d-44a4-8995-cb8d573ba794.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/e53b9087-b52d-44a4-8995-cb8d573ba794.jpg"
            alt=""
            className={style.tribox_img}
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/e53b9087-b52d-44a4-8995-cb8d573ba794.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/e53b9087-b52d-44a4-8995-cb8d573ba794.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
      </div>

      <div>
        <h3 className={style.hmTitle}>IN THE SPOTLIGHT</h3>
      </div>

      <div className={style.quintuple}>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/e53b9087-b52d-44a4-8995-cb8d573ba794.jpg"
            alt=""
            className={style.tribox_img}
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/e53b9087-b52d-44a4-8995-cb8d573ba794.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/e53b9087-b52d-44a4-8995-cb8d573ba794.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/e53b9087-b52d-44a4-8995-cb8d573ba794.jpg"
            alt=""
            className={style.tribox_img}
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/e53b9087-b52d-44a4-8995-cb8d573ba794.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/e53b9087-b52d-44a4-8995-cb8d573ba794.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
       
      </div>

      <div>
        <h4 className={style.hmTitle}>EXPLORE WHAT OUR #ALLEYGALS ARE WEARING RIGHT NOW</h4>
      </div>
      
      <h1>Need Carousel here (Which needs hover effects)</h1>


      <div>
        <img
          src="https://img.faballey.com/images/banner/48840ce2-2c6f-4acb-b609-9cf16a182a41.jpg"
          alt=""
          className={style.homeBigimg}
        />
      </div>

      <div >
        <h3 className={style.hmTitle}>RECOMMENDED FOR YOU</h3>
      </div>

      <div> <h1>Need Carousel here .....</h1></div>

      <div >
        <h3 className={style.hmTitle}>SHOP MY CART</h3>
      </div>

      <div> </div>

      <div className={style.double}>
           <div>
           <img className={style.lazy_img} src="https://img.faballey.com/images/banner/28fa85e0-9503-487d-bb55-c7cb65e490d7.jpg" data-original="https://img.faballey.com/images/banner/28fa85e0-9503-487d-bb55-c7cb65e490d7.jpg" alt="Video" data-video="https://www.youtube.com/embed/PHraULUl-7Q" />
           </div>

           <div>
           <img className={style.lazy_img} src="https://img.faballey.com/images/banner/e9d385f2-096a-4121-871a-79b361e08d09.jpg" data-original="https://img.faballey.com/images/banner/e9d385f2-096a-4121-871a-79b361e08d09.jpg" alt="Video" data-video="https://www.youtube.com/embed/6BVvZYFmU5Q" />
           </div>
           
      </div>
      <div className={style.double_si}>
           <div>
           <img className={style.lazy_img} src="https://img.faballey.com/images/banner/3ee89b13-ce33-4826-82b4-58ac74c33ea3.jpg" data-original="https://img.faballey.com/images/banner/3ee89b13-ce33-4826-82b4-58ac74c33ea3.jpg" alt="Video" data-video="https://www.youtube.com/embed/FDiTQkXHO64" />
           </div>

           <div>
               <h4 className={style.videoCnt}> FABALLEY PARTY '21</h4>
               <span className={style.videoCnt_span}></span>
               <p className={style.videoCnt_p}>As the year ends and we strut into the holiday season, it’s time to dress up and make up for all the cheer we missed last year. Presenting our Party ’21 edit - stellar cuts with dashes of glitter, dollops of shine, and a whole lot of extraness to rule the night! Here’s your cue to turn on the party mood, coz we’ve got fits that will get you to groove!</p>
           </div>
           </div>


      <div >
        <h3 className={style.hmTitle}>EXPLORE MORE</h3>
        <p className={style.bestselrTitle}>Invest in trends you'll wear on repeat</p>
      </div>

      <div className={style.quadruple}> 
      <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/a604ee66-197e-46b3-9e0d-50346d7d67e4.jpg"
            alt=""
            className={style.tribox_img}
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/890a0ce2-6c59-4f3c-b46f-bdf801af6437.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/a39b2fb9-a162-4bc8-a72e-39fc321ac6bd.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/2b45bef5-a565-4a0f-80ab-338b8eeb3f90.jpg"
            alt=""
            className={style.tribox_img}
          />{' '}
        </div>
      </div>

    </div>
  )
}

export default ImageSlider
