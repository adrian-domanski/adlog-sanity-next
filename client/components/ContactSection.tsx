import React from 'react';
import {
  Button,
  Paragraph,
  Section,
  SectionTitle,
} from '../utils/styles/components';
import 'twin.macro';
import tw from 'twin.macro';

const ContactSection = () => {
  return (
    <div tw='bg-darkGray text-white' id='kontakt'>
      <Section tw='max-w-3xl'>
        <ContentWrapper>
          <SectionTitle>Kontakt</SectionTitle>
          <Paragraph tw='text-center mb-6'>
            Masz pytanie? Skontaktuj się ze mną za pomocą formularza
            kontaktowego poniżej.
          </Paragraph>
          <ContactForm>
            <div tw='lg:(flex space-y-0 space-x-4) space-y-4'>
              <Input type='text' placeholder='Jak masz na imię?' />
              <Input type='text' placeholder='Jaki jest Twój adres email?' />
            </div>
            <TextArea placeholder='Treść wiadomości...' />
            <Button isLight tw='w-full'>
              Wyślij
            </Button>
          </ContactForm>
        </ContentWrapper>
      </Section>
    </div>
  );
};

const ContactForm = tw.form`space-y-4`;
const Input = tw.input`w-full px-4 py-3 rounded`;
const TextArea = tw.textarea`w-full px-4 py-3 h-52 rounded`;
const ContentWrapper = tw.div`max-w-3xl mx-auto`;

export default ContactSection;
