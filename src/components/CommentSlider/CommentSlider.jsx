import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CommentSlider = ({ comments }) => {
  const [currentComment, setCurrentComment] = useState(0);

  useEffect(() => {
    console.log(currentComment);
  }, [currentComment]);

  const handleClickRight = () => {
    if (currentComment < comments.length - 1)
      setCurrentComment(currentComment + 1);
    else setCurrentComment(0);
  };

  const handleClickLeft = () => {
    if (currentComment > 0) setCurrentComment(currentComment - 1);
    else setCurrentComment(comments.length - 1);
  };

  // console.log(comments);
  return (
    <div className="flex flex-row justify-around w-full">
      <div>
        <BsChevronLeft
          onClick={handleClickLeft}
          color="#569B51"
          size="1.5rem"
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col ">
        <div className="relative w-[4rem] h-[4rem]">
          <img
            key={currentComment}
            src={comments[currentComment].profilePicture}
            className="rounded-full"
          ></img>

          <div
            className={`absolute bottom-0 right-0 fib fi-${comments[currentComment].country} fis w-[1.2rem] h-[1.2rem] rounded-full`}
          ></div>
        </div>
      </div>
      <div>
        <BsChevronRight
          onClick={handleClickRight}
          color="#569B51"
          size="1.5rem"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

CommentSlider.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
