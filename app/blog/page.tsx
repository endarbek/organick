import Image from "next/image";
import styles from "./styles.module.css"
import { transform } from "next/dist/build/swc";
import { fetchBlogs } from "@/utils/api/requrs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/shared/UI/Button/Button";
import Link from "next/link";
const page = async () => {
  const data = await fetchBlogs()
  const blogs = data.data;
  return <div>
    <h1 className={styles.recent}>Recent News</h1>
    <div className={styles.container}>
      {/* <div className={styles.content}>
        <div className={styles.heading}>
          <h5 className={styles.heading__h5}>News</h5>
          <p className={styles.heading__p}>
            Discover weekly content about organic food, & more
          </p>
        </div>
        <Link href="blog" className={styles.link}>
          <Button background={"white"}>
            More News <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </Button>
        </Link>
      </div> */}
      <div className={styles.blogs}>
        {blogs.map((blog) => (
          <div className={styles.blog} key={blog.id}>
            <div className={styles.ellipse}>
              <h4 className={styles.blog__h4}>
                25 <span className={styles.blog_h4_span}> Nov</span>
              </h4>
            </div>
            <Image
              src={`/img/${blog.image.name}`}
              className={styles.image}
              alt={blog.title}
              width={500}
              height={500}
            />
            <div className={styles.description}>
              <div className={styles.admin}>
                <FontAwesomeIcon icon={faUser} className={styles.admin__icon} />
                <h6 className={styles.admin__h6}>By Rachi Card</h6>
              </div>
              <div className={styles.display}>
                <h6
                  className={styles.display__h6}
                  // onClick={() => router.push(`blog-single/${blog.id}`)}
                >
                  {blog.title}
                </h6>
                <h4 className={styles.display__h4}>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </h4>
              </div>
              <Button background={"yellow"}>
                Read More <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div >
};

export default page;
