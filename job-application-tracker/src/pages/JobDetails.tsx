import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();

  return <h1>Job Details Page - Job ID: {id}</h1>;
};

export default JobDetails;