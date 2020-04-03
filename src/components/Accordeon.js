import React from 'react'
import PropTypes from 'prop-types'
import Accordion from './Accordion/Accordion'

const Accordeon = () => (
  <div style={{border: "5px solid black"}}>
    <Accordion
           title="What is your return policy?"
           content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         />
         <Accordion
           title="Which languages does you support?"
           content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         />
         <Accordion
           title="Can I use a custom domain?"
           content="
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       </br>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       </br>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
     />
  </div>
)

Accordeon.propTypes = {
}

export default Accordeon
