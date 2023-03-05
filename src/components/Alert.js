import React from "react";

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
      <div style={{height:'50px'}}>
      {props.alert &&
    <div
      className={`alert alert-${props.alert.typ} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{props.alert.msg}</strong>: {capitalize(props.alert.typ)}
    
    </div>}
    </div>
  );
}

export default Alert
