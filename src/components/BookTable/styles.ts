import { Table } from "@radix-ui/themes";
import styled from "styled-components";

export const TableBody = styled(Table.Body)`
  cursor: pointer;

  :hover {
    background-color: #f5f5f5;
  }
`

export const TableCell = styled(Table.Cell)`
  align-content: center;
`

export const LastTableCell = styled(Table.Cell)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`