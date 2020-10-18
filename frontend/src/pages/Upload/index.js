import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setUploadFile } from '../../redux/actions'
import UploadProgress from '../../components/UploadProgress'
import { RowWrapper, ColumnWrapper, FileInputWrapper, TextInputWrapper, FileInput, FileInputIcon, FileInputLabel, TextInput, TextInputLabel, UploadButton } from './styles'
import IMAGES from '../../constants/images'

const Upload = (props) => {
  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState([])
  const [inputKey, setInputKey] = useState('')

  const handleAttachFile = (event) => {
    file[0]['fileName'] = fileName
    props.setUploadFile(file)
    setInputKey(new Date().toString())
    setFileName('')
  }

  const changeFileName = (event) => {
    setFileName(event.target.value)
  }

  const changeFile = (event) => {
    setFile(event.target.files)
    setFileName(event.target.files[0].name)
  }

  return(
    <ColumnWrapper>
      <RowWrapper>
        <FileInputWrapper>
          <FileInputIcon src={IMAGES.UPLOAD_ICON}/>
          <FileInput type='file' id='file' onChange={changeFile} key={inputKey}/>
          <FileInputLabel htmlFor="file">{ fileName.trim() === '' ? 'Choose the file to upload' : fileName}</FileInputLabel>
        </FileInputWrapper>
        <TextInputWrapper>
          <TextInputLabel htmlFor="fileName">File name</TextInputLabel>
          <TextInput type='text' id='fileName' onChange={changeFileName} value={fileName}/>
        </TextInputWrapper>
        <UploadButton disabled={fileName.trim() === ''} onClick={handleAttachFile}>Upload</UploadButton>
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