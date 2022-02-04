import Image from 'next/image';
import logo from '../asset/logo.png';

export default function Header() {
    return (<>
        <div className="sm:hidden flex items-center " style={{ marginLeft: 120,marginBottom:138, marginTop: 17, marginRight: 142 }}>
            <div style={{flex:0.5, height:37}}>
                <Image src={logo} alt="Cyclebreeze logo" />
            </div>
            <div className="flex justify-between items-center basis-3/6" style={{height:37, fontWeight:"400", fontSize:14, lineHeight:14}}>
                <div>
                    About us
                </div>
                <div className="flex items-center">
                    Services
                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:10.72}}>
                        <path d="M12.28 1.46667L7.93333 5.81334C7.42 6.32668 6.58 6.32668 6.06667 5.81334L1.72 1.46667" stroke="#292D32" strokeWidth="1.5" strokemiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="flex items-center">
                    Academy
                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:10.72}}>
                        <path d="M12.28 1.46667L7.93333 5.81334C7.42 6.32668 6.58 6.32668 6.06667 5.81334L1.72 1.46667" stroke="#292D32" strokeWidth="1.5" strokemiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="flex items-center">
                    Products
                <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:10.72}}>
                        <path d="M12.28 1.46667L7.93333 5.81334C7.42 6.32668 6.58 6.32668 6.06667 5.81334L1.72 1.46667" stroke="#292D32" strokeWidth="1.5" strokemiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div>
                    Careers
                </div>
            </div>
            <div style={{flex:0.4}}>
            </div>
            <div className=" flex items-center justify-center cursor-pointer" style={{height:37,fontSize: 14, background: "linear-gradient(270.4deg, #6FC446 -4.6%, #C3E6B2 100%)",width: 102, borderRadius: 34}}>
               Contact us
            </div>
        </div>
        <div className="lg:hidden flex items-center " style={{ marginLeft: 120,marginBottom:138, marginTop: 17, marginRight: 142 }}>
            <div style={{flex:0.5, height:37}}>
                <Image src={logo} alt="Cyclebreeze logo" />
            </div>
            <div className="flex justify-between items-center basis-3/6" style={{height:37, fontWeight:"400", fontSize:14, lineHeight:14}}>
                <div>
                    About us
                </div>
                <div className="flex items-center">
                    Services
                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:10.72}}>
                        <path d="M12.28 1.46667L7.93333 5.81334C7.42 6.32668 6.58 6.32668 6.06667 5.81334L1.72 1.46667" stroke="#292D32" strokeWidth="1.5" strokemiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="flex items-center">
                    Academy
                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:10.72}}>
                        <path d="M12.28 1.46667L7.93333 5.81334C7.42 6.32668 6.58 6.32668 6.06667 5.81334L1.72 1.46667" stroke="#292D32" strokeWidth="1.5" strokemiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="flex items-center">
                    Products
                <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:10.72}}>
                        <path d="M12.28 1.46667L7.93333 5.81334C7.42 6.32668 6.58 6.32668 6.06667 5.81334L1.72 1.46667" stroke="#292D32" strokeWidth="1.5" strokemiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div>
                    Careers
                </div>
            </div>
            <div style={{flex:0.4}}>
            </div>
            <div className=" flex items-center justify-center cursor-pointer" style={{height:37,fontSize: 14, background: "linear-gradient(270.4deg, #6FC446 -4.6%, #C3E6B2 100%)",width: 102, borderRadius: 34}}>
               Contact us
            </div>
        </div>
        </>
    )
}