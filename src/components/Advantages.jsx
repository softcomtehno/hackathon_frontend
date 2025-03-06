import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Advantages = () => {
  return (
    <section className="my-20">
      <div className="container">
        <h2 className="font-serif text-2xl font-medium lg-max:text-center mb-5">
          На хакатоне вы
        </h2>
        <Swiper
          className="pb-10"
          modules={[Pagination]}
          spaceBetween={200}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            dynamicBullets: true,
          }}
        >
          <SwiperSlide>
            <div className="card gap-3 flex flex-col w-[100%] md:w-[400px] max-h-[345] min-h-[345px] border p-3 rounded shadow-lg">
              <img src="/pazl.png" alt="" className="h-[170px] w-[200px]" />
              <h3 className="text-[16px] font-medium font-serif">
                Создадите работающий <br /> прототип
              </h3>
              <p className="text-[16px] font-medium">
                За короткое время вы сможете создать MVP (минимально
                жизнеспособный продукт) и презентовать его жюри.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card gap-3 flex flex-col w-[100%] md:w-[400px] max-h-[345] min-h-[345px] border p-3 rounded shadow-lg">
              <img src="/people.png" alt="" className="h-[170px] w-[170px]" />
              <h3 className="text-[16px] font-medium font-serif">
                Познакомитесь с единомышленниками
              </h3>
              <p className="text-[16px] font-medium">
                Хакатон — отличное место для нетворкинга. Вы встретите
                талантливых разработчиков, дизайнеров, предпринимателей и
                экспертов.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card gap-3 flex flex-col w-[100%] md:w-[400px] max-h-[345] min-h-[345px] border p-3 rounded shadow-lg">
              <img src="/chart.png" alt="" className="h-[195px] w-[200px]" />
              <h3 className="text-[16px] font-medium font-serif">
                Получите опыт и улучшите навыки
              </h3>
              <p className="text-[16px] font-medium">
                Вы научитесь эффективно взаимодействовать с командой,
                распределять задачи и совместно решать проблемы
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card gap-3 flex flex-col w-[100%] md:w-[400px] max-h-[345] min-h-[345px] border p-3 rounded shadow-lg">
              <img src="/case.png" alt="" className="h-[195px] w-[200px] " />
              <h3 className="text-[16px] font-medium font-serif">
                Начать или развить свой стартап
              </h3>
              <p className="text-[16px] font-medium">
                Ваш проект может стать основой для успешного бизнеса. Многие
                успешные стартапы начинались с хакатонов
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Advantages;
