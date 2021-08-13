import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import clsx from 'clsx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography} from '@material-ui/core'
import Logo from '../../Images/sunnyCloud.png'
import ClimApp from '../../Images/presentationClimApp.jpeg'
import GifClimApp from '../../Images/gifClimApp.gif'
import './Card.css'

const useStyles = makeStyles((theme) => ({
  root:{
    maxWidth: 345,
    marginTop: '-10%'
  },
  media:{
    height: 0,
    paddingTop: '56.25%', // 16:9
    width: '90%',
    margin: '0 auto',
    boxShadow: '0px 0px 3px 5px #52B5F2'
  },
  expand:{
    marginTop: '-5%',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen:{
    transform: 'rotate(180deg)'
  },
  avatar:{
    backgroundColor: '#52B5F2'
  }, 
  gridContainer:{
    paddingLeft: '40px',
    paddingRight: '40px'
  }
}))

export default function RecipeReviewCard(){
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return(
    <Grid container spacing = {4} className = {classes.gridContainer} justify = 'center'>
      <Grid item xs = {12} sm = {6} lg = {4}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img src = {Logo} 
                     alt = 'C'
                     width = '30px'
                     height = '30px'/>      
              </Avatar>
            }
           /*  action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            } */
            title="ClimApp"
            subheader="Marzo 2021"
          />
          <CardMedia
          className={classes.media}
          image= {GifClimApp}
          alt = 'ClimApp'
          title="ClimApp"
          >
            <media>
              <source src = {{GifClimApp}}></source>
            </media>
          </CardMedia>
            
          
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            <strong>Primera App FrontEnd realizada con React y una API externa.</strong>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton> */}
            <IconButton aria-label="share" style = {{marginTop : '-5%'}}>
              {/* <ShareIcon /> */}
              <a href = 'https://vimeo.com/manage/videos/586698718' target = '_blank' rel="noreferrer"><i id = 'icon' className="fas fa-play"></i></a>
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              /* aria-expanded={expanded}
              aria-label="show more" */
            > 
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>ClimApp:</Typography>
              <Typography paragraph>
                Esta es una App con una interfaz amigable, que muestra la hora y la fecha detallada del lugar donde te encuentres, con un buscador intuitivo, para que 
                elijas tus ciudades favoritas y en ellas puedas observar los datos climáticos más relevantes. 
              </Typography>
              <Typography paragraph>
                Para realizarla se utilizaron tecnologías como:
                <ul>
                  <li>
                    React
                  </li>
                  <li>
                    CSS3
                  </li><li>
                    Material UI
                  </li>
                </ul>
              </Typography>
              <Typography paragraph>
                <strong>Pruébala <a className = 'link' href = 'https://climappmontenegro.vercel.app' target = '_blank' rel="noreferrer">Acá!</a></strong>
              </Typography>
              <Typography>
              <strong>Observa el <a className = 'link' href = 'https://github.com/Edgarmontenegro123/ClimApp' target = '_blank' rel="noreferrer">Código</a> Acá!</strong>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <br />
        <br />
      </Grid>




{/* 
      <Grid item xs = {12} sm = {6} lg = {4}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img src = {Logo} 
                     alt = 'C'
                     width = '30px'
                     height = '30px'/>      
              </Avatar>
            }
            title="Healthier"
            subheader="Julio 2021"
          />
          <CardMedia
          className={classes.media}
          image= {ClimApp}
          alt = 'ClimApp'
          title="ClimApp"
          >
          </CardMedia>     
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            <strong>Proyecto grupal Healthier.</strong>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="share" style = {{marginTop : '-5%'}}>
              <a href = 'https://vimeo.com/manage/videos/586633960' target = '_blank' rel="noreferrer"><i id = 'icon' className="fas fa-play"></i></a>
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            > 
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Healthier:</Typography>
              <Typography paragraph>
                Esta es una App creada como proyecto final para el bootcamp de Henry, que muestra un market-place enfocado a la compra y venta de comida saludable, donde 
                podrás elegir cientos de productos, agregarlos a una lista de favoritos, agregarlos a un carrito de compras y llevar a cabo el pago mediante la pasarela 
                de pago MercadoPago. 
              </Typography>
              <Typography paragraph>
                Para realizarla se utilizaron tecnologías como:
                <ul>
                <li>
                    React
                  </li>
                  <li>
                    Redux
                  </li>
                  <li>
                    Material UI
                  </li>
                  <li>
                    CSS3
                  </li>
                  <li>
                    Node JS
                  </li>
                  <li>
                    Express
                  </li>
                  <li>
                    PostgreSQL
                  </li>
                  <li>
                    Sequelize
                  </li>
                </ul>
              </Typography>
              <Typography paragraph>
                <strong>Pruébala <a className = 'link' href = 'https://climappmontenegro.vercel.app' target = '_blank' rel="noreferrer">Acá!</a></strong>
              </Typography>
              <Typography>
              <strong>Observa el <a className = 'link' href = 'https://github.com/Healthier-Group/Healthier' target = '_blank' rel="noreferrer">Código</a> Acá!</strong>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <br />
        <br />
      </Grid> */}
    </Grid>
  )
}
