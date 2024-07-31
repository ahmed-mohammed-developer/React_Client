import React from 'react'
import './Service.css'
import { FcOk } from "react-icons/fc";


const Service = () => {

    const serviceDate = [
        {
            id: 1,
            Service1: "Web Dev",
            Service2: "Mobile App Dev",
            Service3: "UI/UX Desgin",
            Service4: "Digital Marketing",
        },
        {
            id: 2,
            Service1: "Web Dev",
            Service2: "Mobile App Dev",
            Service3: "UI/UX Desgin",
            Service4: "Digital Marketing",
        },
        {
            id: 3,
            Service1: "Web Dev",
            Service2: "Mobile App Dev",
            Service3: "UI/UX Desgin",
            Service4: "Digital Marketing",
        },
        {
            id: 4,
            Service1: "Web Dev",
            Service2: "Mobile App Dev",
            Service3: "UI/UX Desgin",
            Service4: "Digital Marketing",
        },
        {
            id: 5,
            Service1: "Web Dev",
            Service2: "Mobile App Dev",
            Service3: "UI/UX Desgin",
            Service4: "Digital Marketing",
        },
        {
            id: 6,
            Service1: "Web Dev",
            Service2: "Mobile App Dev",
            Service3: "UI/UX Desgin",
            Service4: "Digital Marketing",
        },
        {
            id: 7,
            Service1: "Web Dev",
            Service2: "Mobile App Dev",
            Service3: "UI/UX Desgin",
            Service4: "Digital Marketing",
        },
        {
            id: 8,
            Service1: "Web Dev",
            Service2: "Mobile App Dev",
            Service3: "UI/UX Desgin",
            Service4: "Digital Marketing",
        },
    ]
    const coloers = [
        "#4575f3",
        '#962e2e',
        '#00ff00',
        '#ffafc8',
        '#065535',
        '#794044',
        '#999999',
        '#ffdab9',
    ]

  return (
    <div className='container service-section' id='service'>
        <div className="section-title">
            <h5>Service</h5>
            <div className="line"></div>
        </div>



         <div className="row">
            {serviceDate.map((item, index) => (
               <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
                   <div className="services" >


                    <span className="services-number" style={{backgroundColor:coloers[index]}}>
                        <p>{item.id}</p>
                    </span>


                    <div className="list-of-service">
                        <p>
                            <FcOk size={20} style={{margin: "5px"}} /> {item.Service1}
                        </p>
                        <span className="ser_underLine"></span>
                        <p>
                            <FcOk size={20} style={{margin: "5px"}} /> {item.Service2}
                        </p>
                        <span className="ser_underLine"></span>
                        <p>
                            <FcOk size={20} style={{margin: "5px"}} /> {item.Service3}
                        </p>
                        <span className="ser_underLine"></span>
                        <p>
                            <FcOk size={20} style={{margin: "5px"}} /> {item.Service4}
                        </p>
                    </div>
                   </div>
               </div>
            ))}
         </div>
    </div>
  )
}

export default Service
