import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import SAB from "../images/SAB.jpg";
import SOPRA from "../images/sopra.png";
import SQOIN from "../images/sqoin.png";
import TODO from "../images/todo.PNG";
import STOCK from "../images/stock.jpg";
import PHOTO from "../images/photo.jpg";
import {Link,Route} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "End of study project",
    description:<div> <ul><li><strong STYLE="text-decoration:underline"s>Front End  :</strong>React JS , canvasJS , Bootstrap ,HTML5 ,CSS </li></ul> 
                      <ul><li><strong STYLE="text-decoration:underline"s>Back End  :</strong>Spring mvc, spring security ,spring data , JasperSoft </li></ul>
                      <ul><li><strong STYLE="text-decoration:underline"s>Bussiness Intelligence  :</strong>Talend7.2, Mysql </li></ul></div>,
    image: SAB,
    github:"Github",
    lien:"https://github.com/saadidhia/Sab2020"
  },
  {
    name: "Task",
    description: <div><p><strong>-Development of a synchronized EasyVista incident reference to
    manage customer incidents .</strong></p>
      <ul><li><strong STYLE="text-decoration:underline"s>ETL Process  : </strong>Talend7.3, AS400 .</li></ul>
                 <ul><li><strong STYLE="text-decoration:underline"s>Language : </strong> JBDB connection using JAVA8</li></ul></div>,
    image: SOPRA,
     github:"Images",
     lien:"https://drive.google.com/drive/folders/11ZQ_El8VifDiNuh6cl6HUqY3g_JOOIJr?usp=sharing"
  },
  {
    name: "Summer Project",
    description: <div><p><strong>- Realtime application performance monitoring </strong></p>
    <p><strong STYLE="text-decoration:underline">-Metrics about users : </strong>Active user, Recently used user, Today visitors .</p>
    <p><strong STYLE="text-decoration:underline">-Metrics about services : </strong> Active service , TPS, Response Time, Application profiles .</p>
    <p><strong STYLE="text-decoration:underline">-Metrics about resources  : </strong> Cpu,Memory,Network and heap usage, Connection pools .</p></div>,
    image: SQOIN,
    github:"",
    lien:""
  },
  {
    name: "Individual Project",
    description: <div><strong>-Mini Project, using my Knowledge in ReactJs as a beginner .</strong>
                      <p><strong STYLE="text-decoration:underline">-Front End : </strong>ReactJs, Bootstrap , Html5, CSS .</p>
                      <p><strong STYLE="text-decoration:underline">-Back End : </strong>Spring mvc ,Spring Security</p></div>,
    image: TODO,
    github:"Github",
    lien:"https://github.com/saadidhia/todoclient"
  },
  {
    name: "Academic project",
    description: <div><p><strong STYLE="text-decoration:underline">-Front End : </strong>Angular, Bootstrap , Html5, CSS .</p>
    <p><strong STYLE="text-decoration:underline">-Back End : </strong>Spring mvc, spring security , Spring data .</p></div>,
    image: STOCK,
    github:"Github",
    lien:"https://github.com/saadidhia/GestionStockClient"
  },
  {
    name: "Individual Project",
    description: <div><strong>-My portfolio, using my Knowledge in ReactJs as an advanced developer</strong>
     <p><strong STYLE="text-decoration:underline">-Version 1 : </strong>ReactJs, Material-ui, EmailJs, Html5, CSS .</p>
     <p><strong STYLE="text-decoration:underline">-Version 2 : </strong>ReactJs, Spring boot ,JavaMailSender .</p></div>,
    image: PHOTO,
    github:"Github",
    lien:""
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
      
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                
                <Button size="small" color="primary" href={project.lien}>
                 {project.github}
                 </Button> 
                
                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
