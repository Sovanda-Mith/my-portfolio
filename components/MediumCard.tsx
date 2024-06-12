import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

type Article = {
  title: string;
  pubDate: string;
  link: string;
  content: string;
  author: string;
};

type ArticleCardProps = {
  article: Article;
};

export default function MediumCard({ article }: ArticleCardProps) {
  const regex = /<img[^>]+src="([^">]+)"/;
  const match = (article.content as any).match(regex);
  const firstImg = match[1];

  const modifiedContent = (article.content as any).replace(
    /<figure[^>]*>(.*?)<\/figure>/g,
    ""
  );
  return (
    <>
      <Card className="flex flex-col space w-full mb-5 ml-3">
        <CardHeader>
          <Image src={firstImg} alt={article.title} width={1000} height={1000} className="w-full" />
          <CardTitle className="text-2xl font-semibold">
            {article.title}
          </CardTitle>
          <div className="flex gap-4">
            <CardDescription className="text-sm text-gray-500">
              {new Date(article.pubDate).toLocaleDateString()}
            </CardDescription>
            <CardDescription>{article.author}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div
            dangerouslySetInnerHTML={{
              __html: modifiedContent.substring(0, 100).concat("..."),
            }}
          ></div>
        </CardContent>
        <CardFooter>
          <Button>
            <Link href={article.link}>Read More</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
