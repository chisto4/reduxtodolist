import React from 'react';

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


export default Footer;
