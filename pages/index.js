import Header from '../components/Header';
import Message from '../components/Message'
import Services from '../components/Services';
import FormaInformation from '../components/FormInformation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{fontFamily:"Open Sans"}}>
      <Header />
      <Message />
      <div style={{marginLeft:160}}>
        <Services />
        <FormaInformation/>
      </div>
      <Footer/>
    </div>
  )
}
