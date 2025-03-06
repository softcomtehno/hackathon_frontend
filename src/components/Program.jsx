import { Box, Typography, Paper, Divider } from '@mui/material';

const Program = () => {
  return (
    <Box className="md:p-6 p-3 bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center mb-8">
        <Typography
          variant="h4"
          component="h1"
          className="text-center text-blue-600 mb-3 font-serif font-medium"
        >
          Программа Хакатона
        </Typography>
      </div>

      <Box className="relative mb-16 max-w-full lg:w-[800px] mx-auto">
        <Typography variant="h5" className=" mb-4 font-serif">
          День 1 – Понедельник, 10 Марта 2025 года
        </Typography>
        <Typography variant="subtitle1" className="text-gray-600 mb-4">
          Место проведения: УК МУИТ, 2-й корпус
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          className="absolute left-4 lg:left-10 h-full border-l-2 border-primary"
        />
        <Box className="ml-8 lg:ml-20 space-y-10">
          {[
            {
              time: '09:30 – 10:00',
              title: 'Регистрация участников',
              description:
                'Участники проходят регистрацию, получают бейджи и информационные материалы.',
            },
            {
              time: '10:00 – 10:10',
              title: 'Открытие',
              description:
                'Исполнение Гимна КР. Торжественное открытие мероприятия.',
            },
            {
              time: '10:10 – 10:15',
              title: 'Приветственная речь',
              description:
                'Ректор МУИТ, доктор технических наук, профессор Бегалиев Улугбек Турдалиевич.',
            },
            {
              time: '10:15 – 10:30',
              title: 'Объявление тем хакатона и критериев оценки',
              description:
                'Объявление направлений хакатона, правил и важной информации для участников.',
            },
            {
              time: '10:30 – 11:00',
              title: 'Спикер: Малабакиев Рамзан',
              description:
                'Middle Front-end Developer at Usta Soft, <br/> выпускник Accelarate Prosperity, автор курса "UstaZ IT"  <br/> Тема: «Как генерировать идеи?»',
            },
            {
              time: '11:00 – 11:30',
              title: 'Спикер: Кыдырмышев Акай',
              description:
                'Middle Back-end Developer at Our Era Team, ',
            },
            {
              time: '11:30 – 12:00',
              title: 'Спикер: Каныбеков Максат Октябрович',
              description:
                'Middle Frontend Developer, Product Manager at Usta Soft, <br/> финалист Prosperity CUP 2023, ментор Codify Academy. <br/> Тема: «Pitch Deck. 10 советов для успешной презентации»',
            },

            { time: '12:00 – 13:00', title: 'Обед', description: '' },
            {
              time: '13:00 – 14:30',
              title: 'Тимбилдинг',
              description:
                'Участники знакомятся друг с другом, формируют команды и учатся эффективно работать вместе.',
            },
            {
              time: '14:30 – 18:00',
              title: 'Генерация идей и разработка прототипов',
              description:
                'Начало работы над проектами под менторским сопровождением.',
            },
          ].map(({ time, title, description }) => (
            <Box key={title} className="flex items-start">
              <Box className="w-20 lg:w-28">
                <Typography
                  variant="body1"
                  className="text-gray-600 font-bold font-sans"
                >
                  {time}
                </Typography>
              </Box>
              <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
                <Typography variant="body1" className="font-medium font-serif">
                  {title}
                </Typography>
                <div className='font-sans' dangerouslySetInnerHTML={{__html:description}} >
                </div>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="relative mb-16 pt-9 max-w-full lg:w-[800px] mx-auto">
        <Typography variant="h5" className=" mb-4 font-serif">
          День 2 – Вторник, 11 марта 2025 год
        </Typography>
        <Typography variant="subtitle1" className="text-gray-600 mb-4">
          Место проведения: УК МУИТ, 2-й корпус и 1-й корпус, 4 этаж КОМТЕХНО
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          className="absolute left-4 lg:left-10 h-[90%] border-l-2 border-primary"
        />
        <Box className="ml-8 lg:ml-20 space-y-10">
          {[
            {
              time: '09:30 – 10:00',
              title: 'Регистрация участников',
              description: '',
            },
            {
              time: '10:00 – 10:30',
              title: 'Спикер: Амирхан',
              description:
                '',
            },
            {
              time: '10:30 – 11:00',
              title: 'Спикер: Омурзаков Канат',
              description:
                '',
            },
            {
              time: '11:30 – 12:00',
              title: 'Спикер: Зарипбеков Тилек',
              description:
                'Junior Back-end Developer',
            },
            { time: '11:30 – 12:30', title: 'Обеденный перерыв', description: '' },
            {
              time: '12:30 – 18:00',
              title: 'Разработка прототипов',
              description:
                'Работа над проектами с консультациями от менторов. Участники дорабатывают свои прототипы, уточняют технические детали и проводят тестирование.',
            },
          ].map(({ time, title, description }) => (
            <Box key={title} className="flex items-start">
              <Box className="w-20 lg:w-28">
                <Typography
                  variant="body1"
                  className="text-gray-600 font-bold font-sans"
                >
                  {time}
                </Typography>
              </Box>
              <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
                <Typography variant="body1" className="font-medium font-serif">
                  {title}
                </Typography>
                <div className='font-sans' dangerouslySetInnerHTML={{__html:description}} >
                </div>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
      {/* <Box className="relative max-w-full lg:w-[800px] mx-auto">
        <Typography variant="h5" className="text-primary mb-4 font-serif">
          День 3 – Среда, 30 октября 2024 года
        </Typography>
        <Typography variant="body1" className="text-gray-500 mb-6 font-sans">
          Место проведения:{' '}
          <a
            className="underline text-blue-500"
            href="https://go.2gis.com/06v8p"
          >
            Technopark
          </a>
          , конференц-зал Амфитеатр Flutter, улица Горького, 1/2, 1 этаж
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          className="absolute left-4 lg:left-10 h-[90%] border-l-2 border-primary"
        />
        <Box className="ml-8 lg:ml-20 space-y-10">
          <Box className="flex items-start">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                09:00 – 10:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-bold font-serif">
                Регистрация участников
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Участники проходят регистрацию, получают бейджи и информационные
                материалы. Каждая команда проверяет свою готовность и
                оборудование. Менторы дают последние советы перед началом
                презентаций.
              </Typography>
            </Paper>
          </Box>
          <Box className="flex items-start">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                10:00 – 10:05
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-bold font-serif">
                Открытие; Исполнение Гимна КР
              </Typography>
            </Paper>
          </Box>
          <Box className="flex items-start">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                10:05 – 10:30
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-bold font-serif">
                Приветственная речь
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Заведующий отдела организационной правовой и кадровой работы
                Департамента физической культуры и спорта, туризма и работы с
                молодежью мэрии города Бишкек Аманалиев Данияр Джоомартович,
                открывает хакатон и делится целями мероприятия.
              </Typography>
            </Paper>
          </Box>
          <Box className="flex items-start">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                10:30 – 13:30
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-bold font-serif">
                Презентации команд
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Каждая команда имеет по 2 минуты на презентацию и по 2 минуты на
                демонстрацию продукта, а также 1 минуту для вопросов и ответов.
              </Typography>
            </Paper>
          </Box>
          <Box className="flex items-start">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                13:30 – 14:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-bold font-serif">
                Фуршет
              </Typography>
            </Paper>
          </Box>
          <Box className="flex items-start">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                14:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-bold font-serif">
                Объявление победителей и награждение
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Награждение лучших команд в каждой номинации и вручение призов.
                Объявление специальных наград для самых креативных решений и
                лучших мобильных приложений.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Program;
