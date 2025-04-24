import React from 'react';
import { Typography, Paper, Grid, Button } from '@mui/material';
import { School, Lightbulb, Build, People } from '@mui/icons-material';

const HackathonDescription = () => {
  return (
    <div className="max-w-[1200px] my-10 mx-auto p-6">
      <Paper className="p-6 shadow-lg bg-white rounded-lg">
        <Typography
          variant="h4"
          className="text-center font-semibold mb-4 text-primary"
        >
          🏫 Тема хакатона:{' '}
          <span className="text-indigo">
            Школьники — директора идеального колледжа
          </span>
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className="font-medium mb-2 text-gray-700">
              🧠 Описание:
            </Typography>
            <Typography
              variant="body1"
              className="text-gray-600 leading-relaxed"
            >
              🎯 Выбирайте одну или комбинируйте несколько идей. Главное — показать, как ваш колледж станет мечтой для будущих студентов!
              Представьте, что вы — директор нового инновационного колледжа.
              Ваша задача — разработать стратегию, которая сделает ваше учебное
              заведение самым желанным для школьников. Необходимо не только
              придумать уникальные идеи обучения, но и продумать, как продвигать
              колледж, чтобы к вам стремились поступить лучшие ученики.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className="font-medium mb-2 text-gray-700">
              🎯 Цель:
            </Typography>
            <ul className="list-disc list-inside text-gray-600">
              Создать проект образовательного учреждения, который будет:
              <li>Инновационным 💻</li>
              <li>Привлекательным для школьников 🎯</li>
              <li>Продвигающимся современными способами 🚀</li>
            </ul>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" className="font-medium mb-2 text-gray-700">
              📌 Задачи команд:
            </Typography>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Придумать “фишки” колледжа — что выделяет его среди других?
              </li>
              <li>
                Разработать рекламную кампанию — как рассказать о колледже
                ученикам и родителям?
              </li>
              <li>Создать слоган, логотип, постер или видео (по желанию)</li>
              <li>
                Подготовить презентацию проекта — убедить жюри, что именно ваш
                колледж заслуживает внимания!
              </li>
            </ul>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className="font-medium mb-2 text-gray-700">
              🎓 Роль наставников:
            </Typography>
            <ul className="list-disc list-inside text-gray-600">
              Наставники направляют команду, помогают школьникам оформлять идеи
              и готовиться к защите.
              <li>Помогают структурировать проект</li>
              <li>Консультируют по визуальной части</li>
              <li>Подсказывают, как презентовать идею</li>
              <li>Следят за распределением ролей</li>
              <li>
                Поддерживают школьников, не вмешиваясь напрямую в креативную
                часть
              </li>
              ⚠️ Наставники не делают проект за школьников, а помогают им раскрыть себя!
            </ul>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className="font-medium mb-2 text-gray-700">
            🏆 Номинации:
            </Typography>
            <ul className="list-disc list-inside text-gray-600">
<li>
Самая креативная идея привлечения школьников
</li>
<li>
Лучшая маркетинговая стратегия
</li>
<li>
Лучшее визуальное оформление
</li>
<li>
Приз зрительских симпатий
</li>
<li>
Лучшая командная работа (награда “Дружба и поддержка”)
</li>
<li>
Самый реалистичный и применимый проект
</li>
            </ul>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default HackathonDescription;
