import './style.css';
import React from 'react';
import type { Metadata } from 'next';
import { myBlog } from '@/app/constants/blog';
import { BlogDetail } from '@/app/components/BlogRelated/BlogDetail';

async function getBlog(id: string) {
  for (let i = 0; i < myBlog.length; i++) {
    if (myBlog[i]._id == id) {
      return myBlog[i];
    }
  }
}

export const generateMetadata = async ({
  params,
}: {
  params: { _id: string };
}): Promise<Metadata> => {
  await params;
  const projectInfo = await getBlog(params!._id);
  if (projectInfo != undefined) {
    return {
      title: projectInfo.title,
      description: projectInfo.description,
      keywords: projectInfo.category,
      openGraph: {
        title: projectInfo.title,
        description: projectInfo.description,
        type: 'website',
        images: projectInfo.thumbnail,
      },
    };
  }
  return {
    title: 'Not Found',
  };
};

export default async function Page({ params }: { params: { _id: any } }) {
  let error;
  await params;
  const blogInfo = await getBlog(params!._id);
  if (blogInfo == null) {
    error = true;
  }
  if (error) {
    console.log(error);
    return (
      <div className='pageContainer' id='errorPage'>
        <h2 style={{ textAlign: 'center' }}>Page Does Not Exist</h2>
      </div>
    );
  }
  return (
    <div id='blogPage' className='pageContainer'>
      <BlogDetail blogInfo={blogInfo!} />
    </div>
  );
}
