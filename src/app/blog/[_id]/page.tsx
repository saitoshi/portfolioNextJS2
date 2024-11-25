import { BlogDetail } from '@/app/components/BlogRelated/BlogDetail';
import { myBlog } from '@/app/constants/blog';
import type { Metadata } from 'next';

type tParams = Promise<{ _id: string }>;
async function getBlog(id: string) {
  console.log(id);
  for (let i = 0; i < myBlog.length; i++) {
    if (myBlog[i]._id == id) {
      return myBlog[i];
    }
  }
}

export const generateMetadata = async (props: {
  params: tParams;
}): Promise<Metadata> => {
  const { _id } = await props.params;
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
export default async function Page(props: { params: tParams }) {
  const { _id } = await props.params;

  console.log(_id);
  const blogInfo = await getBlog(_id);
  if (blogInfo == null) {
    return <h2 style={{ textAlign: 'center' }}>Page Does Not Exist</h2>;
  }
  return (
    <div className='pageContainer'>
      <BlogDetail blogInfo={blogInfo!}></BlogDetail>
    </div>
  );
}
