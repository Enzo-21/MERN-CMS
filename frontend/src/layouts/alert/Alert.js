import  { useEffect } from 'react'
import { notification } from 'antd';
//Redux
import PropTypes from 'prop-types'
import { connect } from "react-redux";



const openNotificationWithIcon = (type, title, msg) => {
    notification[type]({
        message: title,
        description: msg,
    });
};

// This is the actual alert "component"
const Alert = ({ alerts }) => {
    useEffect(() => {
        alerts !== null && alerts.length > 0 && alerts.map(alert => (
            openNotificationWithIcon(alert.alertType, alert.title, alert.msg)
        ))
    }, [alerts])

    return null;
}



Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    alerts: state.alertReducer
})

export default connect(mapStateToProps)(Alert)
