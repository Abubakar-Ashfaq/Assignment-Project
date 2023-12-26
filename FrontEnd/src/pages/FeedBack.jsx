import React from 'react'
import {Container} from 'react-bootstrap'
import Feed from '../components/feedback/feedback'
import Feedcard from '../components/feedback/FeedbackCard'
function FeedBack (){
    return(
<Container>
    <Feed />
   <Feedcard />
</Container>
    );
}
export default FeedBack;