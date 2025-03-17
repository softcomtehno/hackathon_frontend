  import { Button } from '@mui/material';
  import { useNavigate } from 'react-router-dom';

  const Intro = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
      navigate('/register');
    };

    return (
      <section className="w-full mt-20 bg-primary/10 py-16">
        <div className="md:w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
          <div className="flex flex-col items-start gap-6 max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold font-serif ">
              Creativ<span className="text-primary font-serif">Taimash:</span>{' '}
              где идеи становятся проектами
            </h1>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
            CreativTaimash – это командное соревнование среди школьников 9-х классов,
            направленное на развитие предпринимательского мышления, креативности и
            навыков презентации.✈
            </p>
            <a
              href="#program"
              className="py-[10px]  shadow-md rounded-md px-[32px]  bg-primary text-white font-bold"
            >
              Программа
            </a>
          </div>
          <img src="/intro1.png" alt="BashtUp Hackathon" />
        </div>
      </section>
    );
  };

  export default Intro;
