import React from 'react';
import Layout from '../components/Layout/Layout';
import 'twin.macro';
import client from '../client';
import { IPostArray } from '../utils/types';
import RecentPosts from '../components/RecentPosts';

interface IAllPosts {
  posts: IPostArray;
}

const AllPosts: React.FC<IAllPosts> = ({ posts }) => {
  return (
    <Layout darkFooter>
      <main>
        <div tw='bg-darkerGray text-white' id='o-mnie'>
          <RecentPosts posts={posts.slice(0, 3)} title={'Najpopularniejsze'} />
        </div>
        <RecentPosts
          posts={posts.slice(3, posts.length)}
          title={'Pozostałe wpisy'}
        />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await client.fetch(`
		*[_type == "post"] {
			_id,
			publishedAt,
			title,
			"imageUrl": mainImage.asset->url,
			excerpt,
			"slug": slug.current
		}	
	`);

  return {
    props: { posts: res },
  };
}

export default AllPosts;
