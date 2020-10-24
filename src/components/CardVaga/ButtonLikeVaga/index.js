import React, { useState } from 'react';

import * as AiIcons from 'react-icons/ai';
import Jump from 'react-reveal/Jump';

const ButtonLikeVaga = () => {
    const [likeHeart, setLikeHeart] = useState(false);

    const like = () => {
        setLikeHeart(!likeHeart);
    }
    return (
        <>
            {likeHeart ?
                <div className="float-right">
                    <Jump>
                        <AiIcons.AiFillHeart onClick={like} size="3rem" color="red"  />
                    </Jump>
                </div>
                :
                <AiIcons.AiOutlineHeart onClick={like} size="3rem" className="float-right" />
            }
        </>
    );
};

export default ButtonLikeVaga;