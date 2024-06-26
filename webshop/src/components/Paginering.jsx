import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginering = ({ page, count, handleChange }) => {
  //Komponent från material UI. Logiken utförs i ProductPage
  return (
    <Stack spacing={2} style={{ display: "flex", justifyContent: "center" }}>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
};

export default Paginering;
