import Link from 'next/link';
import React from 'react';
import { AiFillAlert, AiFillBuild, AiFillContacts, AiFillFile, AiFillFilePdf, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="8rem" /> <span>Shaun's Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>    
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/ShaunLeeWJ">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/shaunleeweijie/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://drive.google.com/file/d/1KJ8PvdFrF5vyaS2aeRk_7lhsBrldQ0F-/view?usp=sharing">
          <AiFillFile size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
