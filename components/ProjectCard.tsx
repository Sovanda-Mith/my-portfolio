import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  sourceUrl: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, imageUrl, liveUrl, sourceUrl } = project;
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={imageUrl} width={300} height={300} alt="image project" />
        </CardContent>
        <CardFooter>
          <Button>
            <Link href={liveUrl}>Click</Link>
          </Button>
          <Link className="ml-4" href={sourceUrl}>
            <Image src="/github.png" width={25} height={25} alt="github-logo" />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
