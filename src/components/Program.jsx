// components/Program.tsx
import { Box, Typography, Paper, Divider } from '@mui/material';

const dayOneActivities = [
  { time: '09:30 – 10:00', title: 'Регистрация участников' },
  { time: '10:00 – 10:10', title: 'Торжественное открытие, гимн КР' },
  { time: '10:10 – 10:15', title: 'Приветственное слово (ректор МУИТ)' },
  { time: '10:15 – 10:30', title: 'Введение в тему: "Колледж мечты — как привлечь абитуриентов?"' },
  { time: '10:30 – 11:00', title: 'Мастер-класс: Как сгенерировать идею — Канат Бакытович Омурзаков' },
  { time: '11:00 – 11:30', title: 'Мастер-класс: Креативность и инновационное мышление — Тилек Абдимиталипович Зарипбеков' },
  { time: '11:30 – 12:00', title: 'Мастер-класс: Навыки презентации — Амирхан Искендерович Айдаров' },
  { time: '12:00 – 13:00', title: 'Обеденный перерыв' },
  { time: '13:00 – 14:30', title: 'Тимбилдинг: Формирование команд, распределение ролей' },
  { time: '14:30 – 16:00', title: 'Работа над проектами: генерация идей, обсуждение с наставниками, подготовка структуры презентации' },
];

const dayTwoActivities = [
  { time: '09:00 – 09:30', title: 'Прибытие участников, настройка презентаций' },
  { time: '09:30 – 09:45', title: 'Торжественное открытие финала' },
  { time: '09:45 – 10:00', title: 'Приветственное слово от представителя мэрии г. Бишкек' },
  { time: '10:00 – 13:00', title: 'Защита проектов: каждая команда — 3 минуты презентации + 2 минуты на вопросы' },
  { time: '13:00 – 13:30', title: 'Обсуждение результатов' },
  { time: '13:30 – 14:00', title: 'Церемония награждения: Победители, номинации, сертификаты и призы' },
];

const Program = () => {
  return (
    <Box id="program" className="md:p-6 p-3 bg-gray-100 min-h-screen">
      <Box className="flex flex-col items-center mb-8">
        <Typography
          variant="h4"
          component="h1"
          className="text-center text-blue-600 mb-1 font-serif font-semibold"
        >
          📅 ПРОГРАММА МЕРОПРИЯТИЯ
        </Typography>
        <Typography variant="h6" className="text-center font-serif text-gray-700">
          CreativTaimash 2025<br />
          Стартап-идеи для колледжа будущего<br />
          📍 Бишкек | 29–30 апреля 2025 года
        </Typography>
      </Box>
      <Box className="relative mb-16 mt-10 max-w-full lg:w-[800px] mx-auto">
        <Typography variant="h5" className="mb-2 font-serif text-blue-700">
          День 1 — 29 апреля (УК МУИТ)
        </Typography>
        <Typography variant="subtitle1" className="mb-4 font-sans text-gray-600 italic">
          "День Идеи" — Погружаемся в креатив, учимся мыслить, как стартаперы, создаём концепцию колледжа будущего!
        </Typography>
        <Divider orientation="vertical" flexItem className="absolute left-4 lg:left-10 h-full border-l-2 border-primary" />
        <Box className="ml-8 lg:ml-20 space-y-6">
          {dayOneActivities.map(({ time, title }) => (
            <Box key={title} className="flex items-start">
              <Box className="w-24">
                <Typography variant="body1" className="text-gray-600 font-bold font-sans">
                  {time}
                </Typography>
              </Box>
              <Paper elevation={2} className="p-4 w-full bg-white">
                <Typography variant="body1" className="font-medium font-serif">
                  {title}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="relative mb-16 pt-10 max-w-full lg:w-[800px] mx-auto">
        <Typography variant="h5" className="mb-2 font-serif text-blue-700">
          День 2 — 30 апреля (Инновационный центр)
        </Typography>
        <Typography variant="subtitle1" className="mb-4 font-sans text-gray-600 italic">
          "День Питча" — Время показать, как будет выглядеть колледж будущего! Презентации, защита и победа!
        </Typography>
        <Divider orientation="vertical" flexItem className="absolute left-4 lg:left-10 h-[90%] border-l-2 border-primary" />
        <Box className="ml-8 lg:ml-20 space-y-6">
          {dayTwoActivities.map(({ time, title }) => (
            <Box key={title} className="flex items-start">
              <Box className="w-24">
                <Typography variant="body1" className="text-gray-600 font-bold font-sans">
                  {time}
                </Typography>
              </Box>
              <Paper elevation={2} className="p-4 w-full bg-white">
                <Typography variant="body1" className="font-medium font-serif">
                  {title}
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
