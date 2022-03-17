import {FormControl, InputLabel, Box, Input} from '@mui/material'
import SearchMenu from './searchMenu'




const SearchInput = ({search, onChange, data}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Box component="form" sx={{'& > :not(style)': {m: 1}, }} noValidate autoComplete="off">
        <FormControl variant="standard" onSubmit={handleSubmit}>
          <InputLabel htmlFor="component-simple"></InputLabel>
          <Input id="component-simple" value={search} onChange={onChange} />
        </FormControl>
      </Box>


      <div className="box-grid">

        <SearchMenu search={search} data={data} />
      </div>
    </>
  )
}
export default SearchInput
