import userEvent from '@testing-library/user-event';
import React from 'react';
import '../styles/scss/Sidebar.scss'





class Sidebar extends React.Component {
    state = {
        date: null
    };
    handleDateChange = date => this.setState({ date });

    render() {
        const { date } = this.state;
        return (
            <div className="sidebar">



            </div>
        )
    }
}
export default Sidebar;
