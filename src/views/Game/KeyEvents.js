import React, {useEffect} from 'react'

const ALLOWED_KEYS = [37,38,39,40];

function KeyEvents(props) {
    const { setPressedKeys } = props;
    const onKeyDown = ({keyCode}) => {
        if (ALLOWED_KEYS.includes(keyCode)) {
            setPressedKeys(keyCode);
        }
    }
    useEffect(() => {

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [setPressedKeys]);

    return <div />;
}
 export default KeyEvents
