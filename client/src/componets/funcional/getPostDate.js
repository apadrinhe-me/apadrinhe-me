const getPostDate = dateStreing => {
    let date = new Date(dateStreing);

    let month = "";
    switch (date.getMonth()){
        case 0:
            month = "janeiro";
            break;
        case 1:
            month = "fevereiro";
            break;
        case 2:
            month = "março";
            break;
        case 3:
            month = "abril";
            break;
        case 4:
            month = "maio";
            break;
        case 5:
            month = "junho";
            break;
        case 6:
            month = "julho";
            break;
        case 7:
            month = "agosto";
            break;
        case 8:
            month = "setembro";
            break;
        case 9:
            month = "outubro";
            break;
        case 10:
            month = "novembro";
            break;
        case 11:
            month = "dezembro";
            break;
        default:
            month="???";
    }

    return `${date.getDate()} de ${month} às ${date.getHours()}:${date.getMinutes()}`;
}

export default getPostDate;