import React, { Component } from 'react';
import MyButton from '../util/MyButton.jsx';
import Fade from 'react-reveal/Fade';
import crystalBall from "../../assets/img.png";

class Popup extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'start',
            title: 'Welcome to Caelusium Quest',
            text: 'This is a mysterious journey into Caelusium world <br /><br />',
            buttonText: 'Start' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
    popupHandle() {
        let { time } = this.state;
        
        if(time === 'start'){
            this.setState({
                time: 'end',
                title: 'Congratulations!',
                buttonText: 'Restart'
            });

            //alert("START THE QUIZ");
            this.props.startQuiz();
        } else {
            
            //alert("FINISHED QUIZ");            
            location.reload();// restart the application
        }
    }
     
    createMarkup(text) {
        return {__html: text};
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: 'You have completed the quiz. <br /> You got: <strong>' + this.props.score + 
            '</strong> out of <strong>' + 
            this.props.total +
            '</strong> questions right.'
        })
    }

    
    render() {
       
        let { title, text, buttonText } = this.state;
        
        let { style } = this.props;
        
        return (
            <Fade delay={500}>
                <div className="popup-container" style={style}>
                    <div className="container">
                        <div className="ml-5 col-md-10 col-10">
                            <div className="popup"  style={{backgroundImage: `url(${crystalBall})`}}>
                                {/* <h1>{title}</h1> */}
                                {/* <p dangerouslySetInnerHTML={this.createMarkup(text)} /> */}
                                <span onClick={this.popupHandle} style={{textAlign: 'center'}}>
                                    <MyButton
                                        text={buttonText}
                                        bck='#FF9800'
                                        color='#fff'
                                        className="popupButton"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Popup; 

