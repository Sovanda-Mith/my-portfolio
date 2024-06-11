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
  return (
    <>
      <Card className="flex flex-col space w-1/2 mb-5 ml-3">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
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
              __html: article.content.substring(0, 200).concat("..."),
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
