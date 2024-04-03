import { IBlogs } from "@/types/blogs";
import styles from "./style.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
interface IBlogProps {
  blog: IBlogs;
}

const BlogSingle = ({ blog }: IBlogProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image
          src={`/img/${blog.image.name}`}
          alt=""
          width={1000}
          height={898}
          className={styles.image}
        />
        <div className={styles.more}>
          <div className={styles.research}>
            <div className={styles.data}>
              <h1 className={styles.data__h1}>
                Posted On:
                <span className={styles.data__span}>January 6, 2022</span>
              </h1>
              <div className={styles.admin}>
                <FontAwesomeIcon icon={faUser} className={styles.admin__icon} />
                <h6 className={styles.admin__h6}>By Rachi Card</h6>
              </div>
            </div>
            <div className={styles.food}>
              <h1 className={styles.food__h1}>{blog.title}</h1>
              <p className={styles.food__p}>
                Established fact that a reader will be distracted by the
                readable content of a page when looking a layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed
              </p>
            </div>
          </div>
          <p className={styles.more__p}>
            Uniquely matrix economically sound value through cooperative
            technology. Competently parallel task fully researched data and
            enterprise process improvements. Collaboratively expedite quality
            manufactured products via client-focused results quickly communicate
            enabled technology and turnkey leadership skills. Uniquely enable
            accurate supply chains rather than friction technology.
          </p>
        </div>
      </div>
      <div className={styles.preferred}>
        <div className={styles.preferred1}>
          <div className={styles.vitamin}>
            <h1 className={styles.vitamin__h1}>Preferred Form of Vitamin D?</h1>
            <p className={styles.vitamin__p}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <ul className={styles.publish__ul}>
            <li className={styles.publish__li}>
              Publishing packages and web pageLorem Ipsum as their default
            </li>
            <li className={styles.publish__li}>
              Content here, content here', making it look like readable
            </li>
            <li className={styles.publish__li}>
              Packages and web pageLorem Ipsum as their default
            </li>
          </ul>
        </div>
        <p className={styles.preferred__p}>
          “The first rule of any organic used in a business is that nature
          applied to an efficient operation will magnify the efficiency. The
          second is that organic applied to an inefficient operation will
          magnify the health.”
        </p>
        <div className={styles.preferred1}>
          <div className={styles.vitamin}>
            <h1 className={styles.vitamin__h2}>
              Make perfect organic product with us
            </h1>
            <p className={styles.vitamin__p}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <ol className={styles.publish__ul}>
            <li className={styles.publish__li}>
              Publishing packages and web pageLorem Ipsum as their default
            </li>
            <li className={styles.publish__li}>
              Content here, content here', making it look like readable
            </li>
            <li className={styles.publish__li}>
              Packages and web pageLorem Ipsum as their default
            </li>
            <li className={styles.publish__li}>
              more-or-less normal distribution of letters
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
