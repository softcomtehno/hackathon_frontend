import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register'); 
  };

  return (
    <AppBar position="fixed" color="default" className="shadow-none">
      <Container maxWidth="lg">
        <Toolbar className="flex justify-between items-center p-0 md:px-[20px] ">
          <Box className="header_box">
            <Typography variant="h6" className="font-medium text-[15px] md:font-bold font-serif">
              Хакатон <br />
              Basht<span className='font-serif text-primary'>UP</span> 
            </Typography>
          </Box>
          <Box className="header_box">
            <a href='https://docs.google.com/forms/d/e/1FAIpQLScfz0xYbeDQPJF7Q6jKxbWnN4EJvsoTI79dkjDg4Gob6xLM5w/viewform?usp=dialog' className="py-[10px] px-[32px] shadow-none bg-primary text-black/60 font-semibold">
              Регистрация
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
