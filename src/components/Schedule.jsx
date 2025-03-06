import { Card, CardContent, Typography, Box, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { School, AccountBalance, SportsEsports, Public, Business, FitnessCenter, Apartment, VolunteerActivism } from '@mui/icons-material';

const themes = [
  { title: "EdTech", description: "Инновационные решения в сфере образования: онлайн-курсы, интерактивные платформы, персонализированное обучение.", icon: <School fontSize="large" color="primary" /> },
  { title: "FinTech", description: "Финансовые технологии для удобных платежей, управления финансами и инвестиционных решений.", icon: <AccountBalance fontSize="large" color="secondary" /> },
  { title: "Eco Tourism", description: "Проекты, направленные на развитие экологичного туризма, сохранение природы и устойчивые путешествия.", icon: <Public fontSize="large" color="success" /> },
  { title: "МСБ (Малый и средний бизнес)", description: "Цифровые решения для поддержки и развития малого и среднего бизнеса, автоматизация и маркетинг.", icon: <Business fontSize="large" color="warning" /> },
  { title: "Fitness & Sport", description: "Технологии для здорового образа жизни, спортивных активностей и персонализированных тренировок.", icon: <FitnessCenter fontSize="large" color="error" /> },
  { title: "Smart City", description: "Решения для умных городов: транспорт, энергетика, цифровизация городской инфраструктуры.", icon: <Apartment fontSize="large" color="info" /> },
  { title: "Social Impact", description: "Проекты, направленные на улучшение социальной сферы, благотворительность и инклюзивность.", icon: <VolunteerActivism fontSize="large" color="secondary" /> }
];

const HackathonDescription = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section>
      <div className="container my-20">
        <Box className="flex flex-col items-center gap-10">
          <Typography variant="h4" className="font-bold font-serif text-center text-primary">
            Темы хакатона
          </Typography>

          {isMobile ? (
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1.2}
              pagination={{ clickable: true }}
              className="w-full pb-10"
            >
              {themes.map((theme, index) => (
                <SwiperSlide key={index}>
                  <Card className="h-[220px] hover:shadow-xl transition-shadow rounded-lg bg-white flex flex-col items-center p-2">
                    {theme.icon}
                    <CardContent className="text-center">
                      <Typography variant="h6" className="font-medium font-serif text-gray-800">
                        {theme.title}
                      </Typography>
                      <Typography className="text-[gray] text-sm  font-sans mt-2">
                        {theme.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {themes.map((theme, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow rounded-lg bg-white flex flex-col items-center p-2">
                  {theme.icon}
                  <CardContent className="text-center">
                    <Typography variant="h6" className="font-medium font-serif text-gray-800">
                      {theme.title}
                    </Typography>
                    <Typography className="text-[gray] text-sm font-sans mt-2">
                      {theme.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </Box>
      </div>
    </section>
  );
};

export default HackathonDescription;
