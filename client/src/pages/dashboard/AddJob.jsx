import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow, FormRowSelect, Alert } from "../../components/index";

const AddJob = () => {
  const {
    showAlert,
    isLoading,
    alertText,
    alertType,
    jobLocation,
    isEditing,
    editJobId,
    position,
    company,
    displayAlert,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    handleChange,
    clearValues,
    createJob,
    editJob,
    setEditJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobLocation || !position || !company) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }

    createJob();
  };

  const handleChangeInput = (e) => {
    handleChange({
      value: e.target.value,
      name: e.target.name,
    });
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            onChange={handleChangeInput}
            type="text"
            value={position}
            name="position"
          />
          <FormRow
            onChange={handleChangeInput}
            type="text"
            value={company}
            name="company"
          />
          <FormRow
            onChange={handleChangeInput}
            labelText="job location"
            type="text"
            value={jobLocation}
            name="jobLocation"
          />
          <FormRowSelect
            name="status"
            value={status}
            onChange={handleChangeInput}
            list={statusOptions}
          />

          <FormRowSelect
            labelText="jobType"
            name="jobType"
            value={jobType}
            onChange={handleChangeInput}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isEditing ? "save" : "add job"}
            </button>
            <button
              className="btn btn-block clear-btn"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
