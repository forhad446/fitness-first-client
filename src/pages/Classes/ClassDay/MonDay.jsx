import ClassList from "../ClassList/ClassList";
import './../style.css'

const MonDay = () => {
    return (
        <div className="background-radial-gradient p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ClassList title='Exercise 1'
                subTitle='Swimming: '
                description='Low-impact exercise that works all major muscle groups while providing a refreshing workout.'></ClassList>

            <ClassList title='Exercise 2'
                subTitle='Running/Jogging Clubs: '
                description='Join a group for guided runs or jogs, encouraging camaraderie and motivation.'></ClassList>

            <ClassList title='Exercise 3'
                subTitle='HIIT (High-Intensity Interval Training): '
                description='Maximize calorie burn with short bursts of intense exercise followed by brief rest periods.'></ClassList>

            <ClassList title='Exercise 4'
                subTitle='Cardio Workout: '
                description='Boost heart health and endurance with exercises aimed at elevating heart rate.'></ClassList>

            <ClassList title='Exercise 5'
                subTitle='Strength Training: '
                description='Build muscle and improve strength using weights, resistance bands, or bodyweight exercises.'></ClassList>

            <ClassList title='Exercise 6'
                subTitle='Aerobics: '
                description=' Classic rhythmic exercises combined with music for a full-body workout.'></ClassList>

            <ClassList title='Exercise 7'
                subTitle='Cycling/Spin Classes: '
                description='Pedal your way to fitness in high-energy stationary bike sessions focusing on endurance and strength.'></ClassList>
        </div>
    );
};

export default MonDay;