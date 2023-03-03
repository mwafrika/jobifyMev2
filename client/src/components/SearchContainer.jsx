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
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
