import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef(null);

  const scroll = (node, left) => {
    if (!node || typeof node.scrollTo !== 'function') {
      return;
    }
    node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e, i) => {
    e.preventDefault();
    const node = carouselRef.current;
    if (!node) {
      return;
    }

    const scrollLeft = Math.floor(
      node.scrollWidth * 0.7 * (i / TimeLineData.length)
    );
    scroll(node, scrollLeft);
  };

  const handleScroll = () => {
    const node = carouselRef.current;
    if (!node) {
      return;
    }
    const index = Math.round(
      (node.scrollLeft / (node.scrollWidth * 0.7)) * TimeLineData.length
    );
    setActiveItem(index);
  };

  useEffect(() => {
    const node = carouselRef.current;
    if (!node) {
      return;
    }

    const handleResize = () => {
      const currentNode = carouselRef.current;
      if (!currentNode) {
        return;
      }
      scroll(currentNode, 0);
    };

    window.addEventListener('resize', handleResize);
    return () => 
      { 
        window.removeEventListener('resize', handleResize);
      };
  }, [carouselRef.current]);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      Hello, I'm Shaun! A Backend Engineer at DBS Bank building scalable services for the new Internet Banking platform. 
      Before pivoting to the Tech industry, my journey began as a Naval Engineering Officer in the Republic of Singapore Navy, where I honed discipline, leadership, and problem-solving under pressure. 
      I hold a Bachelor of Engineering (Honours) in Systems Engineering (ElectroMechanical) at SIT/University of Glasgow and graduated from the TFIP 2024 Immersion Programme, with a Diploma in Full-Stack Development with Java. 
      Today, I now leverage Java, Spring Boot, React, and Next.js to design end-to-end solutions. 
      Outside of work, you’ll find me on the rugby field, lifting weights, or tinkering with side projects to enhance and improve my skills.      
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}>
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button">
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
