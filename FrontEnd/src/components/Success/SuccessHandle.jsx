import React from "react";
import { Alert } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";

function SuccessHandle({successmsg}) {  
    useEffect(() => {
        Aos.init({ duration: 300 });
        setShow(true);
    }, [successmsg]);

    const [show, setShow] = useState(true);

    return (
             show?( 
            <Alert  data-aos="slide-up" variant="success" onClose={() =>
                { 
            setShow(false)
            window.location.reload()
                }
            } dismissible>
                <Alert.Heading>Successfully Booked</Alert.Heading>
                <h4>
                {successmsg.message}
                </h4>
                <p>
                </p>
              </Alert>
            ):null
    );
  }
  
  export default SuccessHandle;