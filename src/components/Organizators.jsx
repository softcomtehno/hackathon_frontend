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
      <div className="flex md:flex-row flex-col mx-auto ">
        <Card className="w-[350px] mx-auto hover:shadow-lg transition-shadow duration-300 bg-white">
          <CardContent className="text-center ">
            <img src="/ourteam.jpg" alt="" className="w-[500px] h-[200px]  object-cover mx-auto " />
            <Typography
              variant="h6"
              className="font-bold text-blue-500 font-serif text-[16px]"
            >
              Команда <br /> Our Era Soft
            </Typography>
            <Typography variant="body2" className="text-gray-600 mt-2">
            </Typography>
          </CardContent>
        </Card>

        {/* <Card className="w-[350px] hover:shadow-lg transition-shadow duration-300 bg-white">
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
        </Card> */}
      </div>
    </Box>
  );
};

export default Organization;
