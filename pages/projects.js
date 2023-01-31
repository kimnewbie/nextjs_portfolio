import Head from "next/head";
import Layout from "./components/layout";
import { TOKEN, DATABASE_ID } from '../config';
import ProjectItem from "./components/projects/project-item";

export default function Projects({ projects }) {
  /* 클라이언트(브라우저)에서 보임 */
  console.log(projects)

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>Welcome to Youjin&acute;s Next World</title>
          <meta name="description" content="킴뉴진의 NEXT 세계" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          Whole Project :
          <span className="pl-4 text-blue-500">
            {projects.results?.length}
          </span>
        </h1>
        <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
          {
            projects.results?.map((aProject) => (
              <>
                <ProjectItem key={aProject.id} data={aProject} />
              </>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

// 빌드 타임에 호출
// export async function getStaticProps() {

// 각 요청 때마다 호출
export async function getServerSideProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({
      // filter: 'string',
      // start_cursor: 'string',
      sorts: [
        {
          "property": "Name",
          "direction": "descending"
        }
      ],
      page_size: 100
    })
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

  const projects = await res.json();
  console.log(projects)

  /* DB 표에 빈공간 있으면 plain_text가 undefined라서 error */
  const projectNames = projects.results?.map((aProject) => {
    return aProject.properties.Name.title[0].plain_text
  });

  /* 서버에서 보임 */
  // console.log(projectNames)

  return {
    props: { projects },// will be passed to the page component as props
    // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
    // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
  }
}