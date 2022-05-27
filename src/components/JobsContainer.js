import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import Job from "./Job";
import PageBtnContainer from "./PageBtnContainer";
import Loading from "./Loading";
import Wrapper from "../assets/wrappers/JobsContainer";

const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    numOfPages,
    totalJobs,
    search,
    searchType,
    searchStatus,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
    // eslint-disable-next-line
  }, [page, search, searchType, searchStatus, sort]);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  if (jobs.length < 1) {
    return (
      <Wrapper>
        <h2>No jobs to display</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
