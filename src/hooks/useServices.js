import { useEffect, useState } from "react";

const useServies = () => {

    const [courses,setCourses] = useState([]);
    
    useEffect(() => {
         fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    } , []);

    return [courses];
}

export default useServies;