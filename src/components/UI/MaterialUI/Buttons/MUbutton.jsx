import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const MUbutton = ({ title, dataButton , setCurrentTypeSearch, setPageLimit, currentTypeSearch ,...props }) => {
  const changeTypeSearch = (itemButton) => {
    setCurrentTypeSearch(itemButton.type)
    setPageLimit(1)
  }
  return (
    <Stack spacing={2} direction="row">
      {dataButton ? (
        dataButton.map((itemButton) => (
          <Button
            onClick={() => changeTypeSearch(itemButton)}
            {...props}
            key={itemButton.id}
            variant={itemButton.type === currentTypeSearch ? "contained" : "outlined"}
          >
            {itemButton.title}
          </Button>
        ))
      ) : (
        <Button {...props}>{title}</Button>
      )}
    </Stack>
  );
};

export default MUbutton;
