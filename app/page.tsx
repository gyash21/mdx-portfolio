import Intro from "@/components/intro";
import { MDXRemote } from "next-mdx-remote";

export default function Home() {
  


  return (
    <div>
      <section className="py-24">
        <div className="container max-w-3xl">
          <Intro />
        </div>

      </section>
    </div>
  );
}
