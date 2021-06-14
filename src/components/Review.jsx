import React from 'react';
import Slider from 'react-slick';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#222b45',
    padding: theme.spacing(3),
  },
  slide: {
    margin: '0 auto',
    width: '80vw',
    hight: 400,
    '& .MuiTypography-root': {
      color: '#000000',
    },
  },
  banner: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const card = [
  {
    id: 1,
    imgUrl:
      'https://thefinancialpandora.com/wp-content/uploads/2020/09/Untitled-design-1024x576.png',
    name: 'KUNAL SHAH',
  },
  {
    id: 2,
    imgUrl: 'https://pbs.twimg.com/media/ChwCM0yVEAAr9Kt.jpg',
    name: 'LAKSHMI N MITTAL',
  },
  {
    id: 3,
    imgUrl: 'https://mumbaimirror.indiatimes.com/photo/68636148.cms',
    name: 'BHUVAN BAM',
  },
  {
    id: 4,
    imgUrl:
      'https://1.bp.blogspot.com/-A6ZR-xkSPEc/X1t-KHoqDGI/AAAAAAAABrY/7dXHcpfU9ZMunxNNLIaiw3iyytHzd69xACLcBGAsYHQ/w680/0_IMG_20200911_191458.jpg',
    name: 'NAMAN MATHUR',
  },
  {
    id: 5,
    imgUrl:
      'https://images.mid-day.com/images/images/2021/may/Sonu-Sood-pic_d.jpg',
    name: 'SONU SOOD',
  },
];

export default function Review() {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 3,
    speed: 500,

    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  const classes = useStyles();
  return (
    <div className={classes.root} align="center">
      <Typography variant="h4" component="h4" gutterBottom>
        Top Contributor
      </Typography>
      <Slider {...settings} className={classes.slide}>
        {card.map(items => (
          <Card className={classes.banner} key={items.id}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={items.imgUrl}
                title={items.name}
              />
              <CardContent align="center">
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography gutterBottom variant="h6" component="h6">
                  {items.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Slider>
    </div>
  );
}
