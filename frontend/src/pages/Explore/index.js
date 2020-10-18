import React, { useEffect, useState } from 'react'
import axios from '../../configuration/axios'
import Select from 'react-select'
import useWindowDimensions from '../../utils/windowResizeHook'
import { RowWrapper, ItemList, ListHeader, ListItem, Table, TableCell, MobileWrapper, Card, CardTitle } from './styles'

const Explore = () => {
  const [menuFiles, setMenuFiles] = useState([])
  const [selectedId, setSelectedId] = useState('')
  const [selectedItem, setSelectedItem] = useState({})
  const [selectOptions, setSelectOptions] = useState([])
  
  const { width } = useWindowDimensions();

  useEffect(() => {
    const getFiles = async () => {
      const result = await axios.get('/uploads');

      const options = result.data.data.map((item) => { return { value: item.id, label: item.name }})

      setMenuFiles(result.data.data);
      setSelectOptions(options)
    }
    getFiles()
  }, [])

  useEffect(() => {
    const getFileData = async () => {
      const result = await axios.get(`/uploads/${selectedId}`);
      setSelectedItem(result.data.data)
    }
    getFileData()
  }, [selectedId])

  return(
    <div>
      {
        width <= 768 
        ? <MobileWrapper>
            <Select 
              options={selectOptions} 
              onChange={(option) => { setSelectedId(option.value)}}
              placeholder='Select a file'
              theme={theme => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: '#00EC9D',
                  primary: '#00EC9D',
                },
              })}
            />
            {
              selectedItem.id !== undefined ?
              selectedItem.upload_infos.map((item, idx) => {
                return(
                  <Card key={idx}>
                    <CardTitle>Yard Code</CardTitle>
                    <p>{item.yard_code}</p>
                    <CardTitle>Employee Code</CardTitle>
                    <p>{item.employee_code}</p>
                    <CardTitle>Clock In</CardTitle>
                    <p>{item.clock_in}</p>
                    <CardTitle>Clock Out</CardTitle>
                    <p>{item.clock_out}</p>
                  </Card>
                )
              })
              : null
            }
          </MobileWrapper>
        : <RowWrapper>
            <ItemList flexPriority={1}>
              <ListHeader>
                <p>Select a file</p>
              </ListHeader>
              {
                menuFiles.map((item) => {
                  return(
                    <ListItem key={item.id} active={item.id === selectedId} onClick={() => {setSelectedId(item.id)}}>
                      {item.name}
                    </ListItem>
                  )
                })
              }
            </ItemList>
            <ItemList flexPriority={2}>
              <ListHeader>
                <p>Information</p>
              </ListHeader>
                {
                  selectedItem.id !== undefined ? 
                  <Table>
                    <TableCell style={{'order': 1}}><strong>Yard Code</strong></TableCell>
                    {
                      selectedItem.upload_infos.map((info, idx) => { 
                        return (
                          <TableCell key={idx} style={{'order': idx + 2}}>{info.yard_code}</TableCell>)}
                        )
                    }
                    <TableCell style={{'order': 1}}><strong>Employee Code</strong></TableCell>
                    {
                      selectedItem.upload_infos.map((info, idx) => { 
                        return (
                          <TableCell key={idx} style={{'order': idx + 2}}>{info.employee_code}</TableCell>)}
                        )
                    }
                    <TableCell style={{'order': 1}}><strong>Clock In</strong></TableCell>
                    {
                      selectedItem.upload_infos.map((info, idx) => { 
                        return (
                          <TableCell key={idx} style={{'order': idx + 2}}>{new Date(info.clock_in).toUTCString()}</TableCell>)}
                        )
                    }
                    <TableCell style={{'order': 1}}><strong>Clock Out</strong></TableCell>
                    {
                      selectedItem.upload_infos.map((info, idx) => { 
                        return (
                          <TableCell key={idx} style={{'order': idx + 2}}>{new Date(info.clock_out).toUTCString()}</TableCell>)}
                        )
                    }
                  </Table> : null 
                }
            </ItemList>
          </RowWrapper>
        }
    </div>
  )
}

export default Explore