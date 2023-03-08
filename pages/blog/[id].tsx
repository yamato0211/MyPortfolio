import { client } from "@/libs/client";
import { Blog } from "@/types/type";
import { GetStaticPaths,  GetStaticProps } from "next";
import styles from '../../styles/Home.module.scss'
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc)
dayjs.extend(timezone)

export default function BlogId({ blog }: {blog: Blog}) {
    const formattedDate = dayjs.utc(blog.date).tz("Asia/Tokyo").format("YYYY/MM/DD")
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.publishedAt}>{formattedDate}</p>
            <div
                dangerouslySetInnerHTML={{
                __html: `${blog.body}`,
                }}
                className={styles.post}
            />
    </main>
    )
}

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const contents: Blog[] = data.contents
  const paths = contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};