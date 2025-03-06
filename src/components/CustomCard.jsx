import { Card, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  margin: "20px 0",
}));

const EvaluationSystem = () => {
  return (
    <div className="container mx-auto p-6">
      <Typography variant="h4" className="text-center text-gray-900 font-bold mb-6">
        Система оценивания в хакатоне «Бишкек – город будущего»
      </Typography>
      
      <Typography variant="body1" className="text-center text-gray-700 mb-8 max-w-lg mx-auto">
        В хакатонах используется двухэтапный процесс оценивания проектов, чтобы гарантировать честность и объективность.
      </Typography>

      {/* Stage 1 */}
      <CustomCard className="bg-white">
        <CardContent>
          <Typography variant="h5" className="font-semibold text-gray-800 mb-4">
            1. Этап оценивания
          </Typography>
          <Typography variant="body2" className="text-gray-600 mb-2">
            На этом этапе члены жюри получают специальные листы оценивания или электронные формы, где они фиксируют оценки по каждому критерию для каждого проекта.
          </Typography>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>Просматривают презентации команд и демонстрации проектов.</li>
            <li>Заполняют листы оценивания, выставляя баллы по каждому критерию.</li>
            <li>Пишут комментарии или замечания для аргументации оценки.</li>
          </ul>
        </CardContent>
      </CustomCard>

      {/* Stage 2 */}
      <CustomCard className="bg-white">
        <CardContent>
          <Typography variant="h5" className="font-semibold text-gray-800 mb-4">
            2. Подсчет результатов
          </Typography>
          <Typography variant="body2" className="text-gray-600 mb-2">
            После завершения презентаций организаторы собирают листы или получают электронные результаты и суммируют баллы для каждой команды.
          </Typography>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>Суммируются баллы по каждому критерию от всех судей.</li>
            <li>Команды ранжируются по общему количеству баллов.</li>
            <li>Определяются призовые места или номинации.</li>
          </ul>
        </CardContent>
      </CustomCard>

      {/* Stage 3 */}
      <CustomCard className="bg-white">
        <CardContent>
          <Typography variant="h5" className="font-semibold text-gray-800 mb-4">
            3. Объявление победителей
          </Typography>
          <Typography variant="body2" className="text-gray-600 mb-2">
            Организаторы объявляют только результаты — победителей и команды, занявшие 2-е и 3-е места. Оценки остаются в секрете, либо передаются участникам позже.
          </Typography>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>Объявляются имена победителей и названия проектов.</li>
            <li>Вручение наград сопровождается краткими комментариями от организаторов.</li>
          </ul>
        </CardContent>
      </CustomCard>

      {/* Why Section */}
      <Box className="bg-gray-100 p-6 mt-6 rounded-md">
        <Typography variant="h6" className="font-semibold text-gray-800 mb-4">
          Почему это делается так?
        </Typography>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li><strong>Объективность:</strong> Судьи оценивают независимо, без влияния друг на друга.</li>
          <li><strong>Конфиденциальность:</strong> Результаты скрываются для исключения давления на судей и участников.</li>
          <li><strong>Справедливость:</strong> Исключается предвзятость, каждая команда получает честную оценку.</li>
        </ul>
      </Box>
    </div>
  );
};

export default EvaluationSystem;
