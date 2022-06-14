/*import React from 'react'*/

function HandleName(props) {
  console.log(`props:`,props.name)
  return (
  /* <button onClick={()=>props.HandleNam('my name ')}>clickme</button>*/
  alert(props.HandleNam(`my name is sawssen`))
  
  );
}

export default HandleName