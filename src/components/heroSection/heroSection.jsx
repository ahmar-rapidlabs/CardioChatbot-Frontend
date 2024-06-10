import React from 'react'
import hero from '../../assets/images/hero.png'
import designface from '../../assets/images/designface.png'
import solimg from '../../assets/images/solimg.png'
import support from '../../assets/icons/support.png'
import insights from '../../assets/icons/insights.png'
import cloud from "../../assets/icons/Protect Cloud.png"
import resource from "../../assets/icons/resource.png"
import { Link } from 'react-router-dom'

function heroSection() {
  return (
    <>
    <div className="hero_section_container text-dark">
    <div className="banner_container mt-5">
        <div className="flex md:flex-row flex-col justify-around items-center">
            <div className="leftside-img">
                <div className="img">
                    <img src={hero} className="artboard-img max-w-full h-auto" alt="cardio.png"/>
                </div>
            </div>
            <div className="rightside-bg-text">
                <div className="bgimg bg-image">
                    <div className="text-overlay">
                        <h1 className="capitalize text-dark font-bold text-4xl">Cardio-AI Chatbot</h1>
                        <p className="description my-5 text-lg">Cardio-AI Chatbot is an intelligent application designed to provide users with instant, AI-driven advice and information on cardiovascular health, facilitating early detection and preventive measures for heart-related conditions.</p>
                        <Link to='/chatbot' className="bg-red-600 px-3 py-2 rounded-md text-white">Try our Chatbot</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="design-face-container mt-5">
        <div className="design-img flex justify-center">
            <img src={designface} className="max-w-full h-auto" alt="Cardio Bot UX Design Face.png"/>
        </div>
    </div>
    <div className="solutions-section-main mt-5">
        <div className="solution-before-img">
            <div className="sol-img flex justify-center">
                <img src={solimg} className="max-w-full h-auto" alt="Artboard.png"/>
            </div>
        </div>
    </div>

    <div className="our_solutions">
        <h3 className="text-center font-bold text-3xl capitalize">Our Solution for your problems</h3>
        <div className="cards_container mt-5 flex mx-6">
            <div className="all_cards flex md:flex-row flex-col gap-2 justify-center items-center">
                <div className="card1">
                        <div className="card-body block max-w-xl p-6 bg-white border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-start mb-3 ">
                                <div className="card_icon">
                                    <img
                                        className="max-w-full h-auto"
                                        src={support}
                                        alt="Card image cap"
                                    />
                                </div>
                                <div><h5 className="card-title m-0">24/7 Support</h5></div>
                                
                            </div>
                            <p className="card-text mb-5">Always there for you, offering emotional support and conversation anytime you need it.</p>
                        </div>
                    
                </div>
                <div className="card2">
                        <div className="card-body block max-w-xl p-6 bg-white border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-start mb-3">
                                <div className="card_icon">
                                    <img
                                        className="max-w-full h-auto"
                                        src={insights}
                                        alt="Card image cap"
                                    />
                                </div>
                                <div><h5 className="card-title m-0">Personalized Insights</h5></div>
                                
                            </div>
                            <p className="card-text mb-5">Synced from a Windows, Mac, or Ubuntu Linux computer to the cloud and vice versa without any problems.</p>
                        </div>
                    
                </div>
                <div className="card3">
                        <div className="card-body block max-w-xl p-6 bg-white border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-start mb-3">
                                <div className="card_icon">
                                    <img
                                        className="max-w-full h-auto"
                                        src={cloud}
                                        alt="Card image cap"
                                    />
                                </div>
                                <div><h5 className="card-title m-0">Secure Conversations</h5></div>
                                
                            </div>
                            <p className="card-text mb-5">Keep track of your emotional well-being with intuitive mood logs and receive insights to improve your mental health.</p>
                        </div>
                    
                </div>
                <div className="card4 col-lg-3 col-md-6 col-12">
                        <div className="card-body block max-w-xl p-6 bg-white border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-start mb-3">
                                <div className="card_icon">
                                    <img
                                        className="max-w-full h-auto"
                                        src={resource}
                                        alt="Card image cap"
                                    />
                                </div>
                                <div><h5 className="card-title m-0">Resource Library</h5></div>
                                
                            </div>
                            <p className="card-text mb-5">Access a curated selection of articles, videos, and exercises designed to support your mental health journey.</p>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>

    </div>
       

    </>
  )
}

export default heroSection