import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resource = ({ path, render }) => {
    const initialState = {
        data: [],
        loading: true,
        error: null
    };

    const [state, setState] = useState(initialState);

    const getData = async () => {
        try {
            setState({ ...state, loading: true });
            const result = await axios.get(path);

            const newData = {
                data: result.data,
                loading: false,
                error: null
            };

            setState(newData);
        } catch (error) {
            console.error('Error in getData:', error.message);
            setState({
                data: [],
                loading: false,
                error: error.message
            });
        }
    };

    useEffect(() => {
        getData();
    }, [path]);

    return (
        <div className='showList'>
            {render(state)}
        </div>
    );
};

export default Resource;