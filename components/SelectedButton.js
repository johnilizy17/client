import React, {useState} from 'react'


export default function SelectedButton({title, width}) {

 const [selected, setSelected] = useState(false)

    return (
        <div style={
            selected? 
            {
            display: "flex",
            justifyContent: "center",
            cursor:"pointer",
            alignItems: "center",
            padding: "16px 32px",
            backgroundColor: "#6FC446",
            boxshadow: "9px 15px 45px rgba(120, 255, 214, 0.06)",
            borderRadius: "32px",
            flex: "none",
            order: "0",
            flexgrow: "0",
            marginRight:24,
            fontSize: 14,
            lineHeight: "150%",
            color: "#FFFFFF",
            width:width
        } :
        {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px 32px",
            borderRadius: "32px",
            boxshadow: "9px 15px 45px rgba(120, 255, 214, 0.06)",
            cursor:"pointer",
            flex: "none",
            order: "0",
            border: "2px solid #9C9C9C",
            color:"#9C9C9C",
            flexgrow: "0",
            marginRight:24,
            fontSize: 14,
            lineHeight: "150%",
            boxSizing:"border-box",
            filter: "drop-shadow(9px 15px 45px rgba(120, 255, 214, 0.06))",
            width:width
        }
    }
    onClick={()=>{
        if(selected){
            setSelected(false)
        } else {
            setSelected(true)
        }
    }}
    
    >
        {title}
        </div>
    )
}