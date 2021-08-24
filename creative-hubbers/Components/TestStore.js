//we can delete this afterwards, it is just to test the state manager

import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

const TestStore = () => {
  const users = useSelector((state) => state.user.users); //un fel de subscribe la changes
  console.log('users: ', users);
  return (
    <>
      {/* {users.map((user) => (
        <Typography variant='h6'>{user.login}</Typography>
      ))} */}

      <Typography variant='h6'>{users.login}</Typography>
    </>
  );
};

export default TestStore;
