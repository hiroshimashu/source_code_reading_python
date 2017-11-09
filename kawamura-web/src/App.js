import React, { Component } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Top from './components/Top';
import Space from './components/Space';
import Title from './components/Title';
import Songs from './static/musical-note.png';
import Listen from './components/Listen';
import Trailer from './components/Trailer';
import Interview from './components/Interview';
import Footer from './components/Footer';
import Comment from './components/comments';
import MessageMain from './components/MessageMain';
import GoToTop from './components/GoToTop';
import Introduction from './components/Introduction';
import TourInformation from './components/TourInformation';
import Link from './components/Link';





class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            note1: false,
            note2:false,
            note3: false,
            note4: false,
            note5: false,
            note6: false,
            note7: false,
            note8: false,
            target0: null,
            target1:null,
            target2 :null,
            target3: null,
            target4: null,
            target5: null,
            topBt: false,
        }
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.handleClick5 = this.handleClick5.bind(this);
        this.handleClick6 = this.handleClick6.bind(this);
        this.handleClick7 = this.handleClick7.bind(this);
        this.handleClick8 = this.handleClick8.bind(this);
        this.appearTopBtn = this.appearTopBtn.bind(this);
        this.disappearTopBtn = this.disappearTopBtn.bind(this);

    }

    componentDidMount() {
　　　　　　
　　　　　this.setState(() => {
             return {
                 target0: this.header,
                 target1: this.title,
                 target2: this.trailer,
                 target3: this.interview,
                 target4: this.tour,
                 target5: this.link
             }

         }
     )

    }




    handleClick1() {
        this.setState(prevState => {
            return {note1: !prevState.note1}
        })
    }

    handleClick2() {
        this.setState(prevState => {
            return {note2: !prevState.note2}
        })
    }

    handleClick3() {
        this.setState(prevState => {
            return {note3: !prevState.note3}
        })
    }

    handleClick4() {
        this.setState(prevState => {
            return {note4: !prevState.note4}
        })
    }

    handleClick5() {
        this.setState(prevState => {
            return {note5: !prevState.note5}
        })
    }

    handleClick6() {
        this.setState(prevState => {
            return {note6: !prevState.note6}
        })
    }

    handleClick7() {
        this.setState(prevState => {
            return {note7: !prevState.note7}
        })
    }

    handleClick8() {
        this.setState(prevState => {
            return {note8: !prevState.note8}
        })
    }

    appearTopBtn() {
        this.setState(preState => {
            return { topBt: true}
        })
    }

    disappearTopBtn() {
        this.setState(preState => {
            return { topBt: false}
        })
    }

    render() {
    return (
      <div className="App" style = {styles.appWrapper}>
          <Background />
          <Header
              target1 = {this.state.target1}
              target2 = {this.state.target2}
              target3 = {this.state.target3}
              target4 = {this.state.target4}
              target5 = {this.state.target5}
              appearBtn = {this.appearTopBtn}
              ref = {header => this.header = header}
          />
          <Top />
          <Introduction />
          <Space />
          <Title src = {Songs} ref ={title => this.title = title}>
              セルフライナーノーツ
          </Title>
          <Listen handleClick1 = {this.handleClick1}
                  handleClick2 = {this.handleClick2}
                  handleClick3 = {this.handleClick3}
                  handleClick4 = {this.handleClick4}
                  handleClick5 = {this.handleClick5}
                  handleClick6 = {this.handleClick6}
                  handleClick7 = {this.handleClick7}
                  handleClick8 = {this.handleClick8}
          />
          <Trailer
              ref ={trailer => this.trailer = trailer}
          />
          <Interview ref = {interview => this.interview = interview} />
          <MessageMain />
          <TourInformation ref = {tour => this.tour = tour}/>
          <Link ref = {link => this.link = link}/>
          <Footer />
          <Comment note1 = {this.state.note1}
                   note2 = {this.state.note2}
                   note3 = {this.state.note3}
                   note4 = {this.state.note4}
                   note5 = {this.state.note5}
                   note6 = {this.state.note6}
                   note7 = {this.state.note7}
                   note8 = {this.state.note8}
                   handleClick1 = {this.handleClick1}
                   handleClick2 = {this.handleClick2}
                   handleClick3 = {this.handleClick3}
                   handleClick4 = {this.handleClick4}
                   handleClick5 = {this.handleClick5}
                   handleClick6 = {this.handleClick6}
                   handleClick7 = {this.handleClick7}
                   handleClick8 = {this.handleClick8}
          />
          {this.state.topBt && <GoToTop target0 = {this.state.target0} disappear = {this.disappearTopBtn}/>}
      </div>
    );
  }
}

const styles = {

    appWrapper: {
        position: 'relative',
        width: '960px',
        height: '8200px',
        margin: '0 auto',
        overflow: 'hidden',
        zIndex: 5
    }
}

export default App;
