import React from 'react';
class ClearAllItems extends React.Component {
    render() {
        return <button onClick={this.props.removeDone}>Ta bort all färdiga</button>
    }
}
export default ClearAllItems;