import React from 'react';
import {
  Button,
  Paragraph,
  Section,
  SectionTitle,
} from '../utils/styles/components';
import 'twin.macro';
import tw from 'twin.macro';

const AboutMeSection = () => {
  return (
    <div tw='bg-darkerGray text-white' id='o-mnie'>
      <Section>
        <SectionTitle>O mnie</SectionTitle>
        <div tw='lg:(flex)'>
          <StyledImg src='/images/avatar.jpg' alt='Zdjęcie mojej twarzy' />
          <div>
            <Paragraph tw='text-center lg:(text-left)'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
              culpa quae rem dolor doloremque facilis magnam. Dignissimos illo
              sunt non ipsa saepe delectus nostrum nulla quidem tempore veniam
              similique laudantium maxime enim quas at impedit assumenda
              expedita, laboriosam magni illum beatae rem architecto. Iusto
              quidem voluptatum, rerum architecto aliquam eaque!
            </Paragraph>
            <Button
              as='a'
              href='https://adrian-domanski.pl'
              tw='block text-center mt-8 lg:(table)'
              isLight
            >
              Moja strona
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

const StyledImg = tw.img`w-1/2 rounded shadow-lg sm:w-1/3 block object-cover mx-auto my-8 lg:(mt-0 mr-8) h-1/2`;

export default AboutMeSection;
