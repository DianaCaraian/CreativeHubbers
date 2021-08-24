//we can delete this afterwards, it is just to test the state manager

import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

const TestStore = () => {
  const user = useSelector((state) => state.user);
  return <Typography variant="h1">Name: {user.name}</Typography>;
};

export default TestStore;
