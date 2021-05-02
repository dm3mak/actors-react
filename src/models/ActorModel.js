import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
class ActorModel {
    constructor(fName, lName, bday, imgUrl, imbdLink){
        this.fName = fName;
        this.lName = lName;
        this.bday = moment (bday);
        this.imgUrl = imgUrl;
        this.imdbLink = imbdLink;
        this.id = uuidv4();
    }
    age = () => {
        const now = moment ()
        return now.diff(this.bday, 'years');
    }
}
export default ActorModel