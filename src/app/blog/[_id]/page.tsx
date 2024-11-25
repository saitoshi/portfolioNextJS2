import { myBlog } from '@/app/constants/blog';
import { BlogDetail } from '@/app/components/BlogRelated/BlogDetail';
import type { Metadata } from 'next';
// eslint-disable-next-line
type Props = {
  params: Promise<{ _id: string }>;
};
async function getBlog(id: string) {
  for (let i = 0; i < myBlog.length; i++) {
    if (myBlog[i]._id == id) {
      return myBlog[i];
    }
  }
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  await params;
  const _id = (await params)._id;
  const projectInfo = await getBlog(_id);
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
// eslint-disable-next-line
export default async function Page({ params }: { params: { _id: string } }) {
  let error;

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
