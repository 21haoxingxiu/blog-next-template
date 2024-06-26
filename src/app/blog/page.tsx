'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { PostModel } from '~/types/post';


const getData = async () => {
  const res = await fetch('/api/blog');
  return res.json();
};

export default function Blog() {
  const { data, isLoading, isError } = useQuery<PostModel[]>({
    queryKey: ['blogList'],
    queryFn: getData
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <ul>
      {data?.map(post => (
        <li key={post.id} className=' p-6 mb-6 border card-shadow cursor-pointer'>
          <h3> {post.title} </h3>
          <div className='flex justify-between'>
            <p>{post.content}</p>
            {post.imagePath && <Image src={post.imagePath} alt="img" width={50} height={50} />}
          </div>
          <p>Author: {post.creator}</p>
        </li>
      ))}
    </ul>
  );
}