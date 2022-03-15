import {TextField} from '@mui/material'

export const SearchInput = ({data, search, setSearch, onChange}) => {

  //data.filter(el => {
  //  if (search == "") {
  //     return el
  //  } else if (el.title.toLowerCase().includes(search.toLowerCase())){
  //    return el
  //     }
  //}).map(el =><div key={el.id}>{el.title}</div>)




  return (
    <TextField
      id="filled-search"
      label="Search field"
      type="search"
      variant="filled"
      value={search}
      onChange={onChange}

    />
  )
}

