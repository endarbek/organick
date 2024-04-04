import { fetchBlog } from "@/utils/api/requrs";
import BlogSingle from "../page";
export default async function IDPageBlog({ params: { id } }: any) {
  const data = await fetchBlog(id);
  return <BlogSingle blog={data.data} />;
}
