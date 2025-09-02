import { useState } from "react";
import IndexPage from "./IndexPage";
import ArtistPage from "./ArtistPage";
import Layout from "./Layout";
import { Suspense, useTransition } from "react";

const Router = () => {
  const [page, setPage] = useState("/");
  const [isPending, startTransition] = useTransition();

  function navigate(url: string) {
    startTransition(() => {
      setPage(url);
    });
  }

  let content;
  if (page === "/") {
    content = <IndexPage navigate={navigate} />;
  } else if (page === "/the-beatles") {
    content = (
      <ArtistPage
        artist={{
          id: "the-beatles",
          name: "The Beatles",
        }}
      />
    );
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout isPending={isPending}>{content}</Layout>
    </Suspense>
  );
};

export default Router;
