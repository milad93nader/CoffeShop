import Header from './Components/Header';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AboutImage from './image/about.jpg';
import Menu1 from './image/menu-1.png';
import Menu2 from './image/menu-2.png';
import Menu3 from './image/menu-3.png';
import Menu4 from './image/menu-4.png';
import Menu5 from './image/menu-5.png';
import Menu6 from './image/menu-6.png';
import contact from './image/contact.png';
import Footer1 from './image/footer-1.png';
import Footer2 from './image/footer-2.png';
import Footer3 from './image/footer-3.png';
import Footer4 from './image/footer-4.png';
function App() {
  const menuItems = [
    { src: Menu1, title: "Classic Coffee Espresso", price: 10 },
    {src: Menu2, title: "Classic Coffee Espresso", price: 10 },
    {src: Menu3, title: "Classic Coffee Espresso", price: 10},
    {src: Menu4, title: "Classic Coffee Espresso", price: 10},
    {src: Menu5, title: "Classic Coffee Espresso", price: 10},
    {src: Menu6, title: "Classic Coffee Espresso", price: 10},

  ];
  return (
    <>

<Header title="Coffe Shop Website" logo=" Coffee Shop" link1="Home" link2="About" link3="Menu" link4="Contact"></Header>
   

<Home title="Discover the taste of real coffee" buttonText="Order Now" />


<Aboutus title="about us" imagePath={AboutImage} description="What makes our coffee special ?!" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, debitis alias veritatis exercitationem quo, laudantium dolorem quas nesciunt ipsam provident corporis, tenetur facere rerum dolor non? Fugiat eius maxime aperiam!"></Aboutus>

<Menu items={menuItems} title="Menu"/>

<Contact title1="Contact Us" image={contact} title2="Get in touch"></Contact>

<Footer Imagepath1={Footer1} title1="address"
 pargraph1="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 Sapiente quia aliquid velit quis et adipisci, doloremque officia"
  Imagepath2={Footer2} title2='E-mail' email1='miladnadersofteng@gmail.com'
 email2='miladnadersofteng@gmail.com' Imagepath3={Footer3} title3='Call Us' telephone='+445632157890' 
 Imagepath4={Footer4} title4='Opening hours' 
 Date1='Monday - Friday: 8:00 - 24:00' 
 Date2='Saturday: 8:00 - 23:00' Createdby='created by' Creatorname='Milad Nader' Rights='| all rights reserved! '></Footer>


    </>
  )
}

export default App
