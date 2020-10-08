import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import Jump from 'react-reveal/Jump';

const CardVaga = () => {
    const [likeHeart, setLikeHeart] = useState(false);

    const like = () => {
        setLikeHeart(!likeHeart);
    }

    return (
        <div className="card my-4">
            <div className="card-body">
                <h4 className="card-title">Título do anúncio</h4>
                <span>Nome da empresa</span>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/vagas/1" className={`btn btn-primary btn-secondary_`}>Ver mais</Link>
                {likeHeart ?
                    <div className="float-right">
                        <Jump>
                            <AiIcons.AiFillHeart onClick={like} size="3rem" color="red"  />
                        </Jump>
                    </div>
                    :
                    <AiIcons.AiOutlineHeart onClick={like} size="3rem" className="float-right" />
                }
            </div>
        </div>
    );
};

export default CardVaga;