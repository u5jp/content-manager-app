import Layout from "components/Layout";
import ResourceHighlight from "components/ResorceHighlight";
import NewsLetter from "components/Newsletter";
import ResourceList from "components/ResourceList";
import Footer from "components/Footer";

function Home({ resources }) {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <NewsLetter />
      <ResourceList resources={resources.slice(2)} />
      {JSON.stringify(resources)}
      <Footer />
    </Layout>
  );
}

// is called every time you will visit the page
// function is executed on the server
//data are always flesh
export async function getServerSideProps() {
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();

  return {
    props: {
      resources: data,
    },
  };
}

//is called at the build time, and it's called only once

// export async function getStaticProps() {
//   // const resData = await fetch("http://localhost:3000/api/resources");
//   // const data = await resData.json();

//   console.log("calling getStaticProps");

//   return {
//     props: {
//       resources: data,
//     },
//   };
// }

export default Home;
