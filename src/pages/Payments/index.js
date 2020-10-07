import React from 'react';

import { ReactComponent as SvgPhoto } from './photo.svg';
import { ReactComponent as SvgIconDate } from './iconDate.svg';

import style from './styles.module.css';

const Payments = () => {
    return(
        <div className={style.body}>            
            <h1>Pagamentos</h1>
            <p>Veja abaixo a lista de pagamentos pendentes ou finalizados:</p>

            <div className={style.card}>
                
                <SvgPhoto className={style.photo}/>
                <p className={`${style.title} ${style.p_tag}`}>Título da publicação</p>
                <p className={`${style.colorDate} ${style.p_tag}`}> <SvgIconDate className={style.iconDate}/> Prazo da entrega:</p>
                <div className="container">
                
                <p className={`${style.succeedTransaction} ${style.p_tag}`}>Pagamento realizado</p>
                <p className={`${style.info} ${style.p_tag}`}>Ver publicação</p>
                </div>
            </div>
            <br />
            <div className={style.card}>
                
                <SvgPhoto className={style.photo}/>
                <p className={style.title}>Título da publicação</p>
                <p className={style.colorDate}> <SvgIconDate className={style.iconDate}/> Prazo da entrega:</p>
                <div className="container">
                
                <p className={style.pendingTransaction}>Pagamento pendente</p>
                <p className={style.info}>Já realizou o pagamento? Mude o status</p>
                </div>
            </div>
            <br />
            <div className={style.card}>
                
                <SvgPhoto className={style.photo}/>
                <p className={style.title}>Título da publicação</p>
                <p className={style.colorDate}> <SvgIconDate className={style.iconDate}/> Prazo da entrega:</p>
                <div className="container">
                
                <p className={style.succeedTransaction}>Pagamento realizado</p>
                <p className={style.info}>Ver publicação</p>
                </div>
            </div>

        </div>               
                        
    );
};

export default Payments;