import Wrapper from "../../assets/wrappers/SharedLayout";
import { Link, Outlet } from "react-router-dom";

const SharedLayouts = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="add-job">Add Job</Link>
        <Link to="all-jobs">All Jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayouts;
