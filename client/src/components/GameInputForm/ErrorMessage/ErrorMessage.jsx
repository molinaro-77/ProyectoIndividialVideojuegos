import alert from '../../../images/utils/hugin_alert.webp';

import './ErrorMessage.css'

export default function ErrorMessage(props){
    return (
        <div className={props.className}>
            <div className='error-message-container'>
                {props.message}
            </div>
            <div className='alert-image-container'>
                <img
                    className='hugin-alert-img'
                    src={alert} alt="" />
            </div>
        </div>
    )
}