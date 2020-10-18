import styled from 'styled-components/macro'

export const RowWrapper = styled.div`
  width: 100%;
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
`

export const ItemList = styled.ul`
  margin: 24px 16px;
  list-style: none;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #E5E5E5;
  flex: ${ props => `${props.flexPriority};` }
`

export const ListHeader = styled.div`
  background-color #263043;
  color: #FFFFFF;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 12px 0 12px 24px;
  height: 48px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const ListItem = styled.li`
  height: 64px;
  background-color: ${ props => props.active ? '#E5E5E5' : '#FFFFFF' };
  cursor:pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #E5E5E5;
  }
`

export const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`
export const TableCell = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  width: 25%;
  padding: 2em 1.2em;
  height: 64px;
  overflow: hidden;
  display: flex;
  align-items: center;
`

export const MobileWrapper = styled.div`
  margin: 16px;
`

export const Card = styled.div`
  margin: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #F8F8F8;
  border-radius: 8px;
`

export const CardTitle = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-top: 16px;
`