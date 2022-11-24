import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer keywords={user.id}>
      <h1>Пользователь с id {query.id}</h1>
      <h2>имя пользователия - {user.name}</h2>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await responce.json();
  return {
    props: { user },
  };
}
