import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio!
        </SectionTitle>
        <SectionText>
          Hello I’m Shaun! A passionate software engineer in Singapore currently building scalable backend services for DBS Bank’s Internet Banking platform. 
          Feel free to explore my work—projects showcasing my skills in backend architecture, frontend design, and end-to-end deployment.
          If you'd like to collaborate or learn more about my work, don't hesitate to get in touch!
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;