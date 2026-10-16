"use client";
import { useEffect, useState } from "react";
import MediumCard from "./MediumCard";

export type MediumArticle = {
  title: string;
  pubDate: string;
  link: string;
  content: string;
  author: string;
};

export default function MediumArticles() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sovanda_m&api_key=${process.env.NEXT_PUBLIC_RSS_API_KEY}`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("Unable to load articles");
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data.items)) throw new Error("Invalid article feed");
        setArticles(data.items);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="grid gap-5 md:grid-cols-2" aria-label="Loading articles">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className={`h-[28rem] animate-pulse rounded-3xl border border-white/10 bg-white/[0.06] ${
              item === 0 ? "md:col-span-2" : ""
            }`}
          />
        ))}
      </div>
    );
  }

  if (error || articles.length === 0) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-16 text-center backdrop-blur-md">
        <p className="text-lg font-medium text-white">The articles are taking a break.</p>
        <p className="mt-2 text-sm text-neutral-400">Please check back again shortly.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {articles.map((article, index) => (
        <MediumCard
          key={article.link || article.title}
          article={article}
          featured={index === 0}
        />
      ))}
    </div>
  );
}
