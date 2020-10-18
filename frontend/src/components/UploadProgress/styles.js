import styled from 'styled-components/macro'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  margin: 80px;

  ${media.lessThan('medium')`
    margin: 24px auto;
  `}
`