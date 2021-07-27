import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/Layout/Layout';
import client from '../client';
import HeaderPost from '../components/HeaderPost';
import { IPostArray } from '../utils/types';
import AboutMeSection from '../components/AboutMeSection';
import RecentPosts from '../components/RecentPosts';
import ContactSection from '../components/ContactSection';

interface IHome {
  posts: IPostArray;
}

const Home: NextPage<IHome> = ({ posts }) => {
  return (
    <Layout>
      <main>
        <HeaderPost post={posts[0]} />
        <AboutMeSection />
        <RecentPosts showAllPostsBtn posts={posts.slice(1, 7)} />
        <ContactSection />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await client.fetch(`
    {
      "posts": *[_type == "post"] | order(publishedAt desc) {
        _id,
        publishedAt,
        title,
        "imageUrl": mainImage.asset->url,
        excerpt,
        "slug": slug.current
      }[0...7]
    }
  `);

  return { props: { posts: res.posts } };
}

export default Home;
