import "./cardCurso.css";
import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CardCurso = props => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Card className="border" sx={{ maxWidth: 345, background: "#191922", borderRadius: "15px", boxShadow: "0 0 3px black", color: "white" }} className="cardCourse" >
            <div className="CardHeader">
                <div className="containerLeft">
                    <div className="avatarCard">
                        <img src={require("../../../media/course_banners/proa_logo.jpg")} height="45px" />
                    </div>
                    <div className="titleSubtitleCard">
                        <h1>Proprofissão</h1>
                        <span>Instituto PROA</span>
                    </div>
                </div>
                <div className="iconCategoryCard">
                    <i className="bi bi-laptop"></i>
                </div>
            </div>
            <CardMedia
                component="img"
                height="194"
                image={require("../../../media/course_banners/banner_proa.jpg")}
                alt="PROPROFISSÃO"
            />
            <CardContent sx={{ width: "100%" }}>
                <div className="listCourseDetails">
                    <ul>
                        <li>Duração: 6 meses</li>
                        <li>Localidade: São Paulo</li>
                        <li>HTML, CSS e JS</li>
                        <li>Java Web Developtment</li>
                    </ul>
                </div>

            </CardContent>
            <CardActions disableSpacing className="cardActions">
                <button aria-label="add to favorites">
                    FAVORITO
                </button>
                <button aria-label="share">
                    SHARE
                </button>
                <button className="expandCard"
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more">V</button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className="cardDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda hic sunt est aliquam perspiciatis consectetur qui dolor, sed tempora doloribus tenetur placeat nam aliquid. Ad expedita accusantium mollitia. Consequatur?
                </CardContent>
            </Collapse>
        </Card>

    );
}

export default CardCurso;





/*

CARD ANTIGO



  <div className="cardCurso">
            <div className="containerRosa" ></div>
            <div className="containerCardCurso">

                <div className="cadCursoHeader">
                    <h3 className="cardTamanho1">Metodologia ágeis</h3>
                    <h4 className="cardTamanho2">Intituto Proa - Administração</h4>
                    <span className="stars">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </span>
                    <div className="separador"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum,
                        nesciunt repudiandae perferendis aut consectetur facere. Eius obcaecati
                        vero maiores quisquam, assumenda ex fugiat consequatur quod delectus odio
                        sunt officiis.</p>
                </div>
                <div className="interacaoCurso">
                    <span className="informacaoDuracao">
                        <i className="bi bi-clock-history"></i>
                        <div>
                            <h2 className="cardTamanho1">Duração</h2>
                            <h3 className="cardTamanho2">120h</h3>
                        </div>
                    </span>
                    <i className="bi bi-clipboard2-check"></i>
                    <i className="bi bi-star"></i>
                </div>
                <div className="InteracaoRecomendarMais">
                    <button className="buttonRecomendarMais">Recomendar</button>
                    <button className="buttonRecomendarMais buttonMais">. . .</button>
                </div>
            </div>

        </div>
*/