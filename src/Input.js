import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline' className='mb-2 mx-sm-3' type='test' placeholder='enter guess'>
        <input data-test='input-box' />
        <button data-test='submit-button' type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    );
    return <div data-test='component-input'>{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
