import {TextField} from '@mui/material'
import SearchMenu from './searchMenu'




const SearchInput = ({search, onChange, data}) => {



  return (
    <>
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        value={search}
        onChange={onChange}

      />
      <div className="box-grid">

        <SearchMenu search={search} data={data} />
      </div>
    </>
  )
}
export default SearchInput
