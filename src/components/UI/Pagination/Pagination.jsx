
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme, ThemeProvider } from "@mui/material";
import { lime, purple, red } from "@mui/material/colors";

export default function CustomIcons({ totalPages, setPageFilms, pageFilms }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
        contrastText: "#FDF5E6",
      },
    },
  });
  const main = {
    "& .Mui-selected": {
      bgcolor: "#B88E2F !Important",
    },
  };
  const handleChange = (event, value) => {
    setPageFilms(value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination
          color={"primary"}
          count={totalPages}
          // sx = {main}
          sx={{ color: "white" , fontSize: '12px'}}
          size="large"
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </ThemeProvider>
  );
}
