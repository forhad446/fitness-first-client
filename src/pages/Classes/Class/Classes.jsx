import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from '../../Shared/Button';
import SaturDay from '../ClassDay/SaturDay';
import PageTitle from './../../Shared/PageTitle/PageTitle';
import useClassList from '../../../hook/useClassList';
import ClassList from '../ClassList/ClassList';

const Classes = () => {
    const [classList] = useClassList()

    const Saturday = classList.filter(item => item.day === 'Saturday')
    const Sunday = classList.filter(item => item.day === 'Sunday')
    const Monday = classList.filter(item => item.day === 'Monday')
    const Tuesday = classList.filter(item => item.day === 'Tuesday')
    const Wednesday = classList.filter(item => item.day === 'Wednesday')
    const Thursday = classList.filter(item => item.day === 'Thursday')
    const Friday = classList.filter(item => item.day === 'Friday')
    console.log(Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday);

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
                        <Tab><Button title='Wednesday' /></Tab>
                        <Tab><Button title='Thursday' /></Tab>
                        <Tab><Button title='Friday' /></Tab>
                    </TabList>
                </div>

                <div className="flex justify-center my-10">
                    <TabPanel>
                        <div className="background-radial-gradient py-20 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                            {
                                Saturday.map(item => <ClassList
                                    title={item.title}
                                    description={item.short_description} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="background-radial-gradient py-20 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                            {
                                Sunday.map(item => <ClassList
                                    title={item.title}
                                    description={item.short_description} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="background-radial-gradient py-20 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                            {
                                Monday.map(item => <ClassList
                                    title={item.title}
                                    description={item.short_description} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="background-radial-gradient py-20 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                            {
                                Tuesday.map(item => <ClassList
                                    title={item.title}
                                    description={item.short_description} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="background-radial-gradient py-20 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                            {
                                Wednesday.map(item => <ClassList
                                    title={item.title}
                                    description={item.short_description} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="background-radial-gradient py-20 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                            {
                                Thursday.map(item => <ClassList
                                    title={item.title}
                                    description={item.short_description} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="background-radial-gradient py-20 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                            {
                                Friday.map(item => <ClassList
                                    title={item.title}
                                    description={item.short_description} />)
                            }
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default Classes;