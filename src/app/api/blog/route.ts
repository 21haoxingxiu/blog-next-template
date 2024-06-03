import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { PostModel } from "~/types/post";

const mockData: PostModel[] = [
  {
    id: 1,
    title: "1",
    content: "content",
    imagePath: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg",
    creator: "20240314",
  },
  { id: 2, title: "2", content: "content2", creator: "20240315" },
];

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return NextResponse.json(mockData);
}
