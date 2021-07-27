import React from 'react';
import tw, { styled } from 'twin.macro';
import { Button, Section, SectionTitle } from '../utils/styles/components';
import { IPostArray } from '../utils/types';
import Link from 'next/link';
import PostListItem from './PostListItem';

interface IRecentPosts {
  posts: IPostArray;
  title?: string;
  showAllPostsBtn?: boolean;
  cols?: number;
}

const RecentPosts: React.FC<IRecentPosts> = ({
  posts,
  title,
  showAllPostsBtn = false,
  cols,
}) => {
  return (
    <Section>
      <SectionTitle>{title ? title : 'Aktualności'}</SectionTitle>
      <PostGrid cols={cols}>
        {posts.map((post) => (
          <PostListItem post={post} key={post._id} />
        ))}
      </PostGrid>
      {showAllPostsBtn && (
        <Link href='/aktualnosci' passHref>
          <Button as='a' tw='mt-12 mx-auto lg:(mt-12)'>
            Zobacz więcej
          </Button>
        </Link>
      )}
    </Section>
  );
};

const PostGrid = styled.div<{ cols?: number }>(({ cols }) => [
  cols === 3 && tw`sm:(grid-cols-1)`,
  tw`grid gap-y-8 gap-6 lg:(grid-cols-3)`,
]);

export default RecentPosts;
