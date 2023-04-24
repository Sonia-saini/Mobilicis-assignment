import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Heading, Text } from "@chakra-ui/react";
import Tablecomponent from "./component/Table";
import {
  Th,
  Thead,
  Table,
  TableContainer,
  Tr,
  Td,
  Tbody,
} from "@chakra-ui/react";
function App() {
  const [users1, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [users3, setUsers3] = useState([]);
  const [users4, setUsers4] = useState([]);
  const [users5, setUsers5] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gentle-clam-garters.cyclic.app/usersbyincomeandcar`)
      .then((res) => setUsers(res.data.x))
      .catch((err) => console.log(err));
    axios
      .get(`https://gentle-clam-garters.cyclic.app/usersbygenderandphoneprice`)
      .then((res) => setUsers2(res.data.users))
      .catch((err) => console.log(err));
    axios
      .get(`https://gentle-clam-garters.cyclic.app/usersbymail`)
      .then((res) => setUsers3(res.data.x))
      .catch((err) => console.log(err));
    axios
      .get(`https://gentle-clam-garters.cyclic.app/usersbydigit`)
      .then((res) => setUsers4(res.data.x))
      .catch((err) => console.log(err));
    axios
      .get(`https://gentle-clam-garters.cyclic.app/userstop`)
      .then((res) => setUsers5(res.data.averageIncome))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Heading>
        1. Users which have income lower than $5 USD and have a car of brand
        “BMW” or “Mercedes”.
      </Heading>
      <Tablecomponent props={users1} />
      <Heading>
        2. Male Users which have phone price greater than 10,000.
      </Heading>
      <Tablecomponent props={users2} />
      <Heading>
        3. Users whose last name starts with “M” and has a quote character
        length greater than 15 and email includes his/her last name.
      </Heading>
      <Tablecomponent props={users3} />
      <Heading>
        4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose
        email does not include any digit.
      </Heading>
      <Tablecomponent props={users4} />
      <Heading>
        5. Show the data of top 10 cities which have the highest number of users
        and their average income.
      </Heading>
      <TableContainer>
        <Table variant="striped" colorScheme="yellow">
          <Thead>
            <Tr>
              <Th>NO.</Th>

              <Th>FULL NAME</Th>

              <Th>AVERAGE_INCOME</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users5.map((el, i) => (
              <Tr>
                <Td>{i + 1}</Td>
                <Td>{el.name}</Td>
                <Td>{el.averageIncome}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
