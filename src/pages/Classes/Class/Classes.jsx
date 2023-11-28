import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from '../../Shared/Button';
import SaturDay from '../ClassDay/SaturDay';
import SunDay from '../ClassDay/Sunday';
import MonDay from '../ClassDay/MonDay';
import TuesDay from '../ClassDay/TuesDay';
import ThursDay from '../ClassDay/ThursDay';
import WednesDay from '../ClassDay/WednesDay';
import Friday from '../ClassDay/Friday';
import PageTitle from './../../Shared/PageTitle/PageTitle';

const Classes = () => {
    return (
        <div className=" ">
            <PageTitle title='Classes'></PageTitle>
            <Tabs>
                <div className="flex justify-center mt-10">
                    <TabList className='grid grid-cols-2 lg:grid-cols-7 xl:flex xl:justify-evenly gap-0'>
                        <Tab><Button title='Saturday' /></Tab>
                        <Tab><Button title='Sunday' /></Tab>
                        <Tab><Button title='Monday' /></Tab>
                        <Tab><Button title='Tuesday' /></Tab>
                        <Tab><Button title='Thursday' /></Tab>
                        <Tab><Button title='Wednesday' /></Tab>
                        <Tab><Button title='Friday' /></Tab>
                    </TabList>
                </div>

                <div className="flex justify-center my-10">
                    <TabPanel>
                        <SaturDay></SaturDay>
                    </TabPanel>
                    <TabPanel>
                        <SunDay></SunDay>
                    </TabPanel>
                    <TabPanel>
                        <MonDay></MonDay>
                    </TabPanel>
                    <TabPanel>
                        <TuesDay></TuesDay>
                    </TabPanel>
                    <TabPanel>
                        <WednesDay></WednesDay>
                    </TabPanel>
                    <TabPanel>
                        <ThursDay></ThursDay>
                    </TabPanel>
                    <TabPanel>
                        <Friday></Friday>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default Classes;