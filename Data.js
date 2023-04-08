function Data(){const students = [
    {name: 'Lakshmi', marks: 90, location: 'Chennai', isPresent: true},
    {name: 'Mahesh', marks: 65, location: 'Canada', isPresent: true},
    {name: 'Madhu', marks: 55, location: 'Hyderabad', isPresent: false},
    {name: 'Ajith', marks: 70, location: 'Chennai', isPresent: true},
    {name: 'Ajay', marks: 45, location: 'Bangalore', isPresent: false},
    {name: 'Kartick', marks: 60, location: 'Chennai', isPresent: true}
];

return (<>
    <ul>
    {students.map((student, index)=> {if(!student.isPresent) 
        return null; 
        if(student.location !== 'Chennai')
        return null;
        return(<li>Name:{student.name}, 
        Location:{student.location}</li>)})}    
    </ul>
    <ul>
        {students.map((student, index)=>{if(student.marks>=70)
        return null;
             return(<li style={{color:'green'}}>Name:{student.name}, 
        Location:{student.location}</li>)})}
    </ul> 
    <ul>
    {students.map((student, index)=>{if(student.marks>55)
        return null;
             return(<li>{student.name} is Failed in this Exam and 
             the location is {student.location}</li>)})}

    </ul>
    </>
    )
    }
export default Data;