import { ChangeEvent, forwardRef, MouseEvent, useState } from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import InputLabel from '@mui/material/InputLabel';
import CardContent from '@mui/material/CardContent';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Section, Sort, Window } from '@/src/utils/types';

import { initialSettings } from '@/src/utils/constants';

interface State {
  section: Section;
  sort: Sort;
  window: Window;
  viral: boolean;
}

const Search = () => {
  const initialState: State = initialSettings;

  const [values, setValues] = useState<State>(initialState);

  return (
    <Card>
      <form onSubmit={(e) => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  size="small"
                  id="form-layouts-separator-select-label"
                >
                  Section
                </InputLabel>
                <Select
                  size="small"
                  label="Section"
                  defaultValue=""
                  id="form-layouts-separator-select"
                  labelId="form-layouts-separator-select-label"
                >
                  <MenuItem value="hot">hot</MenuItem>
                  <MenuItem value="top">top</MenuItem>
                  <MenuItem value="user">user</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  size="small"
                  id="form-layouts-separator-select-label"
                >
                  Sort
                </InputLabel>
                <Select
                  size="small"
                  label="Sort"
                  defaultValue=""
                  id="form-layouts-separator-select"
                  labelId="form-layouts-separator-select-label"
                >
                  <MenuItem value="viral">viral</MenuItem>
                  <MenuItem value="top">top</MenuItem>
                  <MenuItem value="time">time</MenuItem>
                  <MenuItem value="rising">rising</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  size="small"
                  id="form-layouts-separator-select-label"
                >
                  Window
                </InputLabel>
                <Select
                  size="small"
                  label="Window"
                  defaultValue=""
                  id="form-layouts-separator-select"
                  labelId="form-layouts-separator-select-label"
                >
                  <MenuItem value="day">day</MenuItem>
                  <MenuItem value="week">week</MenuItem>
                  <MenuItem value="month">month</MenuItem>
                  <MenuItem value="year">year</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                label="Viral Images"
                control={<Checkbox name="form-layouts-alignment-checkbox" />}
                sx={{
                  whiteSpace: 'nowrap',
                  '& .MuiButtonBase-root': { paddingTop: 0, paddingBottom: 0 },
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl sx={{ float: 'right' }}>
                <Button size="small" type="submit" variant="contained">
                  Submit
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

export default Search;
