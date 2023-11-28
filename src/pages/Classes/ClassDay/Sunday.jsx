import ClassList from "../ClassList/ClassList";
import './../style.css'

const SunDay = () => {
    return (
        <div className="background-radial-gradient p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ClassList title='Exercise 1'
                subTitle='Barre Fitness: '
                description='Combine ballet-inspired moves with elements of Pilates, yoga, and strength training for a full-body workout.'></ClassList>

            <ClassList title='Exercise 2'
                subTitle='Boxing/Kickboxing:  '
                description='Improve agility and strength while learning striking techniques in a high-energy session.'></ClassList>

            <ClassList title='Exercise 3'
                subTitle='CrossFit: '
                description='Varied functional movements performed at high intensity, emphasizing strength and conditioning.'></ClassList>

            <ClassList title='Exercise 4'
                subTitle=' Workouts: '
                description='Intense group workouts incorporating a mix of cardio, strength, and agility exercises.'></ClassList>

            <ClassList title='Exercise 5'
                subTitle='Aerobics: '
                description='Classic rhythmic exercises combined with music for a full-body workout.'></ClassList>
        </div>
    );
};

export default SunDay;