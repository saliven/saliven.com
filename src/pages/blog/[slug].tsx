import { InferGetServerSidePropsType } from 'next';

export default function Post({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return <div>blog post</div>;
}

export async function getServerSideProps() {
  // const notion = new Client({ auth: process.env.NOTION_API_SECRET });

  // const { results } = await notion.databases.query({
  //   database_id: '498c94e83f014d0991212633a9e91bec'
  // });

  // results.forEach(async (r) => {
  //   const page = await notion.pages.retrieve({ page_id: r.id });
  //   console.log(page);
  // });

  return {
    props: {
      foo: 'bar'
    }
  };
}
