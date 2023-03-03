import { FormRow, FormRowSelect } from ".";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";

const SearchContainer = () => {
  const {
    handleChange,
    clearFilters,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    isLoading,
    jobTypeOptions,
    statusOptions,
  } = useAppContext();

  const handleSearch = (e) => {
    console.log("handleSearch", e.target.value);
    if (isLoading) return;
    handleChange({
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (isLoading) return;
    clearFilters();
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>Search form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            onChange={handleSearch}
          />
          <FormRowSelect
            name="searchStatus"
            value={searchStatus}
            onChange={handleSearch}
            labelText="status"
            list={["all", ...statusOptions]}
          />
          <FormRowSelect
            name="searchType"
            value={searchType}
            onChange={handleSearch}
            labelText="type"
            list={["all", ...jobTypeOptions]}
          />
          <FormRowSelect
            name="sort"
            value={sort}
            onChange={handleSearch}
            list={sortOptions}
          />
          <button
            type="button"
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Loading..." : "Clear filters"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
