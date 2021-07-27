import React from 'react';
import tw, { styled } from 'twin.macro';
import client from '../../client';
import Layout from '../../components/Layout/Layout';
import { IPost, IPostArray } from '../../utils/types';
import BlockContent from '@sanity/block-content-to-react';
import { Paragraph } from '../../utils/styles/components';
import RecentPosts from '../../components/RecentPosts';

interface IPostDetails {
  post: IPost;
  otherPosts: IPostArray;
}

const PostDetails: React.FC<IPostDetails> = ({ post, otherPosts }) => {
  const serializers = {
    types: {
      block: (props) => {
        const style = props.node.style || 'normal';
        switch (style) {
          case 'h1':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            return <h1 tw='text-2xl font-semibold my-4'>{props.children}</h1>;
          default:
            return <Paragraph tw='mb-4'>{props.children}</Paragraph>;
        }
      },
    },
  };

  return (
    <Layout darkFooter>
      <main>
        <div tw='relative'>
          <MainImage src={post.imageUrl} alt={post.title} />
          <div tw='absolute top-1/2 z-20 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2 w-full text-center p-8'>
            <h1 tw='font-bold tracking-widest text-2xl lg:(text-4xl)'>
              {post.title}
            </h1>
          </div>
          <div tw='absolute w-full h-full opacity-50 bg-black top-0 left-0 z-10' />
        </div>
        {/* Content */}
        <ContentWrapper>
          <BlockContent
            blocks={post.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            serializers={serializers}
          />
        </ContentWrapper>
        {/* Other posts */}
        <RecentPosts posts={otherPosts} title='Zobacz również' cols={3} />
      </main>
    </Layout>
  );
};

const MainImage = tw.img`w-full object-cover max-h-96`;
const ContentWrapper = styled.div(() => [
  `
    img {
      width: 100%;
      border-radius: 5px;
      margin: 2rem 0;
    }
  `,
  tw`p-8 max-w-3xl mx-auto lg:(py-16)`,
]);

export async function getServerSideProps(ctx) {
  const slug = ctx.query.slug;

  const res = await client.fetch(`
  {
    "post": *[_type == "post" && slug.current == "${slug}"] {
      _id,
      publishedAt,
      title,
      body,
      "imageUrl": mainImage.asset->url
    }[0],
    "otherPosts": *[_type == "post" && slug.current != "${slug}"] {
      _id,
      publishedAt,
      title,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url
    }[0...3]
  }
  `);

  return {
    props: res,
  };
}

export default PostDetails;
