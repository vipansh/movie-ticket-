import React, { useContext } from 'react'
import "../styles/Navbar.css"
import { ListItem } from './ListItem'
export const Mainpage = () => {


    let moviesList = [{
        name: "Annabelle",
        timeAt: "5:30 PM",
        img: "https://s5.postimg.cc/7ysk9gzz7/annabelle.jpg",
        diractor: "David F. Sandberg",
        genre: ["Horror", "Mystery", "Thriller"],
        raitings: "3",
        story: `12 years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, where they soon become the target of the dollmaker's possessed creation, Annabelle.
        Annabelle: Creation is a 2017 American supernatural horror film directed by David F. Sandberg and written by Gary Dauberman. It is a prequel to 2014's Annabelle and the fourth installment in The Conjuring series. The film stars Stephanie Sigman, Talitha Bateman, Anthony LaPaglia and Miranda Otto, and depicts the possessed Annabelle doll's origin.
        Annabelle: Creation premiered at the LA Film Festival on June 19, 2017, and was theatrically released in the United States on August 11, 2017. The film has grossed over $291 million worldwide and received generally positive reviews from critics, who praised the atmosphere and acting, and noted it as an improvement over its predecessor.`

    },

    {
        name: "Bahubali 2",
        timeAt: "5:30 PM",
        img: "https://s5.postimg.cc/9du4y78s3/bahubali21.jpg",
        diractor: "S.S. Rajamouli",
        genre: ["Action", "Drama", "Adventure"],
        raitings: "3",
        story: `When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.<br />
        Baahubali 2: The Conclusion was premiered at the British Film Institute, and is the inaugural feature film at the 39th Moscow International Film Festival. The Conclusion was theatrically released over 9000 screens worldwide on 28 April 2017. Baahubali 2 was the first Telugu film to be released in 4K High Definition format. It is estimated that close to 200 screens were upgraded to 4K projectors before the release date of the movie.
        It became the first ever Indian film to gross over ?1,000 crore (US$160 million) in all languages, doing so in just ten days`
    },
    {
        name: "Inception",
        timeAt: "7:00 PM",
        img: "https://s5.postimg.cc/5u878eds3/inception.jpg",
        diractor: "Christopher Nolan",
        genre: ["Action", "Sci-Fi", "Adventure"],
        raitings: "3",
        story: `A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.
        Inception's première was held in London on July 8, 2010; its wide release to both conventional and IMAX theaters began on July 16, 2010. A box office success, Inception grossed over $800 million worldwide. The home video market also had strong results, with $68 million in DVD and Blu-ray sales. Inception opened to acclaim from critics, who praised its story, score, and ensemble cast. It won four Academy Awards for Best Cinematography, Best Sound Editing, Best Sound Mixing, and Best Visual Effects, and was nominated for four more: Best Picture, Best Original Screenplay, Best Art Direction, and Best Original Score.`
    }
        ,
    {
        name: "Avatar",
        timeAt: "9:30 PM",
        img: "https://s5.postimg.cc/da7gu6ec3/avatar.jpg",
        diractor: "James Cameron",
        genre: ["Action", "Fantasy", "Adventure"],
        raitings: "3",
        story: `A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.
        Avatar premiered in London on December 10, 2009, and was internationally released on December 16 and in the United States and Canada on December 18, to positive critical reviews, with critics highly praising its groundbreaking visual effects. During its theatrical run, the film broke several box office records and became the highest-grossing film of all time, as well as in the United States and Canada, surpassing Cameron's Titanic, which had held those records for twelve years. It also became the first film to gross more than $2 billion and the best-selling film of 2010 in the United States.`
    }
    ]


    return (
        <div>
            <div className="container">

                <div className="app">
                    <div className="nav">
                        <div className="nav-top">
                            <i className="fa fa-bars"></i><i className="fa fa-film"></i><i className="fa fa-search"></i>
                        </div>
                        <ul>
                            <li className="active">Today</li>
                            <li>Sep 16</li>
                            <li>Sep 15</li>
                            <li>Sep 14</li>
                        </ul>
                    </div>

                    <div className="list-items">


                        {moviesList.map((data, i) => {
                            return <ListItem data={data} key={i} />
                        })}



                    </div>


                </div>

            </div>




        </div>
    )
}
