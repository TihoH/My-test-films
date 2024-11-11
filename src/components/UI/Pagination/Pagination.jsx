// import * as React from "react";
// import Typography from "@mui/material/Typography";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { lime, purple, red } from "@mui/material/colors";
// import "./stylePagination.css";
// import { PaginationItem } from "@mui/material";

// export default function PaginationControlled() {
//   const primary = red[500];
//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: purple[500],
//         contrastText: "#FDF5E6",
//       },
//     },
//   });
//   const [page, setPage] = React.useState(1);
//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Stack spacing={2}>
//         <Pagination
//         size="large"
//           variant="outlined"
//           className="pagination"
//           color={"primary"}
//           count={10}
//           page={page}
//           sx={{ color: "white" }}
//           onChange={handleChange}
//           renderItem={(item) => (
//             <PaginationItem
//               slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
//               {...item}
//             />
//           )}
//         >
//           <PaginationItem color={"primary"} />
//         </Pagination>
//       </Stack>
//     </ThemeProvider>
//   );
// }

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
          sx={{ color: "white" }}
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
