import Link from "next/link";
import Layout from "../components/Layout";
import AddUser from "../components/AddUser";
import DeleteUser from "../components/DeleteUser";
import UpdateUser from "../components/UpdateUser";
import ReadUsers from "../components/ReadUsers";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>

    <div>
      <h1>User Management App</h1>
      <AddUser />
      <DeleteUser />
      <UpdateUser />
      <ReadUsers />
    </div>
  </Layout>
);

export default IndexPage;
