import { myData } from "../../myData";

export default (req, res) => {
    res.status(200).json(myData);
};
