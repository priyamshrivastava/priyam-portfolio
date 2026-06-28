import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
    const cursorRef = useRef(null);
    const cursor2Ref = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current && cursor2Ref.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
                cursor2Ref.current.style.left = `${e.clientX}px`;
                cursor2Ref.current.style.top = `${e.clientY}px`;
            }
        };

        document.addEventListener('mousemove', moveCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <>
            <div className="cursor" ref={cursorRef}></div>
            <div className="cursor2" ref={cursor2Ref}></div>
        </>
    );
};

export default Cursor;