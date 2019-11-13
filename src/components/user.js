import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class UserView extends Component {
  render() {
    const { userInfo } = this.props.store;
    
    return (
      <div>
        이름 : {userInfo ? userInfo.name : ''}
      </div>
    );
  }
}

export default UserView;