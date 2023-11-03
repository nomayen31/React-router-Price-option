// import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
            <li className='mr-6'

            >
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;