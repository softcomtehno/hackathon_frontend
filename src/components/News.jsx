import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const News = () => {
  return (
    <section className="container my-20">
      <h2 className="text-2xl font-medium font-serif mb-4">
        Наши прошедшие хакатоны
      </h2>
      <div className="flex justify-between flex-col gap-10 md:flex-row items-center flex-wrap">
        <Card sx={{ width: 300 }}>
          <CardMedia
            sx={{ height: 170 }}
            image="/photo_2024-02-15_23-06-23.jpg"
            title="tunduk"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="font-serif text-[18px]"
            >
              Хакатон Tunduk
            </Typography>
            {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          </CardContent>
        </Card>
        <Card sx={{ width: 300 }}>
          <CardMedia
            sx={{ height: 170 }}
            image="/photo_2024-02-17_21-51-07.jpg"
            title="tunduk"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="font-serif text-[18px]"
            >
              Хакатон Tunduk
            </Typography>
            {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          </CardContent>
        </Card>
        <Card sx={{ width: 300 }}>
          <CardMedia
            sx={{ height: 170 }}
            image="/photo_2024-03-28_15-42-17.jpg"
            title="it-kelecheck"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="font-serif text-[18px]"
            >
              Хакатон IT-Kelecheck
            </Typography>
            {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          </CardContent>
        </Card>

        <Card sx={{ width: 300 }}>
          <CardMedia sx={{ height: 170 }} image="/hack-3.jpg" title="tunduk" />
        </Card>
        <Card sx={{ width: 300 }}>
          <CardMedia
            sx={{ height: 170 }}
            image="/ha.jpg"
            title="it-kelecheck"
          />
        </Card>
        <Card sx={{ width: 300 }}>
          <CardMedia
            sx={{ height: 170 }}
            image="/hack-1.jpg"
            title="it-kelecheck"
          />
        </Card>
      </div>
    </section>
  );
};

export default News;
