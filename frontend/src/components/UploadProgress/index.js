import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { size, toArray } from 'lodash'

import { uploadFile } from '../../redux/actions'
import UploadItem from '../UploadItem'
import { Wrapper } from './styles'

const UploadProgress = props => {
  const { fileProgress, uploadFile } = props
  const uploadedFileAmount = size(fileProgress)

  useEffect(() => {
    const fileToUpload = toArray(fileProgress).filter(file => file.progress === 0)
    uploadFile(fileToUpload)
    // eslint-disable-next-line
  }, [uploadedFileAmount])

  return uploadedFileAmount > 0 ? (
    <Wrapper>
      <h4>Uploaded Files</h4>
      {
        size(fileProgress)
        ? toArray(fileProgress).map(file => <UploadItem key={file.id} file={file} />).reverse()
        : null
      }
    </Wrapper>
  ) : null
}

const mapStateToProps = state => ({
  fileProgress: state.UploadFile.fileProgress,
})

const mapDispatchToProps = dispatch => ({
  uploadFile: files => dispatch(uploadFile(files)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadProgress)