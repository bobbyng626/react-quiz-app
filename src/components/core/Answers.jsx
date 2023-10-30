import React, {Component} from 'react';
import '../../resources/questions.css'
class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
            classNames: ['', '', '', '']
        }
        
        this.checkAnswer = this.checkAnswer.bind(this);
        this.clearClasses = this.clearClasses.bind(this);
    }
    
    checkAnswer(e) {
        let { isAnswered } = this.props;
        
        if(!isAnswered) {
            let elem = e.currentTarget;
            let { correct, increaseScore } = this.props;
            let answer = Number(elem.dataset.id);
            let updatedClassNames = this.state.classNames;

            if(answer === correct){
                updatedClassNames[answer-1] = 'right';
                increaseScore();
            }
            else {
                updatedClassNames[answer-1] = 'wrong';
            }
            
            this.setState({
                classNames: updatedClassNames,
                
            })

            this.props.showButton();       
            var myTime = setTimeout(() => {
                this.clearClasses();
                //console.log("IN SET Timeout")
            }, 5000);
        }
    }
    clearClasses(){
        this.setState({
            classNames: ['', '']
        })
        
    }
    render() {
        let { answers } = this.props;
        let { images } = this.props;
        let { classNames } = this.state;
        let transition = {
            transitionName: "example",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 300
        }
        
        return (
            <div id="answers">
                <ul>
                    <li onClick={this.checkAnswer} 
                        className={classNames[0]} data-id="1">
                    {/* <span>A</span>  */}
                    <div className="image-container">
                        <img 
                            src=""
                            alt="Image description"
                            className="quiz-image"
                        />
                    </div>
                    {/* <p>{}</p> */}
                    </li>

                    <li onClick={this.checkAnswer} 
                        className={classNames[1]} data-id="2">
                    {/* <span>B</span>  */}
                    <div className="image-container">
                        <img 
                            src=""
                            alt="Image description"
                            className="quiz-image"
                        />
                    </div>
                    {/* <p>{}</p> */}
                    </li>
                </ul>
            </div>
        );
    }
}

export default Answers