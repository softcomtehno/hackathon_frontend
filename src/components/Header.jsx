import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

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
              Баттл <br />
              Creativ<span className='font-serif text-primary'>Taimash</span> 
            </Typography>
          </Box>
          <Box className="header_box">
            <Link to="/register" className="py-[10px]  shadow-md rounded-md px-[32px]  bg-primary text-white font-bold">
              Регистрация
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
