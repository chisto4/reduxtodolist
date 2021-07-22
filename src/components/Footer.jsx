import React from 'react';
import { connect } from "react-redux";
import {clearAll, setAllArrayElement} from "../action/Actions"


 //Import icon
 import chekAllbutton  from '../icon/chek.png';
 import deleteAllbutton  from '../icon/delete.png';

class Footer extends React.Component {
  constructor(props) {super(props);}
render() {
  return (
    <footer>
        <button onClick={this.props.setAllArrayElement} className="checkAllbutton">
         <img src={chekAllbutton} className="icon" alt="deleteAll"/>
        </button>
      <div className="totalCounter">
        Task total: {this.props.count}
      </div>
      <button onClick={this.props.clearAll} className="deleteAllbutton">
        <img src={deleteAllbutton} className="icon" alt="deleteAll"/>
      </button>
  </footer>
  )
}
}

function mapStateToProps(state) {
  const { count } = state.Reductor;
  return { count };
}

const mapDispatchToProps = {
  clearAll,
  setAllArrayElement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
