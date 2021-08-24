import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

//just for testing
import TestStore from '../Components/TestStore';
import { useDispatch } from 'react-redux';
import { changeName } from '../actions';

export default function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <Typography variant="h1">This is an H1</Typography>
      <Typography variant="h2">This is an H2</Typography>
      <Typography variant="h3">This is an H3</Typography>
      <Typography variant="h4">This is an H4</Typography>
      <Typography variant="h5">This is an H5</Typography>
      <Typography variant="h6">This is an H6</Typography>
      <Typography variant="p">This is a paragraph</Typography>
      <Button variant="contained" color="primary">
        This is a button
      </Button>

      <TestStore />
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(changeName('maria'))}
      >
        Change Name
      </Button>
    </>
  );
}
