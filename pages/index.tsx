import { Blog } from "@/types/type";
import Link from "next/link";
import { client } from "../libs/client";
import Image from "next/image";
import styles from "../styles/Home.module.scss"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export default function Home({ blogs } : {blogs: Blog[]}) {
  const formattDate = (d: Date) => {
    dayjs.extend(utc)
    dayjs.extend(timezone)
    return dayjs.utc(d).tz("Asia/Tokyo").format("YYYY/MM/DD")
  }
  return (
    <div>
      <section>
        <div>
          <h1 className={styles.sectionTitle}>Blogs</h1>
        </div>
      </section>
      <section className={styles.center}>
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <article key={blog.id}>
              <Link href={`/blog/${blog.id}`} >
                <img src={blog.thumbnail.url} alt="" className={styles.thumbnailImage}/>
              </Link>
              <br />
              <Link href={`/blog/${blog.id}`} className={styles.boldText}>
                {blog.title}
              </Link>
              <br />
              <small className={styles.lightText}>{formattDate(blog.date)}</small>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};