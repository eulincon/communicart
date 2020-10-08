import React from 'react';
import { FaComments } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';


const Footer = () => {
    return (
        <footer className="bg-secondary-dark text-center p-4">
            <Logo width="200px" alt="CommunicArt" className="mr-3"/>
            <small className="text-light"><strong>CommunicArt 2020©</strong> Todos os direitos reservados.</small>
        </footer>
    );
};

export default Footer;