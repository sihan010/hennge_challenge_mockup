import React, { useState } from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import MomentAdapter from "@material-ui/pickers/adapter/moment";
import { DateRangePicker, LocalizationProvider } from "@material-ui/pickers";

import { ReactComponent as Calander } from "../assets/icon_calender.svg";
import { ReactComponent as Search } from "../assets/icon_search.svg";
import Moment from "moment";

const SearchBar = ({ onSearchPress }) => {
  const [value, setValue] = useState([new Moment("2020-09-01"), new Moment()]);

  return (
    <LocalizationProvider dateAdapter={MomentAdapter}>
      <DateRangePicker
        allowSameDateSelection
        calendars={2}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        inputFormat="yyyy/MM/DD"
        renderInput={(startProps, endProps) => {
          startProps.inputProps.value = `${startProps.inputProps.value} - ${endProps.inputProps.value}`;
          //console.log(startProps);
          return (
            <TextField
              {...startProps}
              label={null}
              variant="outlined"
              helperText={null}
              placeholder="YYYY/MM/DD - YYYY/MM/DD"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Calander style={{ height: 20, width: 20 }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    className="serachPointer"
                    position="end"
                    variant="filled"
                    onClick={() => onSearchPress(value)}
                  >
                    <Search style={{ height: 20, width: 20 }} />
                  </InputAdornment>
                ),
              }}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default SearchBar;
