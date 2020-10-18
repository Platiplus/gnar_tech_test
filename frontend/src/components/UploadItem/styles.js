import styled from 'styled-components/macro'
import media from 'styled-media-query'

export const WrapperItem = styled.div`
  display: grid;
  grid-template-columns: calc(100% - 50px) 50px;
  padding: 16px;
  background-color: #F8F8F8;
  margin: 8px 0;
  border-radius: 4px;
`
export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 8px;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const ProgressBar = styled.div`
  width: 100%;
  height: 16px;
  background-color: #E5E5E5;
  border-radius: 20px;
`

export const Progress = styled.div`
  width: ${props => props.width};
  height: 15px;
  background-color: #00EC9D;
  border-radius: 20px;
`

export const FileName = styled.label`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left; 
`

export const Percentage = styled.span`
  margin-left: 12px;
`