import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { AiFillAlert, AiFillBuild } from 'react-icons/ai';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I work across the full web-development spectrum—building RESTful backends in Java/Spring Boot, authoring modern frontends in React/Next.js, and containerizing/deploying with Docker, Kubernetes, and CI/CD pipelines. I’m also well-versed in database design (MariaDB, PostgreSQL), cloud security patterns (OAuth2, JWT), and agile best practices including TDD and microservices.
    </SectionText>
    <List>
      {/* Front-End */}
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experienced with <br />
            React.js • Next.js • Styled-Components <br />
            JavaScript (ES6+)
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Back-End */}
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Java • Spring Boot • Node.js • Python <br />
            RESTful APIs • Hibernate/JPA • Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* DevOps & Tools */}
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps & Tools</ListTitle>
          <ListParagraph>
            Docker • Kubernetes • Git • Jenkins • Bitbucket • SonarQube • JFrog • Kafka
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Cloud & Security */}
      <ListItem>
        <picture>
          <AiFillAlert size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud & Security</ListTitle>
          <ListParagraph>
            CI/CD Pipelines • OAuth 2.0 • JSON Web Token (JWT) • AWS basics
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Best Practices */}
      <ListItem>
        <picture>
          <AiFillBuild size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Best Practices</ListTitle>
          <ListParagraph>
            Microservices Architecture • OOP • Agile/Scrum • Test-Driven Development (TDD) • Debugging
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
