import Intro from "@/components/intro";
import { MDXRemote } from "next-mdx-remote";

export default function Home() {
    const content = `
    # Hello, world!`


  return (
    <div>
      <section className="py-24">
        <div className="container max-w-3xl">
          <Intro />
          <MDXRemote source={content} />
        </div>

      </section>
    </div>
  );
}
