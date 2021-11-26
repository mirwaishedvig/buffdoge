import { Link } from 'react-scroll'

import './Footer.scss';


export const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__banner">
                <div className="footer__banner__back">
                    <img src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/Bot+Banner0.75x.png" alt="pic"></img>
                </div>

                <div className="footer__banner__wrapper">
                    <div className="footer__banner__bot">
                        <img src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/bot+character0.5x.png" alt="pic"></img>
                    </div>
                
                    <div className="footer__banner__content">
                        <div className="footer__banner__content__title">
                            join buffdoge community
                        </div>

                        <div className="footer__banner__content__desc">
                            <p>
                                to stay up to date for latest <br/> news, giveaways and more...
                            </p>
                        </div>

                        <div className="footer__banner__content__join">
                            <a href="https://discord.gg/sVtpaCy7S2" target="_blank" rel="noreferrer"><button>Join discord</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__content">
                <div className="footer__content__developer">
                    <p>developed by</p>
                    <p className="footer__content__developer__name">mirwais</p>
                </div>

                <div className="container">
                    <div className="footer__content__copyright">
                        ©2021 BuffDoge. All rights reserved.
                    </div>

                    <div className="footer__content__menu">
                        <div className="footer__content__menu__home">
                            <Link
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                to="mint"
                            >
                                home
                            </Link>
                        </div>

                        <a href="https://www.instagram.com/buffdogenft/" target="_blank" rel="noreferrer">
                            <span></span>
                            <img alt="img" src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/instagram.svg"></img>
                        </a>
                        <a href="https://twitter.com/BuffDogeNFT" target="_blank" rel="noreferrer">
                            <span></span>
                            <img alt="img" src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/twitter.svg"></img>
                        </a>
                        <a href="https://discord.gg/sVtpaCy7S2" target="_blank" rel="noreferrer">
                            <span></span>
                            <img alt="img" src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/discord.svg"></img>
                        </a>
                        <a href="#javascript;" className="noAnimation">
                            <span></span>
                            <img alt="img" src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/openseaGrey.svg"></img>
                        </a>

                        <div className="footer__content__menu__logo">
                            <img alt="img" src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/logo.svg"></img>  
                        </div>
                    </div>
                </div>

                <div className="footer__content__paper">
                    <a href="https://buffdoge.blob.core.windows.net/storage/Buff_Paper.pdf" target="_blank" rel="noreferrer">BUFF PAPER</a>
                </div>
            </div>
        </section>
    )
}

export default Footer;