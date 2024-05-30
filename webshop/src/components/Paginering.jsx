import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Paginering = ({ page, count, handleChange }) => {
  return (
    <Stack spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
      <Typography>Page: {page}</Typography>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
};

export default Paginering;
