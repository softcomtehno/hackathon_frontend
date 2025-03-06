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
            <span className='text-primary font-serif'>BashtUp:</span> Стартуй с идеей – выйди со стартапом! 
          </h1>
          <p className="text-lg text-gray-700 font-sans leading-relaxed">
            BashtUp – хакатон для студентов 1-2 курсов колледжа Комтехно! За 48 часов ты превратишь идею в MVP, прокачаешь командную работу и получишь поддержку экспертов. Биз менен Башта! 🚀
          </p>
          <Button 
            onClick={handleRegister} 
            variant="contained" 
            className="bg-primary hover:bg-primary/90 transition-all duration-300 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
          >
            Регистрация
          </Button>
        </div>
        <img 
          src="/intro1.png" 
          alt="BashtUp Hackathon" 
        />
      </div>
    </section>
  );
};

export default Intro;
