import SelectedButton from './SelectedButton'

export default function Services(){

    
    return(
        <div style={{marginBottom:85, marginLeft:20}}>
          <div style={{
              width: 231,
              height: 21,
              fontFamily:"Open Sans",
              fontSize: 14,
              lineHeight: "150%",
              color: "#1E1E24",
          }}>
          What services can we help you with
        </div>
        <div style={{marginTop:16}}>
        <div className="lg:flex lg:items-center">
        <SelectedButton title="Product Dev" width={145}/>
        <SelectedButton title="Web/App Dev" width={154}/>
        <SelectedButton title="Tech R&D" width={129}/>
        <SelectedButton title="Marketing" width={131}/>
        </div>
        <div className="sm:hidden flex items-center" style={{marginTop:22}}>
        <SelectedButton title="Business development" width={212}/>
        <SelectedButton title="Branding" width={124}/>
        </div>
        <div className="lg:hidden">
        <SelectedButton title="Business development" width={212}/>
        <SelectedButton title="Branding" width={124}/>
        </div>
        </div>
        </div>
    )
}