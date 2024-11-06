import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple  , red } from '@mui/material/colors';
import './stylePagination.css'
import { PaginationItem } from "@mui/material";

export default function PaginationControlled() {
    
    const primary = red[500]; 
  const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
            contrastText: '#FDF5E6',
            
          },
    },
  });
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination
        variant="outlined"
        className="pagination"
          color={'primary'}
          count={10}
          page={page}
          sx={ { color: 'white' } }
          onChange={handleChange}
        >
            <PaginationItem  color={'primary'} />
        </Pagination>
      </Stack>
    </ThemeProvider>
  );
}
