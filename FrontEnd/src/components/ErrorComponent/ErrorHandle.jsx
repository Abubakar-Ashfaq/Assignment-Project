import React from "react";
import { Alert } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";

function ErrorHandle({errormsg}) {  
    useEffect(() => {
        Aos.init({ duration:500 });
        setShow(true);
    }, [errormsg]);

    const [show, setShow] = useState(true);

    return (
             show?( 
            <Alert  data-aos="zoom-out" variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oops! Looks like an error occured</Alert.Heading>
                <h4>
                Status {errormsg.status} :{errormsg.statusText}
                </h4>
                <p>
                    {errormsg.data}
                </p>
              </Alert>
            ):null
    );
  }
  
  export default ErrorHandle;