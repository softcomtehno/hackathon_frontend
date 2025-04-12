// components/Program.tsx
import { Box, Typography, Paper, Divider } from '@mui/material';

const Program = () => {
  return (
    <Box id="program" className="md:p-6 p-3 bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center mb-8">
        <Typography
          variant="h4"
          component="h1"
          className="text-center text-blue-600 mb-3 font-serif font-medium"
        >
          Программа Мероприятия
        </Typography>
      </div>

      {/* День 1 */}
      <Box className="relative mb-16 max-w-full lg:w-[800px] mx-auto">
        <Typography variant="h5" className="mb-4 font-serif">
          День 1 – Знакомство, генерация идей и начало разработки
        </Typography>
        <Typography variant="subtitle1" className="text-gray-600 mb-4">
          Время проведения: 12:00 – 14:00
        </Typography>
        <Divider orientation="vertical" flexItem className="absolute left-4 lg:left-10 h-full border-l-2 border-primary" />
        <Box className="ml-8 lg:ml-20 space-y-10">
          {[ 
            {
              time: '12:00 – 12:15',
              title: 'Регистрация участников',
              description: 'Участники приходят, регистрируются, получают бейджи и материалы (блокноты, ручки, листы с заданиями).' 
            },
            {
              time: '12:15 – 12:35',
              title: 'Введение и вдохновение',
              description: 'Презентация: «Вы — директора колледжа мечты». Примеры: VR, гибкие расписания, зелёные кампусы. Вопросы: Что не нравится в образовании? Какие технологии улучшат учёбу? Как создать комфорт?' 
            },
            {
              time: '12:35 – 13:35',
              title: 'Генерация идей в командах',
              description: 'Команды (4–6 чел.) обсуждают 2–3 проблемы в образовании, предлагают инновации и описывают колледж мечты. Вопросы: Как сделать уроки интересными? Как организовать пространство?'
            },
            {
              time: '13:35 – 14:00',
              title: 'Обратная связь и завершение дня',
              description: 'Каждая команда делится 1–2 предложениями о своей идее. Ведущий даёт советы для доработки. Домашнее задание: подумать над деталями проекта.'
            },
          ].map(({ time, title, description }) => (
            <Box key={title} className="flex items-start">
              <Box className="w-20 lg:w-28">
                <Typography variant="body1" className="text-gray-600 font-bold font-sans">
                  {time}
                </Typography>
              </Box>
              <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
                <Typography variant="body1" className="font-medium font-serif">
                  {title}
                </Typography>
                <Typography variant="body2" className="font-sans">
                  {description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>

      {/* День 2 */}
      <Box className="relative mb-16 pt-9 max-w-full lg:w-[800px] mx-auto">
        <Typography variant="h5" className="mb-4 font-serif">
          День 2 – Доработка проектов и презентации
        </Typography>
        <Typography variant="subtitle1" className="text-gray-600 mb-4">
          Время проведения: 12:00 – 14:00
        </Typography>
        <Divider orientation="vertical" flexItem className="absolute left-4 lg:left-10 h-[90%] border-l-2 border-primary" />
        <Box className="ml-8 lg:ml-20 space-y-10">
          {[ 
            {
              time: '12:00 – 12:10',
              title: 'Сбор и разогрев',
              description: 'Вспоминаем идеи первого дня. Вопросы от ведущего: Что придумали? Что хотите улучшить?'
            },
            {
              time: '12:10 – 13:00',
              title: 'Разработка проекта',
              description: 'Работа в командах: название колледжа, 2–3 инновационные идеи, описание процесса и пространства. Подготовка 3-минутной презентации.'
            },
            {
              time: '13:00 – 13:50',
              title: 'Презентации проектов',
              description: 'Каждая команда презентует идею (3 мин) + отвечает на вопросы (2 мин). Критерии: креативность, практичность, потребности студентов.'
            },
            {
              time: '13:50 – 14:00',
              title: 'Подведение итогов и награждение',
              description: 'Победители и номинации: «Инновация», «Лучшее пространство». Призы, фото, финальное слово.'
            },
          ].map(({ time, title, description }) => (
            <Box key={title} className="flex items-start">
              <Box className="w-20 lg:w-28">
                <Typography variant="body1" className="text-gray-600 font-bold font-sans">
                  {time}
                </Typography>
              </Box>
              <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
                <Typography variant="body1" className="font-medium font-serif">
                  {title}
                </Typography>
                <Typography variant="body2" className="font-sans">
                  {description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Program;