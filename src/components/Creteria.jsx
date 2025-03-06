import { Card } from '@mui/material';

const Creteria = () => {
  return (

    <section className="container my-20">
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
            Идея (20 баллов)
          </h3>
          <p className="text-gray-700 text-[14px] font-medium">
            Оригинальность и инновационность идеи. <br />
            Соответствие теме хакатона. <br />
            Потенциал проекта для устойчивого развития города.
          </p>
        </Card>

        <Card className="p-5 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h3 className="font-serif text-[18px] font-semibold text-primary mb-4 text-center">
            Реализация (30 баллов)
          </h3>
          <p className="text-gray-700 text-[14px] font-medium">
            Функциональность продукта. <br />
            Качество технической реализации. <br />
            Удобство интерфейса и дизайн.
          </p>
        </Card>

        <Card className="p-5 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h3 className="font-serif text-[18px] font-semibold text-primary mb-4 text-center">
            Презентация (20 баллов)
          </h3>
          <p className="text-gray-700 text-[14px] font-medium">
            Ясность и структурированность. <br />
            Убедительность аргументов. <br />
            Профессионализм команды в подаче материала.
          </p>
        </Card>

        <Card className="p-5 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h3 className="font-serif text-[18px] font-semibold text-primary mb-4 text-center">
            Потенциал дальнейшего развития (20 баллов)
          </h3>
          <p className="text-gray-700 text-[14px] font-medium">
            Реализуемость проекта. <br />
            Масштабируемость на другие города или области.
          </p>
        </Card>

        <Card className="p-5 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h3 className="font-serif text-[18px] font-semibold text-primary mb-4 text-center">
            Командная работа (10 баллов)
          </h3>
          <p className="text-gray-700 text-[14px] font-medium">
            Сотрудничество и распределение ролей. <br />
            Эффективность работы в команде.
          </p>
        </Card>
      </div>
    </section>

  );
};

export default Creteria;
