import React from "react";

const Appointment = () => (
    <div className="text-center mt-5">
        <h1>Appointment</h1>
        <div>
            
            <p>
                Make Appointment
            </p>
        </div>
    </div>
);
export default Appointment;


// import React,{Component} from "react";
// import DateTimePicker from 'react-native-modal-datetime-picker';
// import { Text, TouchableOpacity} from 'react-native';
// // import API from "../../util/ApptApi";
// import ApptApi from "../../util/ApptApi";

// class Appointment extends Component {
//     state = {
//         isDateTimePickerVisible: false
//     }
//     showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
//     hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
//     handleDatePicked = (date) => {
//         console.log("I am in date section" + date);
//         this.hideDateTimePicker();
//     };

    // createApt = ()=> {
//         ApptApi.createApt({newDate:this.state.isDateTimePickerVisible})
//         .then(res=>{
//             this.setState({createAptStatus:true});
//             console.log(res.json);
//         })
//     .catch(err => console.log(err));
//     };


//     render() {
//         return (
//             <React.Fragment>
//                 <TouchableOpacity onPress={this.showDateTimePicker}>
//                     <Text>Online Appointment</Text>
//                 </TouchableOpacity>

//                 <DateTimePicker isVisible={this.state.isDateTimePickerVisible}
//                     onConfirm={this.state.handleDatePicked}
//                     onCancel={this.state.hideDateTimePicker}
//                 />
//             </React.Fragment>
//         )
//     }
// };



// export default Appointment;


