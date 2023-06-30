import MiddleArticle from "@/components/articleMiddle";
import TopArticle from "@/components/articleTop";
import Header from "@/components/header";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <TopArticle />

        <MiddleArticle />
      </main>
    </div>
  );
}
