import { useAppContext } from "../context/appContext";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";

const PageBtnContainer = () => {
  const { page, numOfPages } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);
  console.log("pages", pages);
  const nextPage = () => {
    console.log("nextPage");
  };

  const previousPage = () => {
    console.log("previousPage");
  };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={previousPage}>
        <HiChevronDoubleLeft />
        Prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              key={pageNumber}
              onClick={() => console.log("pageNumber", pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        Next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
