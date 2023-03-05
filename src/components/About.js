import React, {useState} from "react";
export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })

    let myStyle = {
      color: props.mode === 'dark'? 'white':'#414141',
      backgroundColor:props.mode === 'dark'? '#808284':'#d4d4d4',
      border: '2px solid #aeaeae'

    }

    let meraStyle = {
      backgroundColor:props.mode === 'dark'? '#d4d4d4':'#a0a1a3',
      

    }
  return (
    
      <div className="container">
        <h1 className="my-3" style={{color: props.mode === 'dark'? 'white':'#414141'}}>About Us</h1>
       <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={meraStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze your text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the  though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={meraStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the  though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={meraStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
      </div>
  );
}
