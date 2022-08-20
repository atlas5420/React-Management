import React, { Children, Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody';
import Tablehead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Container, Slider } from '@mui/material';



const customers = [{
  'image': 'http://placeimg.com/64/64/any',
  'id': '1',
  'name': '고객1',
  'birthday': '961222',
  'gender': '남자',
  'job': '학생'
},
{
  'image': 'http://placeimg.com/64/64/1',
  'id': '2',
  'name': '고객2',
  'birthday': '961222',
  'gender': '남자',
  'job': '학생'
},
{
  'image': 'http://placeimg.com/64/64/2',
  'id': '3',
  'name': '고객3',
  'birthday': '961222',
  'gender': '남자',
  'job': '학생'
},
]

class App extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="sm" fixed>
          <Slider defaultValue={30}
            sx={{
              width: 300,
              color: 'success.main',
            }}
          ></Slider>
          <Paper>
            <Table>
              <Tablehead>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </Tablehead>
              <TableBody>
                {
                  customers.map(c => {
                    return (
                      <Customer
                        key={c.id}
                        id={c.id}
                        image={c.image}
                        name={c.name}
                        birthday={c.birthday}
                        gender={c.gender}
                        job={c.job}
                      ></Customer>
                    )
                  })
                }
              </TableBody>
            </Table>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default App;
