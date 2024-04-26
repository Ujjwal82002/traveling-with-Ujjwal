
import PropTypes from "prop-types"; // Import PropTypes
import { Link } from "react-router-dom";

const BlogCard = ({ image, date, title, description, author }) => {
  return (
    <>
      <Link
        to={`/blogs/${title}`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        state={{ image, date, title, description, author }}
      >
        <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
          <div className="overflow-hidden">
            <img
              src={image}
              alt="No image"
              className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
          </div>
          <div className="flex justify-between pt-2 text-slate-600">
            <p>{date}</p>
            <p className="line-clamp-1">By {author}</p>
          </div>
          <div className="space-y-2 py-3">
            <h1 className="line-clamp-1 font-bold">{title}</h1>
            <p className="line-clamp-2">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

// Prop type validation
BlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BlogCard;
