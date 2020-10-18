import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setUploadFile } from '../../redux/actions'
import { UploadProgress } from '../../components'
import IMAGES from '../../constants/images'
import swal from 'sweetalert'

import { 
  RowWrapper,
  ColumnWrapper,
  FileInputWrapper,
  TextInputWrapper,
  FileInput,
  FileInputIcon,
  FileInputLabel,
  TextInput,
  TextInputLabel,
  UploadButton
} from './styles'

const Upload = (props) => {
  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState([])
  const [inputKey, setInputKey] = useState('')

  const handleAttachFile = () => {
    file[0]['fileName'] = fileName
    props.setUploadFile(file)
    setInputKey(new Date().toString())
    setFileName('')
  }

  const changeFileName = (event) => {
    setFileName(event.target.value)
  }

  const changeFile = (event) => {
    const csvFilesOnly = event.target.files[0]['name'].substring(event.target.files[0]['name'].length - 3, event.target.files[0]['name'].length) === 'csv'

    if(event.target.files[0] !== undefined && csvFilesOnly) {
      setFile(event.target.files)
      setFileName(event.target.files[0].name)
    }

    if(event.target.files[0] !== undefined && !csvFilesOnly) {
      swal({
        title: "Error!",
        text: "You can only upload .csv files!",
        icon: "error",
      });
    }
  }

  return(
    <ColumnWrapper>
      <RowWrapper>
        <FileInputWrapper>
          <FileInput type='file' accept=".csv" id='file' onChange={changeFile} key={inputKey}/>
          <FileInputLabel htmlFor="file">
            <FileInputIcon src={IMAGES.UPLOAD_ICON}/>
            { file[0] === undefined ? 'Choose the file to upload' : file[0].name}
          </FileInputLabel>
        </FileInputWrapper>
        <TextInputWrapper>
          <TextInputLabel htmlFor="fileName">File name</TextInputLabel>
          <TextInput type='text' id='fileName' onChange={changeFileName} value={fileName}/>
        </TextInputWrapper>
        <UploadButton disabled={fileName.trim() === '' || file[0] === undefined} onClick={handleAttachFile}>Upload</UploadButton>
      </RowWrapper>
      <RowWrapper>
        <UploadProgress />
      </RowWrapper>
    </ColumnWrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  setUploadFile: files => dispatch(setUploadFile(files))
})

export default connect(null, mapDispatchToProps)(Upload)