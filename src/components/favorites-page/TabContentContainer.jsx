const TabContentContainer = ({ entities, children }) => {
    const isEmpty = ! entities.length;

    return (
        <>
        {
            isEmpty ?
                <div className='empty-list'>
                    <h2>Тут пока ничего нет</h2>
                    <h2 className='gradient-text'>Добавьте сюда чего нибудь!</h2>
                </div>
            :
            <>
                { children }
            </>
        }
        </>
    );
};

export default TabContentContainer;