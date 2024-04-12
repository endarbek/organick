import Image from "next/image";
import React from "react";
import styles from "./styles.module.css"
import { wrap } from "module";
import Link from "next/link";

const page = () => {
    return <div>contact
        <h1 className={styles.blog}>Contact Us</h1>

        <div className={styles.content}>

            <div className={styles.wrap}>
                <div className={styles.cardblock}>

                    <div className={styles.info}>

                        <div className={styles.contactImg}>
                            <Image className={styles.info_wrap} src="/img/banan.jpg" alt="Potato" width={624} height={640} />
                        </div>

                        <div className={styles.w_text}>

                            <div className={styles.title}>

                                <h2 className={styles.section_title}>{"We'd love to talk about how we can work together."}</h2>

                                <p className={styles.p}>{"Simply dummy text of the printing and typesetting industry. Lorem had ceased to      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}</p>
                            </div>

                            <div className={styles.info_items_wrap}>
                                <div className={styles.info_icon}>
                                    <Image src="./img/Gmail.svg" alt="Gamil" width={89} height={89} />
                                </div>
                                <div className={styles.info_link}>
                                    <h2 className={styles.info_link_text}>Massege</h2>
                                    <a className={styles.info_link_gmail} href="#">support@organic.com</a>
                                </div>
                            </div>
                            <div className={styles.info_items_wrap}>

                                <div className={styles.info_icon}>
                                    <Image src="./img/call.svg" alt="Gamil" width={89} height={89} />
                                </div>
                                <div className={styles.info_link}>
                                    <h2 className={styles.info_link_text}>Contact Us</h2>
                                    <a className={styles.info_link_gmail} href="#">+01 123 456 789</a>
                                </div>


                            </div>
                            <div className={styles.info_ins}>
                                <div className={styles.insta_info}>
                                    <Link href="https://www.instagram.com/"><img src="/img/insta.svg" alt="" /></Link>
                                </div>
                                <div className={styles.insta_info}>
                                    <Link href="https://www.facebook.com/"><img src="/img/facebook.svg" alt="" /></Link>
                                </div>
                                <div className={styles.insta_info}>
                                    <Link href="https://twitter.com/"><img src="/img/twitter.svg" alt="" /></Link>
                                </div>
                                <div className={styles.insta_info}>
                                    <Link href="https://www.pinterest.com/"><img src="/img/pinterest.svg" alt="" /></Link>
                                </div>
                            </div>

                        </div>
                        <div className={styles.card_info}>
                            <div className={styles.container_img}>
                                <div className={styles.plagin}>
                                    {/* <Image src="/img/plagin.jpg" alt="" width={1400} height={756} /> */}
                                <div className={styles.location_content}>
                                    <div className={styles.info_card}>
                                        <p className={styles.subtitle}>Location</p>
                                        <h2 className={styles.sectiontitle}>Our Farms</h2>
                                        <p className={styles.par}>
                                            Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using.
                                        </p>
                                        <div className={styles.icon}>
                                            <Image src="./img/Icon (1).svg" alt="Gamil" width={50} height={50} />
                                            <div className={styles.txt}>
                                                <h2 className={styles.txt2}>New York, USA:</h2>
                                                <p className={styles.txt1}>299 Park Avenue New York,
                                                    New York 10171</p>
                                            </div>
                                        </div>
                                        <div className={styles.icon}>
                                            <Image src="./img/Icon (1).svg" alt="Gamil" width={50} height={50} />
                                            <div className={styles.txt}>
                                                <h2 className={styles.txt2}>London, UK:</h2>
                                                <p className={styles.txt1}>30 Stamford Street,
                                                    London SE1 9LQ</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.opnim}>
                        <div className={styles.container_w_container}>
                            <div className={styles.w_form}>
                                <div className={styles.form_info}>
                                    <div className={styles.w_form_info}>
                                        <label form="full-name" className={styles.label_info} htmlFor="">Full Name*</label>
                                        <input className={styles.info_input} maxLength={256} name="name-2" data-name="Name 2" placeholder="Enter Your Name" type="text" id="full-name" />
                                    </div>
                                    <div className={styles.w_form_info}>
                                        <label form="full-name" className={styles.label_info} htmlFor="">Your Email*</label>
                                        <input className={styles.info_input} maxLength={256} name="name-2" data-name="Name 2" placeholder="example@yourmail.com" type="text" id="full-name" />
                                    </div>
                                </div>
                                <div className={styles.form_info}>
                                    <div className={styles.w_form_info}>
                                        <label form="full-name" className={styles.label_info} htmlFor="">Company*</label>
                                        <input className={styles.info_input} maxLength={256} name="name-2" data-name="Name 2" placeholder="yourcompany name here" type="text" id="full-name" />
                                    </div>
                                    <div className={styles.w_form_info}>
                                        <label form="full-name" className={styles.label_info} htmlFor="">Subject*</label>
                                        <input className={styles.info_input} maxLength={256} name="name-2" data-name="Name 2" placeholder="how can we help" type="text" id="full-name" />
                                    </div>
                                </div>
                                <div className={styles.form_info}>
                                    <div className={styles.w_form_info}>
                                        <label form="full-name" className={styles.label_info} htmlFor="">Message</label>
                                        <input className={styles.info_input_m} maxLength={5000} name="field" data-name="field" placeholder="Hello There, I would like to..." type="text" id="message" />
                                    </div>
                                </div>
                            </div>
                            <button className={styles.btn_info}>Send Message</button>
                        </div>
                    </div>



                </div>

            </div>


        </div>



    </div >



};

export default page;
