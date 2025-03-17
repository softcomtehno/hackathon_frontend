import React from 'react';
import { Typography, Paper, Grid, Button } from '@mui/material';
import { School, Lightbulb, Build, People } from '@mui/icons-material';

const HackathonDescription = () => {
  return (
    <div className="max-w-[1200px] my-10 mx-auto p-6">
      <Paper className="p-6 shadow-lg bg-white rounded-lg">
        <Typography variant="h4" className="text-center font-semibold mb-4 text-primary">
          🏫 Тема хакатона: <span className="text-indigo">Школьники — директора идеального колледжа</span>
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className="font-medium mb-2 text-gray-700">
              <Lightbulb className="inline mr-2" /> Описание:
            </Typography>
            <Typography variant="body1" className="text-gray-600 leading-relaxed">
              Представьте, что вы — директор колледжа. Ваша задача — создать учебное заведение с инновационными идеями и лучшими условиями для студентов!
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className="font-medium mb-2 text-gray-700">
              <Build className="inline mr-2" /> Цели:
            </Typography>
            <ul className="list-disc list-inside text-gray-600">
              <li>Создать уникальные образовательные решения 💡</li>
              <li>Применить технологии для улучшения учебного процесса 💻</li>
              <li>Построить идеальное пространство для студентов 🏫</li>
            </ul>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" className="font-medium mb-2 text-gray-700">
              <People className="inline mr-2" /> Задачи:
            </Typography>
            <ul className="list-disc list-inside text-gray-600">
              <li>Придумать инновационные идеи для колледжа 💡</li>
              <li>Составить концепцию для эффективного учебного процесса 🏫</li>
              <li>Представить проект и завоевать победу 🏆</li>
            </ul>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default HackathonDescription;
