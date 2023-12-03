import { faBrain, faCalendarDays, faUserGraduate, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CounterOne = () => {


  return (
    <>
      <section className="counter-one">
        <div
          className="counter-one-bg jarallax"
          data-jarallax
          data-speed="0.2"
          data-imgPosition="50% 0%"
          style={{
            backgroundColor: 'white'
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="counter-one__single ">

                <div className="counter-one__content ">
                  <div className='counter_icon text_blue'>
                    <FontAwesomeIcon icon={faUsers}/>
                  </div>
                  <h3 className="odometer text_blue" >
                    750
                  </h3>
                  <span className="counter-one__letter text_blue">+</span>
                  <p className="counter-one__text text_blue "> <b>Members</b></p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft "
              data-wow-delay="100ms"
            >
              <div className="counter-one__single  ">
                <div className="counter-one__content  background_blue">
                  <div className='counter_icon '>
                    <FontAwesomeIcon icon={faBrain} className='text_white' />
                  </div>
                  <h3 className="odometer " >
                    00
                  </h3>
                  <span className="counter-one__letter ">+</span>
                  <p className="counter-one__text "><b>Students</b> </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="counter-one__single ">

                <div className="counter-one__content ">
                  <div className='counter_icon text_blue'>
                    <FontAwesomeIcon icon={faUserGraduate} />
                  </div>
                  <h3 className="odometer text_blue" >
                    750
                  </h3>
                  <span className="counter-one__letter text_blue">+</span>
                  <p className="counter-one__text text_blue "> <b>Alumni</b></p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft "
              data-wow-delay="100ms"
            >
              <div className="counter-one__single  ">
                <div className="counter-one__content  background_blue">
                  <div className='counter_icon '>
                    <FontAwesomeIcon icon={faCalendarDays} className='text_white' />
                                      </div>
                  <h3 className="odometer " >
                    00
                  </h3>
                  <span className="counter-one__letter ">+</span>
                  <p className="counter-one__text "><b>Event</b> </p>
                </div>
              </div>
            </div>
            {/* Repeat similar divs for other counters */}
          </div>
        </div>
      </section>
    </>
  );
}

export default CounterOne;
