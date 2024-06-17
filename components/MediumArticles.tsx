"use client";
import { useEffect, useState } from "react";
import MediumCard from "./MediumCard";

export default function MediumArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sovanda_m&api_key=${process.env.NEXT_PUBLIC_RSS_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);
  return (
    <div className="grid grid-cols-3">
      {articles.map((article, index) => (
        <MediumCard key={index} article={article} />
      ))}
    </div>
  );
}
