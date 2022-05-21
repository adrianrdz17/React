import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
    // La idea es que mantenga la referencia mientras el componente este montado.
    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setTimeout(() => {
                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data,
                        });
                    } else console.log('setState no se llamo');
                }, 4000);
            });
    }, [url]);

    return state;
};
