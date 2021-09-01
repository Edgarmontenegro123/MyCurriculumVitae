import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import Logo from '../../Images/sunnyCloud.png'
import Logo2 from '../../Images/healthier.png'
import gifClimApp from '../../Images/gifClimApp.gif'
import gifHealthier from '../../Images/gifHealthier.gif'

const getItems = () => {
  return new Promise((res, rej) => {
    res([{
      id: 1,
      avatar: Logo, 
      title: 'ClimApp', 
      avatarSubheader: 'Marzo 2021', 
      cardMediaImage: gifClimApp, 
      cardContentTypography: 'Primera App FrontEnd realizada con React y una API externa.',
      iconButton: 'https://vimeo.com/manage/videos/586698718',
      typography: 'ClimApp: ',
      typographyParagraph: 'Esta es una App con una interfaz amigable, que muestra la hora y la fecha detallada del lugar donde te encuentres, con un buscador intuitivo, para que elijas tus ciudades favoritas y en ellas puedas observar los datos climáticos más relevantes.',
      typographyParagraph2: 'Para realizarla se utilizaron tecnologías como: ', 
      li1: 'JavaScript',
      li2: 'React',
      li3: 'Material UI',
      li4: 'HTML5',
      li5: 'CSS3',
      link1: 'https://climappmontenegro.vercel.app',
      link2: 'https://github.com/Edgarmontenegro123/ClimApp'},
      {
      id: 2,
      avatar: Logo2, 
      title: 'Healthier', 
      avatarSubheader: 'Agosto 2021', 
      cardMediaImage: gifHealthier, 
      cardContentTypography: 'E-Commerce realizado de manera grupal como proyecto final para Soy Henry Bootcamp.',
      iconButton: 'https://vimeo.com/manage/videos/586633960',
      typography: 'Healthier: ',
      typographyParagraph: 'Con una interfaz muy intuitiva, que permite comprar productos saludables, ordenarlos por precio, por categoría, incluirlos en una wishlist  o llevarlos a un carrito de compra donde se permite terminar el proceso de compra mediante una pasarela de pagos.',
      typographyParagraph2: 'Para realizarla se utilizaron tecnologías como: ', 
      li1: 'React',
      li2: 'Redux',
      li3: 'Material UI',
      li4: 'NodeJS',
      li5: 'PostgreSQL',
      link1: 'https://Healthier.vercel.app',
      link2: 'https://github.com/Healthier-Group/Healthier'}])
      //rej('No hay cursos disponibles!')
  })
}

export default function ListItemContainer(){
  const[item, setItem] = useState([])
  const[error, setError] = useState(null)
  useEffect(() => {
    getItems().then(items => {
      setItem(items)
    },
    err => {
      setError(err)
    })
  }, [])

  return <>
          {error && <p style = {{color: 'whitesmoke'}}>{error}</p>}
          <ItemList items = {item}/>
         </>
}
