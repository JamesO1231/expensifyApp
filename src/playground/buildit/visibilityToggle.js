let changeVisibility = false;

const toggleVisibility = () => {
    changeVisibility = !changeVisibility;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {changeVisibility ? 'Hide details' : 'Show details'}
            </button>
            {changeVisibility && (
                <div>
                    <p>Look at all of these secrets I've been hiding!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
};

render();