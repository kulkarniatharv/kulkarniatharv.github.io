import { Link } from 'gatsby';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    description?: string;
    lastModified?: string;
  };
  clampDescription?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, clampDescription = false }) => (
  <Link to={`/blog/${post.slug}`} className="block h-full">
    <Card className="h-full flex flex-col transition-all hover:shadow-md">
      <CardHeader className="flex-shrink-0 h-20 flex flex-col justify-start">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold line-clamp-2">{post.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col mt-3">
        <CardDescription className={clampDescription ? "text-sm line-clamp-3" : "text-sm"}>
          {post.description}
        </CardDescription>
      </CardContent>
      {post.lastModified && (
        <CardFooter className="text-xs text-muted-foreground mt-auto">
          <CalendarIcon className="mr-1 h-3 w-3" />
          Last updated: {post.lastModified}
        </CardFooter>
      )}
    </Card>
  </Link>
);

export default BlogCard;
