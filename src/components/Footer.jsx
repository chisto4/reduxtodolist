import React from 'react';
import { connect } from "react-redux";
import {clearAll, countArray, setAllArrayElement} from "../action/Actions"


 //Import icon
 import chekAllbutton  from '../icon/chek.png';
 import deleteAllbutton  from '../icon/delete.png';

class Footer extends React.Component {
  constructor(props) {super(props);
    
  }

render() {
  return (
    <footer>
        <button onClick={this.props.setAllArrayElement} className="checkAllbutton">
         <img src={chekAllbutton} className="icon" alt="deleteAll"/>
        </button>
      <div className="totalCounter">
        Task total: {this.props.countArray}
      </div>
      <button onClick={this.props.clearAll} className="deleteAllbutton">
        <img src={deleteAllbutton} className="icon" alt="deleteAll"/>
      </button>
  </footer>
  )
}
}


const mapDispatchToProps = {
  clearAll,
  countArray,
  setAllArrayElement,
};

export default connect(null, mapDispatchToProps)(Footer);
