import tw, { styled } from 'twin.macro';

export const Section = tw.section`px-6 py-16 max-w-2xl mx-auto lg:(max-w-4xl py-24)`;

export const Button = styled.button<{ isLight?: boolean; as?: string }>(
  ({ isLight, as }) => [
    tw`bg-darkGray hover:bg-darkerGray rounded transition-colors duration-300 shadow-lg block text-white py-2 px-6 lg:(px-12 py-2)`,
    isLight && tw`text-textColor bg-white hover:bg-gray-200`,
    as === 'a' && tw`table`,
  ]
);

export const SectionTitle = tw.h1`text-center text-3xl lg:(text-4xl mb-12) font-semibold mb-5`;

export const Paragraph = tw.p`leading-loose`;
