import { ProjectDetail } from '@/app/components/ProjectContents/ProjectDetail';
import { pastWorks } from '@/app/constants/project';
import type { Metadata } from 'next';

async function getProject(id: any) {
  console.log(id);
  for (let i = 0; i < pastWorks.length; i++) {
    if (pastWorks[i]._id == id) {
      return pastWorks[i];
    }
  }
}
export const generateMetadata = async ({
  params,
}: {
  params: { _id: string };
}): Promise<Metadata> => {
  await params;
  let projectInfo = await getProject(params._id);
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
export default async function Page({ params }: { params: { _id: string } }) {
  let error;

  let projectInfo = await getProject(params._id);
  if (projectInfo == null) {
    error = true;
  }
  if (error) {
    return <h2 style={{ textAlign: 'center' }}>Page Does Not Exist</h2>;
  }
  return (
    <div className='pageContainer'>
      <ProjectDetail projectInfo={projectInfo!}></ProjectDetail>
    </div>
  );
}
