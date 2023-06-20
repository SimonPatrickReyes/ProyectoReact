import React from 'react'
import img from "../assets/images/home.png";

const Home = () => {
    return <main className='home'>
        <div className='home__presentation'>
        <h1 className='home__h1'>
            Welcome to our Bob's Burgers Fan Page!
        </h1>
        <h2 className='home__h2'>
            Are you a fan of the hilarious and heartwarming animated series, Bob's Burgers? Look no further! Our website is your ultimate destination for all things Bob's Burgers. Whether you're a seasoned fan or just starting to discover the show, we've got you covered with a treasure trove of information, fun facts, and more.
        </h2>
        <h2 className='home__h2'>
            Characters:
            Delve into the delightful world of the Belcher family and their eccentric friends. Meet Bob, the lovable and quirky patriarch who runs the family's burger joint with passion and humor. Join his devoted wife, Linda, whose infectious enthusiasm is matched only by her unique musical talents. Get to know their three equally charming and entertaining children: Tina, the socially awkward yet endearing teenager; Gene, the imaginative and enthusiastic middle child with a penchant for musical fart noises; and Louise, the cunning and mischievous youngest sibling with a knack for mischief and bunny ears.
        </h2>
        <h2 className='home__h2'>
            Episodes:
            Explore an extensive collection of Bob's Burgers episodes, spanning multiple seasons of laughter and unforgettable moments. From the show's early gems to the latest adventures, our episode guide will help you navigate the Belcher family's zany misadventures. Find synopses, memorable quotes, and highlights from each episode, ensuring you never miss a beat.
        </h2>
        <h2 className='home__h2'>
            Community:
            Join a vibrant and passionate community of Bob's Burgers fans just like you! Connect with fellow enthusiasts, share your favorite moments, and engage in lively discussions about the show. From theories and character analyses to fan art and cosplay, our community is the perfect place to immerse yourself in all things Bob's Burgers.

            So, whether you're seeking information about your favorite characters, want to relive unforgettable episodes, shop for awesome merchandise, or connect with fellow fans, our Bob's Burgers Fan Page is your go-to resource. Get ready to laugh, cheer, and fall in love with the Belcher family all over again!
        </h2>
        
        </div>
        <img src={img} alt="bobBurgersFamily" className='home__img' />


    </main>
}

export default Home