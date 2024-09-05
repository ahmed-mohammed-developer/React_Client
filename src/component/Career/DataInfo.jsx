import React, { useState } from 'react'
import { FcCollapse } from "react-icons/fc";
import { FcExpand } from "react-icons/fc";



const DataInfo = ({title,body}) => {




    const [show, setShow] = useState(false)

  return (
    <div className='post-card' onClick={() => setShow(!show)}>
      <div className="collapse-option">
        <h6>{title}</h6>
        <p>
           {show ? <FcCollapse size={20}/> : <FcExpand size={20}/>}
            </p>
      </div>
      {show ?  <p>{body}</p> : null }
    </div>
  )
}

export default DataInfo
