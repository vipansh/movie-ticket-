import React, { useContext } from 'react'
import { MovieNameContaxt } from '../Contaxt/MovieNameContaxt'
import { useHistory } from "react-router-dom";
import { FaTicketAlt } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { SelectedArrayContext } from '../Contaxt/SelectedContaxt';





export const ListItem = ({ data }) => {
    let history = useHistory();
    const { movieName, setmovieName } = useContext(MovieNameContaxt)
    const { selectedArray, setSelectedArray } = useContext(SelectedArrayContext)


    const movieClicked = () => {
        setmovieName(data.name)
        setSelectedArray('')
        history.push(`/select-ticket`);


    }


    return (
        <div className="list-item">
            <div className="list-thumb">
                <img src={data.img} alt="" className="poster-img" />
            </div>
            <span className="movie-time-left">{data.timeAt}</span>
            <span className="book-now" onClick={movieClicked}>
                <i className="fa fa-ticket"> <FaTicketAlt /> </i>
                <div className="book-now-text">Book Now</div>
            </span>
            <div className="movie-detail">
                <div className="short-detail">
                    <table>
                        <tbody>
                            <tr>
                                <td className="title">{data.name}</td>
                            </tr>
                            <tr>
                                <td className="author">by {data.diractor}</td>
                            </tr>
                            <tr>
                                <td className="rating">
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>

                                    <i className="fa fa-star na"><AiFillStar /></i>
                                </td>
                            </tr>
                            <tr>
                                <td className="genre">
                                    {data.genre.map((data, i) => (<span key={i}>{data}|</span>))}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <span className="more-option"></span>
                </div>


            </div>
        </div >

    )
}
