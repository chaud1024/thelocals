import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Post = {
  date: Date;
  path: string;
  title: string;
  description: string;
  category: string;
  url: string | null;
  imgSrc: string;
  essential: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getEssentialPosts(): Promise<Post[]> {
  return getPosts().then((posts) => posts.filter((post) => post.essential));
}
export async function getNonEssentialPosts(): Promise<Post[]> {
  return getPosts().then((posts) => posts.filter((post) => !post.essential));
}

export const getPosts = cache(async () => {
  // console.log("getPosts");
  const filePath = path.join(process.cwd(), "data", "data-paris.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>((data) => JSON.parse(data))
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

// export async function getPosts(): Promise<Post[]> {
//   console.log("getPosts");
//   넥스트에서 fetch사용 시 자동으로 중복 함수를 제거하지만, fatch를 사용하지 않은 경우 여러번 호출됨
//   성능최적화를 위해 React에서 제공하는 cache를 사용
//   cache는 호출하는 인자가 동일할 경우 한 번 호출하면 그 때 캐시한 값을 반환 => DB에서 계속 데이터를 가져와서 읽는 것이 아니라
//   한 번 읽었던 값을 캐시한 다음 그 값을 반환
//   1. 동일하게 호출한 인자에 대해서 캐시된 값을 사용
//   2. 한 번 렌더링되는 사이클에 한해서 캐시함
//   const filePath = path.join(process.cwd(), "data", "data-paris.json");
//   return readFile(filePath, "utf-8")
//     .then<Post[]>((data) => JSON.parse(data))
//     .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
// }

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getPosts();
  const post = posts.find((post) => post.path === fileName);

  if (!post) {
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);
  }
  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf-8");

  return { ...post, content, next, prev };
}
