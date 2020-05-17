import React from 'react';
import './App.css';
import ImageUploader from 'react-images-upload';
import download from './logo.png'
import firebase from 'firebase'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const firebaseConfig = {
  apiKey: "AIzaSyDnpIB37FeVTyE8teDdXDSGSrj8FfaGAZ4",
  authDomain: " -attarii.firebaseapp.com",
  databaseURL: "https://abbas-attarii.firebaseio.com",
  projectId: "abbas-attarii",
  storageBucket: "abbas-attarii.appspot.com",
  messagingSenderId: "990953207630",
  appId: "1:990953207630:web:4d2b3e0041b278ec2c501f",
  measurementId: "G-HHD5RBHVQN"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCPhtI4sgB4gxsPPyraAZYLDRHTyo82txE",
//   authDomain: "inside-look-831f9.firebaseapp.com",
//   databaseURL: "https://inside-look-831f9.firebaseio.com",
//   projectId: "inside-look-831f9",
//   storageBucket: "inside-look-831f9.appspot.com",
//   messagingSenderId: "60328655726",
//   appId: "1:60328655726:web:953bd3ed1be5e791e05f7f",
//   measurementId: "G-6KFEPJHJWB"
// };

firebase.initializeApp(firebaseConfig)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: '',
      subtitle: "",
      password: '',
      description: '',
      pictures: [],
      pictureUploadingToServer: false,
      showModal: false,
      userSignedIn: true,
    }
  }

  subtitleHandler = (e) => {
    this.setState({ subtitle: e.target.value })
  }

  descriptionHandler = (e) => {
    this.setState({ description: e.target.value })
  }


  onDrop = async (picture) => {
    let allPictures = []
    this.setState({ pictureUploadingToServer: true })
    await picture.map(async (picture) => {
      var storageRef = firebase.storage().ref();
      await storageRef.child('Images' + picture.name).put(picture).then(async (snapshot) => {
        await storageRef.child('Images' + picture.name).getDownloadURL().then((url) =>
          allPictures.push(url)
        )
      }).catch((err) => this.setState({ pictureUploadingToServer: false }))
      this.setState({
        pictures: allPictures,
        pictureUploadingToServer: false
      });
    })
  }

  submitArticle = () => {
    let { heading, subtitle, description, pictures } = this.state
    if (heading !== '' && subtitle !== '' && description !== "" && pictures.length !== 0) {
      let ref = firebase.database().ref('articles')
      let obj = {
        heading,
        subtitle,
        description,
        pictures
      }
      ref.push(obj).then(() => {
        this.setState({
          heading: "",
          subtitle: "",
          description: "",
          pictures: []
        })
      })
    }
    else {
      alert('Enter Full Detail')
    }
  }
   


  signIn = () => {
    firebase.auth().signInWithEmailAndPassword('Muhammad.usama100@gmail.com', this.state.password)
      .then(() => {
        this.setState({ userSignedIn: true, showModal: false })
      })
      .catch((err) => {
        console.log(err)
        this.setState({ userSignedIn: false, showModal: false })
      })
  }
  render() {
    let {
      buttonLabel,
      className
    } = this.props
    let { heading, subtitle, description, userSignedIn, showModal, password, pictureUploadingToServer } = this.state
    return (
      <>
        <Modal isOpen={showModal} className={className}>
          <ModalHeader >Enter Admin Password To Continue</ModalHeader>
          <ModalBody>
            <Input placeholder={'Password'} type={'password'} value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.signIn} >Login</Button>{' '}
            <Button color="secondary" onClick={() => this.setState({  showModal:false })}>Cancel</Button>
          </ModalFooter>
        </Modal>
{/* 
        {
          status === 'send' ? 'one tick' : status === 'receive' ? 'two tick' : 'two tick blue'
        } */}
        {userSignedIn ?
          <div className={'container'}>
            <div className={'imgContainer'}>
              <img src={download} alt='mypics' width='200px' style={{ margin: '25px' }} />
            </div>
            <div className={'inputContainer'}>
              <span className={'inputLabel'}> Heading </span>
              <Input placeholder={'Heading'} value={heading}
                onChange={(e) => this.setState({ heading: e.target.value })}
              />
            </div>
            <div className={'inputContainer'}>

              <span className={'inputLabel'}> Sub Title </span>
              <Input placeholder={'Sub Title'} value={subtitle}
                onChange={this.subtitleHandler}
              />
            </div>
            <div className={'inputContainer'}>
              <span className={'inputLabel'}>  Description </span>
              <Input type="textarea" placeholder={'Description'} value={description}
                onChange={this.descriptionHandler}
              />
            </div>
            <ImageUploader
              withIcon={true}
              buttonText='Choose images'
              onChange={this.onDrop}
              withPreview={true}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
            />
            
            <Button color='primary' size='lg' onClick={this.getDataFromFireBase1}>Get Data</Button>

            <Button color="primary" disabled={pictureUploadingToServer} size="lg"
              block onClick={this.submitArticle}> Submit Article</Button>
          </div>
          :
          <div>
             <p>Eenter correct passowrd to continue </p>
          </div>
        }
      </>
    )
  }
}

export default App;
