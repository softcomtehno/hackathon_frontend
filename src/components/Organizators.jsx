import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
} from '@mui/material';

const Organization = () => {
  return (
    <Box className="p-6 bg-gray-100 ">
      <Typography
        variant="h4"
        component="h2"
        className="text-center text-blue-600 mb-8 font-serif font-medium text-2xl"
      >
        Организаторы Хакатона
      </Typography>
      <Grid container spacing={4} className="contai">
        <Grid item xs={12} md={4}>
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardContent className="text-center">
              <Avatar className="mx-auto h-20 w-20 bg-[white]">
                <img src="/download.jpeg" alt="Мэрия" />
              </Avatar>
              <Typography
                variant="h6"
                className="font-bold text-[16px] text-blue-600 font-serif"
              >
                Департамент физической культуры и спорта, туризма и работы с
                молодежью
              </Typography>
              <Typography variant="body2" className="text-gray-600 mt-2">
                Государственная организация, направленная на улучшение
                городского управления и поддержание культурного и спортивного
                развития города.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardContent className="text-center">
              <Avatar className="mx-auto h-20 w-20 bg-[white]">
                <img src="/2222.png" alt="" />
              </Avatar>
              <Typography
                variant="h6"
                className="font-bold text-green-600 font-serif text-[16px]"
              >
                Международный университет инновационных технологий (МУИТ)
              </Typography>
              <Typography variant="body2" className="text-gray-600 mt-2">
                Образовательное учреждение, активно содействующее развитию
                технологий и поддерживающее инновационные инициативы студентов и
                молодых специалистов.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardContent className="text-center">
              <Avatar className="mx-auto h-20 w-20 bg-[white]">
                <img
                  src="/cropped-cropped-1789_oooo.plus_-2-300x300 (4)(1).png"
                  className=""
                  alt=""
                />
              </Avatar>
              <Typography
                variant="h6"
                className="font-bold text-green-800 font-serif text-[16px]"
              >
                Бишкекский колледж компьютерных систем и технологий (КОМТЕХНО)
              </Typography>
              <Typography variant="body2" className="text-gray-600 mt-2">
                Профессиональный колледж, который готовит специалистов в области
                IT, активно участвует в проектах, направленных на развитие
                IT-сектора и поддержку инноваций.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Organization;