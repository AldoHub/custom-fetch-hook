import React, { Fragment } from 'react';

//import the custom hook
import { useFetch } from '../Hooks/useFetch';

const Main = () => {

    const {data, error, loading} = useFetch("https://jsonplaceholder.typicode.com/todos");


    if(loading) {
        return <p>Loading ...</p>
    }

    if(error){
        return <p>error</p>
    }

    if(data){
        //you can do whatever you want with the data
        console.log(data)
    }

    return (
        <Fragment>
            <div>
                <p>Main Works!!</p>
            </div>
        </Fragment>
    );
}

export default Main;