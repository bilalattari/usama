import React from 'react';
import './App.css';
import download from './download.jpg'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button, Col, Row, Form, FormGroup, Label, Table } from 'reactstrap';
import firebase from 'firebase';



class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allNiyats: []
    }
  }

  componentDidMount() {
    this.getDataFromFireBase()
  }



  getDataFromFireBase = async () => {
    let b = firebase.database().ref('sawaab');
    await b.once('value', (data) => {
      console.log(data.val())
      console.log(Object.values(data.val()))
      this.setState({ allNiyats  : Object.values(data.val()) })
    })
  }



  render() {
    let { allNiyats } = this.state
    console.log(allNiyats, 'allNiyats')
    return (
      <div className={'containerr'}>
        <div className={'attar'}>
        <div className={'imgContainer'}>
          <img src={download} alt='mypics' width='200px' style={{ margin: '25px' }} />
        </div>

        <h2 className={'heading2'}>26vi Ramzan Wiladat e Ameer e Ahle Sunnat </h2>
          <br/>
          <h4 className={'heading4'}>Esaal e Sawaab Report</h4>
          <br/>
          </div>
        <Table className={'table'}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Addres</th>
              <th>Quran e Pak</th>
              <th>Drood e Pak</th>
              <th>Astagfaar</th>
              <th>Ayat ul Kursi</th>
              <th>Surah e Mulk</th>
              <th>Surah e Yaseen</th>
              <th>See All</th>
            </tr>
          </thead>
          <tbody>
            {
              allNiyats.map((data, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td className={'td1'}>{data.name}</td>
                    <td className={'td1'}>{data.address} </td>
                    <td>{data.quran} </td>
                    <td>{data.drood} </td>
                    <td>{data.astagfaar} </td>
                    <td>{data.aytalqursi} </td>
                    <td>{data.surahmulk} </td>
                    <td>{data.surahyaseen} </td>
                    <td><Button href='/seeAll'>See All</Button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        <div className={'developer'}><span>Web $ide Developer Bilal Raza Attari 03132933803 & Muhammad Usama Attari 03142012080</span></div>
        <div className={'developer'}><span>Always Watch Madani Channel</span></div>
              </div>

    )
  }
}

export default Output;
