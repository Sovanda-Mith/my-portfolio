import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import type { MediumArticle } from "./MediumArticles";

type ArticleCardProps = {
  article: MediumArticle;
  featured?: boolean;
};

function getArticleDetails(content: string) {
  const image = content.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
  const plainText = content
    .replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

  return { image, plainText };
}

export default function MediumCard({ article, featured = false }: ArticleCardProps) {
  const { image, plainText } = getArticleDetails(article.content);
  const readingTime = Math.max(1, Math.ceil(plainText.split(/\s+/).length / 200));
  const publishedDate = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(article.pubDate));

  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/70 shadow-2xl shadow-black/20 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 ${
        featured ? "md:col-span-2 md:grid md:grid-cols-[1.2fr_1fr]" : "flex flex-col"
      }`}
    >
      <Link
        href={article.link}
        target="_blank"
        rel="noreferrer"
        className={`relative block overflow-hidden bg-neutral-900 ${
          featured ? "min-h-64 md:min-h-[25rem]" : "aspect-[16/10]"
        }`}
        aria-label={`Read ${article.title}`}
      >
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 55vw" : "(max-width: 768px) 100vw, 45vw"}
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-neutral-900 to-violet-400/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </Link>

      <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-8 lg:p-10" : "p-6"}`}>
        <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-neutral-400">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-cyan-300" />
            {publishedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5 text-cyan-300" />
            {readingTime} min read
          </span>
        </div>

        <h3 className={`font-semibold leading-tight text-white ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
          <Link href={article.link} target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan-200">
            {article.title}
          </Link>
        </h3>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
          {plainText || "Read the full story and follow along with what I have been learning."}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-7">
          <span className="text-sm text-neutral-400">By {article.author}</span>
          <Link
            href={article.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200"
          >
            Read article
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
