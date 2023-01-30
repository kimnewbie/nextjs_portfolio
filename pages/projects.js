import Head from "next/head";
import Layout from "./components/layout";
import { TOKEN, DATABASE_ID } from '../config';

export default function Projects({ projects }) {
  /* 클라이언트(브라우저)에서 보임 */
  // console.log(projects)

  return (
    <Layout>
      <Head>
        <title>Welcome to Youjin&acute;s Next World</title>
        <meta name="description" content="킴뉴진의 NEXT 세계" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Whole Project : {projects.results.length}</h1>
      {
        projects.results.map((aProject, index) => (
          <h1 key={index}>
            {aProject.properties.Name.title[0].plain_text}
          </h1>
        ))
      }
    </Layout>
  )
}

/* bulid time에 호출 (한 번만 실행) */
export async function getStaticProps(context) {
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

  /* DB 표에 빈공간 있으면 plain_text가 undefined라서 error */
  const projectNames = projects.results.map((aProject) => {
    return aProject.properties.Name.title[0].plain_text
  });

  /* 서버에서 보임 */
  // console.log(projectNames)

  return {
    props: { projects }, // will be passed to the page component as props
  }
}