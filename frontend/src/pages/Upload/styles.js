import styled from 'styled-components/macro'
import media from 'styled-media-query'

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px;

  justify-content: center;
  
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const FileInputWrapper = styled.div`
  width: 360px;
  height: 48px;

  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 66px;

  ${media.lessThan('medium')`
    width: 300px;
    margin: 8px auto 16px auto;
  `}
`

export const TextInputWrapper = styled.div`
  margin-top: 66px;
  margin-left: 24px;

  ${media.lessThan('medium')`
    margin: 16px auto;
  `}
`

export const FileInput = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`

export const TextInput = styled.input`
  width: 360px;
  height: 48px;

  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 4px;
  padding:12px;
  
  ${media.lessThan('medium')`
    width: 300px;
  `}
`

export const FileInputIcon = styled.img`
  margin: 8px;
`

export const FileInputLabel = styled.label`
  color: #6A6C72;
  position: absolute;
  margin-top: 12px;
  margin-left: 8px;
  text-overflow: ellipsis;
  display: inline-block;
  overflow: hidden;
  width: 300px;
  white-space: nowrap;
  vertical-align: middle;

  ${media.lessThan('medium')`
    width: 240px;
  `}
`

export const TextInputLabel = styled.label`
  color: #6A6C72;
  position: absolute;
  top: 160px;
  text-overflow: ellipsis;
  display: inline-block;
  overflow: hidden;
  width: 300px;
  white-space: nowrap;
  vertical-align: middle;
  font-size: 12px;

  ${media.lessThan('medium')`
    top: 180px;
    width: 240px;
  `}
`

export const UploadButton = styled.button`
  width: 360px;
  height: 48px;

  margin-top: 66px;
  margin-left: 24px;

  background: #00EC9D;
  border: 1px solid #00EC9D;
  border-radius: 4px;

  font-size: 16px;
  font-weight: bold;
  color: #263043;

  &:disabled {
    background: #E5E5E5;
    border: 1px solid #E5E5E5;
    color: #999999;
  }

  ${media.lessThan('medium')`
    width: 300px;
    margin: 16px auto;
  `}
`