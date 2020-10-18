import React from 'react'
import { WrapperItem, LeftSide, ProgressBar, Progress, FileName, Percentage} from './styles'

const UploadItem = props => {
  const { file, progress } = props.file

  return (
    <WrapperItem>
      <LeftSide>
        <FileName>{file.fileName}</FileName>
        <ProgressBar>
          <Progress width={`${progress}%`} />
        </ProgressBar>
      </LeftSide>
      <Percentage>{progress}%</Percentage>
    </WrapperItem>
  )
}

export default UploadItem