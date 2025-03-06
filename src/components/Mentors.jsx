const Mentors = () => {
  return (
    <section className="mentor py-5">
      <div className="container ">
        <h2 className="font-serif text-2xl font-bold mb-8 text-center text-[white]">
          Ментора
        </h2>
        <div className="flex justify-between">
          <div className="card bg-[white] flex flex-col items-center w-[250px] border border-[#ccc] py-10 px-5 rounded-xl hover:shadow-lg duration-150 hover:scale-105">
            <img
              src="/public/profile2.jpg"
              alt=""
              className="rounded-full w-[100px]"
            />
            <h3 className="text-center font-serif font-bold text-[15px] text-[#636363] my-5">
              Жумаматова Гульмира
            </h3>
            <p className="font-bold text-center text-sm">
              Генерация идей.Брейншторм.
            </p>
          </div>
          <div className="card bg-[white] flex flex-col items-center w-[250px] border border-[#ccc] py-10 px-5 rounded-xl hover:shadow-lg duration-150 hover:scale-105">
            <img
              src="/public/profile2.jpg"
              alt=""
              className="rounded-full w-[100px]"
            />
            <h3 className="text-center font-serif font-bold text-[15px] text-[#636363] my-5">
              Султангазиев Самат
            </h3>
            <p className="font-bold text-center text-sm">
              Дизайн за ограниченное время
            </p>
          </div>
          <div className="card bg-[white] flex flex-col items-center w-[250px] border border-[#ccc] py-10 px-5 rounded-xl hover:shadow-lg duration-150 hover:scale-105">
            <img
              src="/public/image.png"
              alt=""
              className="rounded-full w-[100px] h-[100px] object-cover"
            />
            <h3 className="text-center font-serif font-bold text-[15px] text-[#636363] my-5">
              Сартов Ахмед
            </h3>
            <p className="font-bold text-center text-sm">
              Pithdeck. 10 советов крутой презентации
            </p>
          </div>
          <div className="card bg-[white] flex flex-col items-center w-[250px] border border-[#ccc] py-10 px-5 rounded-xl hover:shadow-lg duration-150 hover:scale-105">
            <img
              src="/public/profile2.jpg"
              alt=""
              className="rounded-full w-[100px]"
            />
            <h3 className="text-center font-serif font-bold text-[15px] text-[#636363] my-5">
              Шабельник Данил
            </h3>
            <p className="font-bold text-center text-sm">
              Как быстро вести разботку?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
