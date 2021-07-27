import React from 'react';
import { IPost } from '../utils/types';
import 'twin.macro';
import tw from 'twin.macro';
import { Button, Section } from '../utils/styles/components';
import Link from 'next/link';

interface IHeaderPost {
  post: IPost;
}

const HeaderPost: React.FC<IHeaderPost> = ({ post }) => {
  return (
    <Section tw='lg:(flex max-w-6xl items-center)' id='start'>
      <div tw='lg:(mr-8 w-2/3 shadow-lg)'>
        <HeaderPostImg src={post.imageUrl} alt={post.title} />
      </div>
      <div>
        <PostTitle>{post.title}</PostTitle>
        <PostExcerpt>{post.excerpt}</PostExcerpt>
        <Link href={`/post/${post.slug}`} passHref>
          <Button as='a' tw='mt-4'>
            Czytaj dalej
          </Button>
        </Link>
      </div>
    </Section>
  );
};

const PostTitle = tw.h1`my-4 font-bold text-2xl lg:(text-4xl)`;
const PostExcerpt = tw.p`font-semibold lg:(text-2xl mt-5 mb-6 font-normal)`;
const HeaderPostImg = tw.img`w-full rounded`;

export default HeaderPost;
