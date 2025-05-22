import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-muted px-4 text-center">
      <div className="max-w-md">
        <AlertCircle className="text-red-500 w-16 h-16 mx-auto mb-6" />
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl font-medium mb-2">Page Not Found</p>
        <p className="text-muted-foreground mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/" className="text-lg">
            ← Go Back Home
          </Link>
        </Button>
      </div>
    </div>
  );
}

