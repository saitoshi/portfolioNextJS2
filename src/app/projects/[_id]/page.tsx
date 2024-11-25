import { ProjectDetail } from '@/app/components/ProjectContents/ProjectDetail';
import { pastWorks } from '@/app/constants/project';
import type { Metadata } from 'next';

type tParams = Promise<{ _id: string }>;

async function getProject(id: string) {
  console.log(id);
  for (let i = 0; i < pastWorks.length; i++) {
    if (pastWorks[i]._id == id) {
      return pastWorks[i];
    }
  }
}
export const generateMetadata = async (props: {
  params: tParams;
}): Promise<Metadata> => {
  const { _id } = await props.params;
  const projectInfo = await getProject(_id);
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
  let error;
  const { _id } = await props.params;

  console.log(_id);
  const projectInfo = await getProject(_id);
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
