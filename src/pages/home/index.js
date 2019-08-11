import React from 'react';
import { connect } from 'react-redux';
import Header from '../../modules/header/index.js';
import { addList, setList, setLangList } from '../../store/actionCreater';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import { loadData } from '../../utils';
import styles from './index.css';
import { withStyles } from '../../HOC/index.js';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }
  componentDidMount() {
    this.props.setList();
    this.props.setLangList();
  }
  render() {
    let { route, staticContext } = this.props;
    return (
      <div>
        <Header staticContext={staticContext} />
        <h1 className={styles.test}>hello world iiiii{this.props.name}</h1>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={e => this.setState({ inputValue: e.target.value })}
        />
        <button
          onClick={() => {
            this.props.addList(this.state.inputValue);
          }}
        >
          add
        </button>
        <ul>
          {this.props.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        {renderRoutes(route.routes)}
        <ul>
          {this.props.langList.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  name: state.name,
  list: state.list,
  langList: state.langList,
});
const mapStateToAction = dispatch => ({
  addList(value) {
    dispatch(addList(value));
  },
  setList() {
    dispatch(setList());
  },
  setLangList() {
    dispatch(setLangList());
  },
});
const ExportHome = connect(
  mapStateToProps,
  mapStateToAction
)(withStyles(styles)(Home));
ExportHome.loadData = store => {
  return loadData(store.dispatch(setList()), store.dispatch(setLangList()));
};
export default ExportHome;
