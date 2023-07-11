import MiddleArticle from "@/components/articleMiddle";
import TopArticle from "@/components/articleTop";
import Footer from "@/components/footer";
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
      <Footer />
    </div>
  );
}
