import styled from "styled-components";

export const Container = styled.div<{selected:boolean}>`
  display: flex;
  border: 2px solid ${props => props.selected ? '#25cd89' : '#16195c'};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 2px solid #496459;
  }
`

export const Icon = styled.div`
    padding: 10px;
    background: #16195c;
    border-radius: 100%;
    align-items: center;
    text-align: center;
    font-size: 35px;
`
export const Info = styled.div`
    padding: 10px;
`
export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
`
export const Description = styled.div`
    color: #bbb;
    padding-top: 10px;
`