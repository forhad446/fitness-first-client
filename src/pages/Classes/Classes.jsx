import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from './Button';

const Classes = () => {
    return (
        <div className="my-10 ">
            <Tabs>
                <div className="flex justify-center">
                    <TabList className='grid grid-cols-2 md:grid-cols-7 md:flex md:justify-evenly gap-0'>
                        <Tab><Button title='Saturday' /></Tab>
                        <Tab><Button title='Sunday' /></Tab>
                        <Tab><Button title='Monday' /></Tab>
                        <Tab><Button title='Tuesday' /></Tab>
                        <Tab><Button title='Thursday' /></Tab>
                        <Tab><Button title='Wednesday' /></Tab>
                        <Tab><Button title='Friday' /></Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Classes;