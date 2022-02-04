import Header from '../components/Header';
import Message from '../components/Message'
import Services from '../components/Services';
import FormaInformation from '../components/Details';
import FormaInformation2 from '../components/FormInformation2';
import Footer from '../components/Footer';
import Footer2 from '../components/SmallFooter2';

export default function Home() {
  return (
    <div style={{fontFamily:"Open Sans"}}>
      <Header />
      <Message />
       <div className="sm:hidden" style={{marginLeft:160}}>
        <Services />
        <FormaInformation/>
      </div>
      <div className="lg:hidden" style={{marginLeft:20}}>
        <Services />
        <FormaInformation2/>
      </div>
      <div className="lg:hidden">
      <Footer2/>
      </div>
      <div className="sm:hidden">
      <Footer/>
      </div>
    
    </div>
  )
}
