import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import AddEvent from '../screens/AddEvent';
import Addeventform from '../screens/Addeventform';
import FestDetails from '../screens/FestDetails';

import Committee from '../screens/Committee';
import AddCommitteeForm from '../screens/AddCommitteeForm';
import CommitteeDetails from '../screens/CommitteDetails';
import OrganizerCommitteTask from '../screens/OrganizerCommitteTask';


import EventDetails from '../screens/EventDetails';
import ChangeeventHead from '../screens/ChangeeventHead';
import AddTeammembers from '../screens/AddTeammembers';
import CreateFest from '../screens/CreateFest';
import CreateFestForm from '../screens/CreateFestForm';
import Organizereventnotification from '../screens/Organizereventnotification';
import Organizereventeaddtask from '../screens/Organizereventeaddtask';
import Organizereventcompletedtask from '../screens/Organizereventcompletedtask';
import Organizeeventependingtask from '../screens/Organizereventependingtask';
import Organizereventmeberslist from '../screens/Organizereventmeberslis';
import AddCommitte from '../screens/AddCommitte';
import AdminLogin from '../screens/AdminLogin';
import OrganizerCommitteeDetails from '../screens/OrganizerCommitteeDetails';
import Organizernotification from '../screens/Organizernotification';
import Organizercommitteaddtask from '../screens/organizercommitteaddtask';

import Organizercommittependingtask from '../screens/organizercommittependingtask';
import Organizercommittememberslist from '../screens/organizercommittememberslist';
import Organizercommittecompletedtask from '../screens/organizercommittecompletedtask';

const Stack = createStackNavigator();


function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="AdminLogin" component={AdminLogin} />
            <Stack.Screen name="CreateFest" component={CreateFest} />
            <Stack.Screen name="CreateFestForm" component={CreateFestForm} />
            <Stack.Screen name="FestDetails" component={FestDetails} />
            <Stack.Screen name="AddEvent" component={AddEvent} />
            <Stack.Screen name="Addeventform" component={Addeventform} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="Committee" component={Committee} />
            <Stack.Screen name="AddCommitteeForm" component={AddCommitteeForm} />
            <Stack.Screen name="CommitteeDetails" component={CommitteeDetails} />
            <Stack.Screen name="OrganizerCommitteTask" component={OrganizerCommitteTask} />
            <Stack.Screen name="Organizereventnotification" component={Organizereventnotification} />
            <Stack.Screen name="Organizereventeaddtask" component={Organizereventeaddtask} />
            <Stack.Screen name="Organizereventcompletedtask" component={Organizereventcompletedtask} />
            <Stack.Screen name="Organizeeventependingtask" component={Organizeeventependingtask} />
            <Stack.Screen name="Organizereventmeberslist" component={Organizereventmeberslist} />
            <Stack.Screen name="AddCommitte" component={AddCommitte} />
           
            <Stack.Screen name="ChangeeventHead" component={ChangeeventHead} />
            <Stack.Screen name="AddTeammembers" component={AddTeammembers} />
            <Stack.Screen name="OrganizerCommitteeDetails" component={OrganizerCommitteeDetails} />
            <Stack.Screen name="Organizernotification" component={Organizernotification} />
            <Stack.Screen name="Organizercommitteaddtask" component={Organizercommitteaddtask} />
            <Stack.Screen name="Organizercommittecompletedtask" component={Organizercommittecompletedtask} />
            <Stack.Screen name="Organizercommittependingtask" component={Organizercommittependingtask} />
            <Stack.Screen name="Organizercommittememberslist" component={Organizercommittememberslist} />

         
            </Stack.Navigator>
        </NavigationContainer>

        

    )
}

export default Navigation