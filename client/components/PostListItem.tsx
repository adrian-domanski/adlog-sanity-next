import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';
import { Paragraph } from '../utils/styles/components';
import { IPost } from '../utils/types';
import { getFormatedDate } from '../utils/helpers';

const PostListItem: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`} passHref>
      <a tw='block h-full'>
        <PostWrapper>
          <ImageWrapper>
            <PostImage src={post.imageUrl} alt={post.title} />
          </ImageWrapper>
          <Paragraph tw='mt-4'>{getFormatedDate(post.publishedAt)}</Paragraph>
          <PostTitle>{post.title}</PostTitle>
        </PostWrapper>
      </a>
    </Link>
  );
};

const PostImage = tw.img`block w-full hover:scale-105 transform transition-transform duration-300 lg:(h-44 object-cover)`;
const ImageWrapper = tw.div`overflow-hidden rounded shadow-lg`;
const PostTitle = tw.h2`text-2xl font-semibold lg:(text-xl)`;
const PostWrapper = tw.article`h-full flex flex-col`;

export default PostListItem;
