import moment from "moment";

const Job = ({ company, createdAt }) => {
  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <div>
      <h5>{company}</h5>
      <h5>{date}</h5>
    </div>
  );
};

export default Job;
