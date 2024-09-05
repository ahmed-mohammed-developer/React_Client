import React, { useState } from 'react'
import { FcCollapse } from "react-icons/fc";
import { FcExpand } from "react-icons/fc";
import { CSSTransition } from 'react-transition-group';




const DataInfo = ({title,body}) => {




    
  const [show, setShow] = useState(false);

  return (
    <div className={show ? "post-card-open" : 'post-card'} onClick={() => setShow(!show)}>
      <div className="collapse-option">
        <h6>{title}</h6>
        <p>
          {show ? <FcCollapse size={20}/> : <FcExpand size={20}/>}
        </p>
      </div>
      <CSSTransition
        in={show}
        timeout={300}
        classNames="collapse"
        unmountOnExit
      >
        <div className='desc'>
        <p>{body}</p>
        </div>
      </CSSTransition>
    </div>
  );
};
export default DataInfo
