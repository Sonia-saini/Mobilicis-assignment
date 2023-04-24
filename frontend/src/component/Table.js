import {
  Th,
  Thead,
  Table,
  TableContainer,
  Tr,
  Td,
  Tbody,
} from "@chakra-ui/react";
import React from "react";

function Tablecomponent({ props }) {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme={"blue"}>
        <Thead>
          <Tr>
            <Th>NO.</Th>
            <Th>EMAIL</Th>
            <Th>FULL NAME</Th>
            <Th>CITY</Th>
            <Th>INCOME</Th>
            <Th>GENDER</Th>
            <Th>QUOTE</Th>
            <Th>PHONE_PRICE</Th>
            <Th>CAR</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.map((el, i) => (
            <Tr>
              <Td>{i + 1}</Td>
              <Td>{el.email}</Td>
              <Td>{el.first_name + " " + el.last_name}</Td>
              <Td>{el.city}</Td>
              <Td>{el.income}</Td>
              <Td>{el.gender}</Td>
              <Td>{el.quote}</Td>
              <Td>{el.phone_price}</Td>
              <Td>{el.car}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default Tablecomponent;
