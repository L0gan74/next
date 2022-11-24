import Head from "next/head";
import A from "../components/A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"123 123 123" + keywords}></meta>
        <title>Главная</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Главная" />
        <A href={"/users"} text="пользователи" />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
