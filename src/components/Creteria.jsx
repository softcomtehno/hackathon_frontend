import { Card } from '@mui/material';

const Creteria = () => {
  return (
    <section  className="container my-20">
      <div className="text-center">
        <h2 className="font-serif text-2xl font-bold text-gray-800 mb-2">
          Критерии защиты проектов
        </h2>
        <p className="text-gray-600 mx-auto mb-8 text-xl">
          По результатам защиты проекта будут определены проекты, рекомендуемые
          для финансовой поддержки на основании рейтинговой системы оценивания.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="p-5 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h3 className="font-serif text-[18px] font-semibold text-primary  mb-4 text-center">
            Оригинальность идеи (0–10 баллов)
          </h3>
          <p className="text-gray-700 text-[14px] font-medium">
            Оценка уникальности и инновационности предложенной идеи.
          </p>
        </Card>

        <Card className="p-5 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h3 className="font-serif text-[18px] font-semibold text-primary mb-4 text-center">
            Реалистичность (0–10 баллов)
          </h3>
          <p className="text-gray-700 text-[14px] font-medium">
            Оценка осуществимости идеи в реальных условиях.
          </p>
        </Card>

        <Card className="p-5 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h3 className="font-serif text-[18px] font-semibold text-primary mb-4 text-center">
            Презентация и ораторские навыки (0–10 баллов)
          </h3>
          <p className="text-gray-700 text-[14px] font-medium">
            Ясность и структурированность презентации, а также ораторские способности команды.
          </p>
        </Card>

        <Card className="p-5 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h3 className="font-serif text-[18px] font-semibold text-primary mb-4 text-center">
            Ответы на вопросы (0–10 баллов)
          </h3>
          <p className="text-gray-700 text-[14px] font-medium">
            Способность отвечать на вопросы, уверенность и аргументированность.
          </p>
        </Card>

        <Card className="p-5 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h3 className="font-serif text-[18px] font-semibold text-primary mb-4 text-center">
            Вовлечение аудитории (0–5 баллов)
          </h3>
          <p className="text-gray-700 text-[14px] font-medium">
            Способность команды вовлечь и удержать внимание аудитории.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Creteria;
