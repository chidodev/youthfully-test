import { useState } from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import InputLabel from '@mui/material/InputLabel';
import CardContent from '@mui/material/CardContent';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Select from '@mui/material/Select';

import { Settings } from '@/src/utils/types';


interface Props {
  settings: Settings
  saveSettings: (updatedSettings: Settings) => void
}

const Search = ({settings, saveSettings}: Props) => {
  const initialState: Settings = settings;

  const [values, setValues] = useState<Settings>(initialState);

  const handleSearch = () => {
    saveSettings(values)
  }

  const handleSectionChange = (e: any) => {

    setValues(prev => {
      return {
        ...prev,
        section: e.target.value
      }
    })
  }

  const handleSortChange = (e: any) => {
    setValues(prev => {
      return {
        ...prev,
        sort: e.target.value
      }
    })
  }

  const handleWindowChange = (e: any) => {
    setValues(prev => {
      return {
        ...prev,
        window: e.target.value
      }
    })
  }

  const handleViralChange = () => {
    
    setValues(prev => {
      return {
        ...prev,
        viral: !prev.viral
      }
    })
    
  }

  return (
    <Card>
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
                  value={values.section}
                  onChange={handleSectionChange}
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
                  value={values.sort}
                  onChange={handleSortChange}
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
                  value={values.window}
                  onChange={handleWindowChange}
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
                control={<Checkbox onClick={handleViralChange} value={values.viral} name="form-layouts-alignment-checkbox" />}
                sx={{
                  whiteSpace: 'nowrap',
                  '& .MuiButtonBase-root': { paddingTop: 0, paddingBottom: 0 },
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl sx={{ float: 'right' }}>
                <Button size="small" variant="contained" onClick={handleSearch}>
                  Search
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
    
    </Card>
  );
};

export default Search;
