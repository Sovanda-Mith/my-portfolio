"use client";
import { useEffect, useState } from "react";
import MediumCard from "./MediumCard";

export default function MediumArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sovanda_m"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);
  return (
    <div>
      {articles.map((article, index) => (
        <MediumCard key={index} article={article} />
      ))}
    </div>
  );
}
