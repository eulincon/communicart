import React from 'react';
import { Link } from "react-router-dom";
import { SidebarData } from "../Sidebar/SidebarData";

const CardWishlist = () => {   

    return (
        <div className="card my-4 bg-lighter_">
            <div className="card-body txt-primary-lighter">
                <h3 className="card-title">Título</h3>
                <p>Velit minim cupidatat ad voluptate commodo magna occaecat consequat. Sint officia exercitation culpa non consectetur incididunt reprehenderit dolore. Qui ex mollit cupidatat non est voluptate sunt in nostrud et. Excepteur tempor dolor amet adipisicing qui reprehenderit veniam fugiat ut pariatur quis et eu.</p>
                <p className="card-text text-primary font-italic">Você curtiu esta publicação em: </p>
                <Link to="/vagas/1" className={`btn btn-primary btn-secondary_`}>Ver mais</Link>
            </div>
        </div>
    );
};

export default CardWishlist;