import Layout from "../components/Layout";

const Error = ({ statusCode }) => {
  return (
    <Layout title="Error!!!">
      <p>Couldn't get that page. {statusCode && `Error Code: ${statusCode}`}</p>
    </Layout>
  );
};
export default Error;
