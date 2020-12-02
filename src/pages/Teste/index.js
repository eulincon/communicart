import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavbarDataLogout } from "../../components/SkeletonPage/Main/NavbarData";
import { ReactComponent as Logo } from "../../assets/images/logo_menu.svg";
import styles from './styles.module.css';

const Teste = () => {
	const { pathname } = useLocation();
	const navbarData = NavbarDataLogout;
	return (
		<>
			{/* Narbar */}
			<nav nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary_ mb-2" >
				<Link className="navbar-brand	d-none d-lg-block" to={"/"}>
					<Logo width={200} alt="Communicart" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<Link className="navbar-brand" to={"#"}>
						<Logo width={200} alt="Communicart" />
					</Link>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
						{navbarData.map((item, index) => {
							return (
								<li
									key={index * Math.random()}
									className={
										pathname === item.path
											? "nav-item active ml-3"
											: "nav-item ml-3"
									}
								>
									<Link
										className={`nav-link`}
										style={pathname === item.path ? { color: '#04d361' } : {}}
										to={item.path}>
										{item.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
			<div className={`h-100 d-flex ${styles.gradient}`}>
				<div className={`bg-light text-center rounded text-center shadow container align-self-center ${styles.gradient_card}`}>
					<h1>Como Funciona?</h1>
					<p>Anuncie o seu trabalho facilmente, contrate freelancers e pague com segurança.</p>
					<div className="row">
						<div className="col-8">
							<p>Milhares de freelancers prontos para começar a trabalhar no seu projeto</p>
							<div className="row pl-2 d-flex justify-content-between">
								<div className="col-3 rounded shadow bg-light">
									Publique
								</div>
								<div className="col-3 card shadow">
									Selecione
								</div>
								<div className="col-3 card">
									Finalize
								</div>
							</div>
						</div>
						<div className="col">
							<img src="https://blush.design/api/download?shareUri=64gcawovZ&s=0.1%7EB28B67-0.2%7EEAC7A8-0.3%7EB28B67&w=800&h=800&fm=png" alt="" width="500vw"/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};

export default Teste;