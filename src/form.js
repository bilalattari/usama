import React from 'react';
import './App.css';
import download from './download.jpg'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button, Col, Row, Form, FormGroup, Label, Table } from 'reactstrap';
import firebase from 'firebase';
import Navbar from './Navbar';


const firebaseConfig = {
  apiKey: "AIzaSyDnpIB37FeVTyE8teDdXDSGSrj8FfaGAZ4",
  authDomain: "abbas-attarii.firebaseapp.com",
  databaseURL: "https://abbas-attarii.firebaseio.com",
  projectId: "abbas-attarii",
  storageBucket: "abbas-attarii.appspot.com",
  messagingSenderId: "990953207630",
  appId: "1:990953207630:web:4d2b3e0041b278ec2c501f",
  measurementId: "G-HHD5RBHVQN"
};
firebase.initializeApp(firebaseConfig)

class Formm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          address: "",
          quran: '0',
          drood: '0',
          surahmulk: '0',
          aytalqursi: '0',
          surahyaseen: '0',
          surahrehman: '0',
          astagfaar: '0',
          kalmaetayyiba: '0',
          tasbihefatima: '0',
          teendinmadaniqafla: false,
          aikmonthmadaniqafla: false,
          tahajjud: false,
          fikremadina: false,
          likhkrguftugu: false,
          quflemadinaaynak: false,
        }
      }


      address = (e) => {
        this.setState({ address: e.target.value })
      }
    
      quran = (e) => {
        this.setState({ quran: e.target.value })
      }
    
      surahmulk = (e) => {
        this.setState({ surahmulk: e.target.value })
      }
    
      drood = (e) => {
        this.setState({ drood: e.target.value })
      }
    
      aytalqursi = (e) => {
        this.setState({ aytalqursi: e.target.value })
      }
    
      surahyaseen = (e) => {
        this.setState({ surahyaseen: e.target.value })
      }

      submitArticle = () => {
        let { name, address, quran, surahmulk, drood, aytalqursi, surahyaseen, surahrehman, astagfaar, kalmaetayyiba, tasbihefatima, teendinmadaniqafla,
          aikmonthmadaniqafla, tahajjud, fikremadina, likhkrguftugu, quflemadinaaynak } = this.state
        if (name !== '' && address !== '') {
          let ref = firebase.database().ref('sawaab')
          let obj = {
            name,
            address,
            quran,
            drood,
            surahmulk,
            aytalqursi,
            surahyaseen,
            surahrehman,
            astagfaar,
            kalmaetayyiba,
            tasbihefatima,
            teendinmadaniqafla,
            aikmonthmadaniqafla,
            tahajjud,
            fikremadina,
            likhkrguftugu,
            quflemadinaaynak,
          }
          ref.push(obj).then(() => {
            this.setState({
              name: "",
              address: "",
              quran: "",
              drood: "",
              surahmulk: "",
              aytalqursi: "",
              surahyaseen: "",
              surahrehman: "",
              astagfaar: "",
              kalmaetayyiba: "",
              tasbihefatima: "",
              teendinmadaniqafla: '',
              aikmonthmadaniqafla: "",
              tahajjud: "",
              fikremadina: "",
              likhkrguftugu: "",
              quflemadinaaynak: "",
            })
          })
          this.props.history.push('/');
        }
        else {
          alert('Enter Name And Adress')
        }
      }

    render() {
        let { name, address, quran, surahmulk, drood, aytalqursi, surahyaseen, surahrehman, astagfaar, kalmaetayyiba, tasbihefatima, teendinmadaniqafla,
            aikmonthmadaniqafla, tahajjud, fikremadina, likhkrguftugu, quflemadinaaynak } = this.state

    return (
        <div className={'container'}>
        <div className={'imgContainer'}>
          <img src={download} alt='mypics' width='200px' style={{ margin: '25px' }} />
        </div>
        <h1>Esaal e Sawaab Form</h1>
        <div>
        {/* <Navbar/> */}
        </div>
        <div>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="text" value={name}
                  onChange={(e) => this.setState({ name: e.target.value })} placeholder="Enter Your Name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Address</Label>
                <Input type="text" value={address}
                  onChange={this.address} placeholder="Enter Address" />
              </FormGroup>
            </Col>
          </Row>
        </div>


        <div>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleCity">Quran e Pak</Label>
                <Input type="text" value={quran}
                  onChange={this.quran} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">Drood e Pak</Label>
                <Input type="text" value={drood}
                  onChange={this.drood} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleCity">Surah e Mulk</Label>
                <Input type="text" value={surahmulk}
                  onChange={this.surahmulk} />
              </FormGroup>
            </Col>
          </Row>
        </div>

        <div>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleZip">Ayat ul Kursi</Label>
                <Input type="text" value={aytalqursi}
                  onChange={this.aytalqursi} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">Surah e Yaaseen</Label>
                <Input type="text" value={surahyaseen}
                  onChange={this.surahyaseen} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleZip">Surah Rehman</Label>
                <Input type="text" value={surahrehman}
                  onChange={(e) => this.setState({ surahrehman: e.target.value })} />
              </FormGroup>
            </Col>
          </Row>
        </div>


        <div>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleCity">Astagfaar</Label>
                <Input type="text" value={astagfaar}
                  onChange={(e) => this.setState({ astagfaar: e.target.value })} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">Kalma e Tayyiba</Label>
                <Input type="text" value={kalmaetayyiba}
                  onChange={(e) => this.setState({ kalmaetayyiba: e.target.value })} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleZip">Tasbeeh e Fatima</Label>
                <Input type="text" value={tasbihefatima}
                  onChange={(e) => this.setState({ tasbihefatima: e.target.value })} />
              </FormGroup>
            </Col>
          </Row>
        </div>

        {/* <div>
          <FormGroup row>
            <Label for="exampleSelect" sm={2}>Select</Label>
            <Col sm={10}>
              <Input type="select" name="select" id="exampleSelect">
                <option>Mukhtalif Paray</option>
                <option>Surah Waakia</option>
                <option>Surah Muzammil</option>
                <option>3 Qul</option>
                <option>Deegar Auraad</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
            <Col sm={10}>
              <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                <option>Mukhtalif Paray</option>
                <option>Surah Waakia</option>
                <option>Surah Muzammil</option>
                <option>3 Qul</option>
                <option>Deegar Auraad</option>
              </Input>
            </Col>
          </FormGroup>
        </div> */}

        <div>
          <h3>Deegar Niyaatain</h3>
          <Form>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" checked={teendinmadaniqafla}
                  onChange={(e) => this.setState({ teendinmadaniqafla: !this.state.teendinmadaniqafla })} />3 Days Madani Qafla every month
        </Label>
            </FormGroup>
            <br/>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" checked={aikmonthmadaniqafla}
                  onChange={(e) => this.setState({ aikmonthmadaniqafla: !this.state.aikmonthmadaniqafla })} />1 Month Madani Qafla
        </Label>
            </FormGroup>
            <br/>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" checked={tahajjud}
                  onChange={(e) => this.setState({ tahajjud: !this.state.tahajjud })} />Har roz Tahajjud
        </Label>
            </FormGroup>
            <br/>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" checked={fikremadina}
                  onChange={(e) => this.setState({ fikremadina: !this.state.fikremadina })} /> Daily Fikr e Madina
        </Label>
            </FormGroup>
            <br/>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" checked={likhkrguftugu}
                  onChange={(e) => this.setState({ likhkrguftugu: !this.state.likhkrguftugu })} /> Daily 12 baar likh kr Guftugu
        </Label>
            </FormGroup>
            <br/>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" checked={quflemadinaaynak}
                  onChange={(e) => this.setState({ quflemadinaaynak: !this.state.quflemadinaaynak })} /> Daily 12 mint Qufle Madina Glases ka istimaal
        </Label>
            </FormGroup>
          </Form>
        </div>


        <div> 
          <br />
          <Button color="primary" size="lg"
            onClick={this.submitArticle}> Submit Isaal e Sawaab</Button>
        </div>
        </div>
        )
    }
  }
  
  export default Formm;