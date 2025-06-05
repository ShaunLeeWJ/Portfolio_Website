import React from 'react';
import Link from 'next/dist/client/link';

import { ButtonBack, Section, SectionDivider, SectionTitle, ButtonFront } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>My Resume</SectionTitle>
    {/* <Boxes> */}
      {/* {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))} */}
    {/* </Boxes> */}

    <Link href="/pdf/Shaun_Lee_Wei_Jie_CV_Software_Template.pdf" passHref>
      <a target="_blank" rel="noopener noreferrer">
        <ButtonBack>Download Resume</ButtonBack>
      </a>
    </Link>

    <SectionDivider/>
  </Section>
);

export default Acomplishments;
