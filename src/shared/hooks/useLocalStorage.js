import React from 'react';


function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {

        setTimeout(
            () => {

                try {
                    const localStorageItem = localStorage.getItem(itemName);

                    console.log(itemName);

                    if (!localStorageItem) {
                        localStorage.setItem(itemName, initialValue);
                        setItem(initialValue);
                    } else {
                        setItem(JSON.parse(localStorageItem));
                    }

                } catch (error) {
                    setError(true);
                }
                setLoading(false);

            }
        ,2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }
    return {
        item,
        saveItem,
        loading,
        error
    }
}

export { useLocalStorage };